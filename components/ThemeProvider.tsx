"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light" | "system";

type TransitionDocument = Document & {
  startViewTransition?: (update: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
    skipTransition: () => void;
  };
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: (event?: React.MouseEvent | MouseEvent) => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => null,
  toggleTheme: async () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as Theme | null;
      const initial = saved || defaultTheme;
      setThemeState(initial);

      const root = document.documentElement;
      root.classList.remove("light", "dark");
      if (initial === "system") {
        const sys = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        root.classList.add(sys);
      } else {
        root.classList.add(initial);
      }
    } catch {
      // fallback
    }
    setMounted(true);
  }, [defaultTheme, storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, mounted]);

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem(storageKey, t);
    } catch {}
    setThemeState(t);
  };

  /**
   * Gravlens circular theme reveal transition (center-out light reveal / edge-in dark reveal)
   */
  const toggleTheme = async (e?: React.MouseEvent | MouseEvent) => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const nextTheme: Theme = isDark ? "light" : "dark";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as TransitionDocument;

    const commit = () => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    };

    if (!doc.startViewTransition || reduced) {
      commit();
      return;
    }

    // Origin position: toggle button click coordinates or viewport center
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    if (e && typeof e.clientX === "number" && typeof e.clientY === "number") {
      x = e.clientX;
      y = e.clientY;
    }

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    const zero = `circle(0px at ${x}px ${y}px)`;
    const full = `circle(${radius}px at ${x}px ${y}px)`;
    const animationDuration = 780;

    try {
      const transition = doc.startViewTransition(commit);
      let wave: Animation | undefined;
      const watchdog = window.setTimeout(
        () => transition.skipTransition(),
        animationDuration + 1500
      );

      try {
        await transition.ready;
        wave = document.documentElement.animate(
          { clipPath: nextTheme === "light" ? [zero, full] : [full, zero] },
          {
            duration: animationDuration,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            fill: "none",
            pseudoElement: `::view-transition-${nextTheme === "light" ? "new" : "old"}(root)`,
          }
        );
        await wave.finished;
      } catch {
        /* Failed snapshots still complete the committed theme. */
      } finally {
        transition.skipTransition();
        wave?.cancel();
        window.clearTimeout(watchdog);
      }
      await transition.finished.catch(() => {});
    } catch {
      commit();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
