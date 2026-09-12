'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MessageSquare,
  Home,
  HelpCircle,
  Search,
  Send,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import AxiogenLogo from './AxiogenLogo';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

const FAQ_ITEMS = [
  {
    id: 'services',
    question: 'Services, AI Engineering & Web Platforms',
    answer:
      'Team Axiogen engineers bespoke AI & Neural Systems (custom LLMs, agent pipelines, multimodal vision), high-performance Web Platforms (Next.js, React, Tailwind, Supabase), native Mobile Apps, and hardened Cloud/Cybersecurity systems.',
  },
  {
    id: 'start',
    question: 'How to Start a Project with Team Axiogen?',
    answer:
      'Starting is straightforward: send us a message here or email axiogen01@gmail.com with your core vision. Our lead engineers review your scope and provide a technical roadmap and estimation within 24-48 hours.',
  },
  {
    id: 'products',
    question: 'What are Team Axiogen Ecosystem Platforms?',
    answer:
      'We develop production products including Axiogen ClinicOS (smart clinic EHR & queue management), Axiogen Voice Engine v2 (low-latency neural TTS), Axiogen QR Engine, and Axiogen Vault (zero-exposure cryptographic file distribution).',
  },
  {
    id: 'pricing',
    question: 'How do Pricing & Quotations Work?',
    answer:
      'Projects are priced based on scope, technical complexity, and velocity requirements. We offer milestone-based sprints and transparent fixed-price deliverables with zero hidden costs.',
  },
  {
    id: 'timeline',
    question: 'Production Timelines & SLA Guarantee',
    answer:
      'Sprint deliverables typically launch in 2 to 6 weeks. All deployed platforms include monitored 99.9% uptime SLA, security hardening, and continuous engineering support.',
  },
];

export default function AxiogenSupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'messages' | 'help'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);

  // Theme detection
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      if (typeof document !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [theme]);

  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll chat on new message or loading
  useEffect(() => {
    if (activeTab === 'messages' && (messages.length > 0 || isLoading)) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length, isLoading]);

  // Focus input when messages opened
  useEffect(() => {
    if (isOpen && activeTab === 'messages' && hasStartedChat) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, activeTab, hasStartedChat]);

  // Send message to Groq API
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setHasStartedChat(true);
    setActiveTab('messages');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const botReply =
        data?.text ||
        'Thank you for contacting Team Axiogen. Our engineering leads will review your inquiry. You can also reach us directly at axiogen01@gmail.com.';

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            'We encountered a temporary network issue. Please feel free to email our lead engineers directly at axiogen01@gmail.com.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const startChatFromPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating Trigger Launcher Button - Fixed bottom right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] flex items-center justify-center select-none">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close Team Axiogen Support' : 'Open Team Axiogen Support & AI Chat'}
          style={{ backgroundColor: isDark ? '#151622' : '#171717' }}
          className={`relative w-14 h-14 sm:w-14 sm:h-14 rounded-full border shadow-[0_10px_35px_rgba(0,0,0,0.6)] active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center group !bg-[#151622] text-white ${
            isDark
              ? 'border-white/20 hover:border-white/40'
              : 'border-neutral-700 hover:border-black'
          }`}
        >
          {isOpen ? (
            <ChevronDown className="w-6 h-6 text-white transition-transform duration-200" />
          ) : (
            <div className="flex items-center justify-center w-full h-full p-3">
              <AxiogenLogo className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-105 transition-transform duration-200" />
            </div>
          )}
        </button>
      </div>

      {/* Widget Modal Popup - Permanently pinned to right side */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-24 w-[calc(100vw-32px)] sm:w-[390px] h-[570px] max-h-[calc(100svh-100px)] z-[998] rounded-[24px] sm:rounded-[28px] shadow-2xl flex flex-col overflow-hidden font-sans border transition-colors duration-200 overscroll-contain ${
              isDark
                ? 'bg-[#0e0f14] text-white border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]'
                : 'bg-white text-neutral-900 border-neutral-200 shadow-[0_24px_70px_rgba(0,0,0,0.15)]'
            }`}
          >
            {/* Top Header */}
            <div
              className={`px-5 sm:px-6 pt-5 pb-4 border-b relative shrink-0 transition-colors ${
                isDark
                  ? 'bg-gradient-to-b from-[#181926] to-[#0e0f14] border-white/10'
                  : 'bg-gradient-to-b from-neutral-100 to-white border-neutral-200'
              }`}
            >
              {/* Top brand row */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <AxiogenLogo className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                  <span
                    className={`text-xs font-black tracking-wider uppercase ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                  >
                    TEAM AXIOGEN
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Status badge */}
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                      isDark
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AI Concierge
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isDark
                        ? 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                        : 'bg-black/5 hover:bg-black/10 text-neutral-600 hover:text-black'
                    }`}
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Greeting Heading */}
              {activeTab !== 'messages' ? (
                <div>
                  <h2
                    className={`text-xl sm:text-2xl font-black tracking-tight flex items-center gap-1.5 ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    Hi there <span className="text-lg sm:text-xl">👋</span>
                  </h2>
                  <p
                    className={`text-xl sm:text-2xl font-black tracking-tight ${
                      isDark ? 'text-white/80' : 'text-neutral-700'
                    }`}
                  >
                    How can we help?
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <h2
                      className={`text-base sm:text-lg font-bold tracking-tight ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      Messages
                    </h2>
                    <p
                      className={`text-[11px] flex items-center gap-1.5 mt-0.5 ${
                        isDark ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Team Axiogen AI Concierge Online
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* TAB CONTENT: HOME */}
            {activeTab === 'home' && (
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto overscroll-contain touch-pan-y p-4 space-y-3.5 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {/* Primary Action Card: "Send us a message" */}
                <div
                  onClick={() => {
                    setActiveTab('messages');
                    setHasStartedChat(true);
                  }}
                  className={`rounded-2xl p-4 flex items-center justify-between cursor-pointer border shadow-sm transition-all duration-200 active:scale-[0.98] group select-none ${
                    isDark
                      ? 'bg-[#181926] hover:bg-[#1f2030] text-white border-white/10'
                      : 'bg-neutral-900 hover:bg-black text-white border-neutral-800'
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-sm tracking-tight text-white">
                      Send us a message
                    </h3>
                    <p className="text-[11px] text-white/70 mt-0.5">
                      Chat live with our AI concierge & team
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FF6B42] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Help Search & FAQs Card */}
                <div
                  className={`rounded-2xl p-3.5 border shadow-sm space-y-3 ${
                    isDark
                      ? 'bg-[#12131b] border-white/10'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  {/* Search input with perfectly centered magnifying glass */}
                  <div
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all shadow-inner ${
                      isDark
                        ? 'bg-[#181926] border-white/10 focus-within:border-white/30 text-white'
                        : 'bg-white border-neutral-200 focus-within:border-neutral-400 text-neutral-900'
                    }`}
                  >
                    <Search
                      className={`w-4 h-4 shrink-0 select-none pointer-events-none ${
                        isDark ? 'text-white/40' : 'text-neutral-400'
                      }`}
                      strokeWidth={2.2}
                    />
                    <input
                      type="text"
                      placeholder="Search for help..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full bg-transparent text-xs font-medium focus:outline-none ${
                        isDark
                          ? 'text-white placeholder:text-white/40'
                          : 'text-neutral-900 placeholder:text-neutral-400'
                      }`}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className={`p-0.5 rounded-full cursor-pointer ${
                          isDark
                            ? 'text-white/40 hover:text-white'
                            : 'text-neutral-400 hover:text-neutral-700'
                        }`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* FAQ List */}
                  <div
                    className={`divide-y ${
                      isDark ? 'divide-white/10' : 'divide-neutral-200'
                    }`}
                  >
                    {filteredFaqs.slice(0, 4).map((faq) => {
                      const isExpanded = selectedFaq === faq.id;
                      return (
                        <div key={faq.id} className="py-2.5 first:pt-1 last:pb-1">
                          <button
                            onClick={() => setSelectedFaq(isExpanded ? null : faq.id)}
                            className={`w-full flex items-center justify-between gap-2 text-left text-xs font-semibold group transition-colors cursor-pointer ${
                              isDark
                                ? 'text-white/90 hover:text-white'
                                : 'text-neutral-800 hover:text-black'
                            }`}
                          >
                            <span className="line-clamp-1">{faq.question}</span>
                            <ChevronRight
                              className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                                isDark ? 'text-white/40' : 'text-neutral-400'
                              } ${
                                isExpanded
                                  ? 'rotate-90 !text-[#FF6B42]'
                                  : 'group-hover:translate-x-0.5'
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`mt-2 text-[11px] leading-relaxed p-2.5 rounded-xl border ${
                                isDark
                                  ? 'bg-[#181926] border-white/10 text-white/80'
                                  : 'bg-white border-neutral-200 text-neutral-600'
                              }`}
                            >
                              <p>{faq.answer}</p>
                              <button
                                onClick={() =>
                                  startChatFromPrompt(`Tell me more about: ${faq.question}`)
                                }
                                className="mt-2 text-[10px] font-bold text-[#FF6B42] hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                Ask AI about this <ArrowRight className="w-3 h-3" />
                              </button>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Direct quick action */}
                <div
                  className={`px-1 flex items-center justify-between text-[11px] ${
                    isDark ? 'text-white/50' : 'text-neutral-500'
                  }`}
                >
                  <span>Planning an upcoming project?</span>
                  <button
                    onClick={() =>
                      startChatFromPrompt('Can I get an instant price quotation for my project?')
                    }
                    className="text-[#FF6B42] hover:underline font-semibold cursor-pointer"
                  >
                    Get instant quote
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: MESSAGES (LIVE AI CHAT) */}
            {activeTab === 'messages' && (
              <div className="flex-1 flex flex-col overflow-hidden">
                {!hasStartedChat && messages.length === 0 ? (
                  /* Empty state */
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 border ${
                        isDark
                          ? 'bg-[#181926] border-white/10 text-white/70'
                          : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                      }`}
                    >
                      <MessageSquare className="w-7 h-7" />
                    </div>
                    <h3
                      className={`text-base font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      No messages yet
                    </h3>
                    <p
                      className={`text-xs max-w-[240px] mb-5 leading-relaxed ${
                        isDark ? 'text-white/60' : 'text-neutral-500'
                      }`}
                    >
                      Messages from our team and AI concierge will appear here.
                    </p>
                    <button
                      onClick={() => setHasStartedChat(true)}
                      className={`px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer hover:opacity-90 ${
                        isDark
                          ? 'bg-white text-black'
                          : 'bg-neutral-900 text-white'
                      }`}
                    >
                      <span>Send us a message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  /* Active Chat Stream */
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Messages Scroll Area */}
                    <div
                      data-lenis-prevent
                      className="flex-1 overflow-y-auto overscroll-contain touch-pan-y p-4 space-y-3.5"
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: isDark ? 'rgba(255,255,255,0.2) transparent' : 'rgba(0,0,0,0.2) transparent',
                      }}
                    >
                      {/* Initial Greeting if only starting */}
                      {messages.length === 0 && (
                        <div className="flex gap-2.5 items-start">
                          <div
                            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mt-0.5 overflow-hidden ${
                              isDark
                                ? 'bg-[#181926] border-white/20'
                                : 'bg-neutral-200 border-neutral-300'
                            }`}
                          >
                            <AxiogenLogo className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                          </div>
                          <div className="space-y-1 max-w-[82%]">
                            <div
                              className={`p-3 rounded-2xl rounded-tl-sm text-xs leading-relaxed shadow-sm border ${
                                isDark
                                  ? 'bg-[#181926] border-white/10 text-white'
                                  : 'bg-neutral-100 border-neutral-200 text-neutral-900'
                              }`}
                            >
                              Hi! I am Team Axiogen&apos;s AI Concierge. How can we help you today? Ask
                              me about our AI systems, web development, custom software, or getting
                              a project quotation.
                            </div>
                            <span
                              className={`text-[10px] px-1 font-mono ${
                                isDark ? 'text-white/40' : 'text-neutral-400'
                              }`}
                            >
                              Just now
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Chat History */}
                      {messages.map((m) => {
                        const isUser = m.role === 'user';
                        return (
                          <div
                            key={m.id}
                            className={`flex gap-2.5 items-start ${
                              isUser ? 'flex-row-reverse' : 'flex-row'
                            }`}
                          >
                            {!isUser && (
                              <div
                                className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mt-0.5 overflow-hidden ${
                                  isDark
                                    ? 'bg-[#181926] border-white/20'
                                    : 'bg-neutral-200 border-neutral-300'
                                }`}
                              >
                                <AxiogenLogo className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                              </div>
                            )}
                            <div
                              className={`space-y-1 max-w-[82%] ${
                                isUser ? 'items-end' : 'items-start'
                              }`}
                            >
                              <div
                                className={`p-3 rounded-2xl text-xs leading-relaxed ${
                                  isUser
                                    ? 'bg-[#FF6B42] text-white font-medium rounded-tr-sm shadow-sm'
                                    : isDark
                                    ? 'bg-[#181926] border border-white/10 text-white rounded-tl-sm shadow-sm'
                                    : 'bg-neutral-100 border border-neutral-200 text-neutral-900 rounded-tl-sm shadow-sm'
                                }`}
                              >
                                {m.content}
                              </div>
                              <span
                                className={`text-[10px] block px-1 font-mono ${
                                  isDark ? 'text-white/40' : 'text-neutral-400'
                                } ${isUser ? 'text-right' : 'text-left'}`}
                              >
                                {m.time}
                              </span>
                            </div>
                          </div>
                        );
                      })}

                      {/* Loading State */}
                      {isLoading && (
                        <div className="flex gap-2.5 items-center">
                          <div
                            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ${
                              isDark
                                ? 'bg-[#181926] border-white/20'
                                : 'bg-neutral-200 border-neutral-300'
                            }`}
                          >
                            <AxiogenLogo className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                          </div>
                          <div
                            className={`rounded-2xl rounded-tl-sm px-3.5 py-2.5 flex items-center gap-1.5 border ${
                              isDark
                                ? 'bg-[#181926] border-white/10'
                                : 'bg-neutral-100 border-neutral-200'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.3s] ${
                                isDark ? 'bg-white/70' : 'bg-neutral-600'
                              }`}
                            />
                            <span
                              className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.15s] ${
                                isDark ? 'bg-white/70' : 'bg-neutral-600'
                              }`}
                            />
                            <span
                              className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                                isDark ? 'bg-white/70' : 'bg-neutral-600'
                              }`}
                            />
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestion Chips */}
                    {messages.length <= 2 && (
                      <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {[
                          '🚀 What services do you offer?',
                          '💼 How do I get a quotation?',
                          '⚡ What are your sprint timelines?',
                        ].map((chip) => (
                          <button
                            key={chip}
                            onClick={() => handleSendMessage(chip)}
                            className={`text-[10px] font-medium border rounded-full px-3 py-1.5 whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                              isDark
                                ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/70 hover:text-white'
                                : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-200 text-neutral-700 hover:text-black'
                            }`}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Input Bar */}
                    <div
                      className={`p-3 border-t transition-colors ${
                        isDark
                          ? 'bg-[#0e0f14] border-white/10'
                          : 'bg-neutral-50 border-neutral-200'
                      }`}
                    >
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSendMessage();
                        }}
                        className="flex items-center gap-2"
                      >
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Type your message..."
                          className={`flex-1 rounded-xl px-3.5 py-2 text-xs border focus:outline-none transition-colors ${
                            isDark
                              ? 'bg-[#181926] border-white/10 text-white placeholder:text-white/40 focus:border-white/30'
                              : 'bg-white border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400'
                          }`}
                        />
                        <button
                          type="submit"
                          disabled={!inputMessage.trim() || isLoading}
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 disabled:opacity-40 ${
                            isDark
                              ? 'bg-[#FF6B42] text-white hover:opacity-90'
                              : 'bg-neutral-900 text-white hover:bg-black'
                          }`}
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: HELP */}
            {activeTab === 'help' && (
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto overscroll-contain touch-pan-y p-4 space-y-3.5 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {/* Search Bar with centered icon */}
                <div
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all shadow-inner ${
                    isDark
                      ? 'bg-[#181926] border-white/10 focus-within:border-white/30 text-white'
                      : 'bg-neutral-50 border-neutral-200 focus-within:border-neutral-400 text-neutral-900'
                  }`}
                >
                  <Search
                    className={`w-4 h-4 shrink-0 select-none pointer-events-none ${
                      isDark ? 'text-white/40' : 'text-neutral-400'
                    }`}
                    strokeWidth={2.2}
                  />
                  <input
                    type="text"
                    placeholder="Search knowledge base..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full bg-transparent text-xs font-medium focus:outline-none ${
                      isDark
                        ? 'text-white placeholder:text-white/40'
                        : 'text-neutral-900 placeholder:text-neutral-400'
                    }`}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className={`p-0.5 rounded-full cursor-pointer ${
                        isDark
                          ? 'text-white/40 hover:text-white'
                          : 'text-neutral-400 hover:text-neutral-700'
                      }`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* FAQ list */}
                <div className="space-y-2.5">
                  {filteredFaqs.map((faq) => {
                    const isExpanded = selectedFaq === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`rounded-xl border p-3.5 transition-all shadow-sm ${
                          isDark
                            ? 'bg-[#151620] border-white/10 hover:border-white/20'
                            : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <button
                          onClick={() => setSelectedFaq(isExpanded ? null : faq.id)}
                          className={`w-full flex items-center justify-between gap-2 text-left text-xs font-bold cursor-pointer transition-colors ${
                            isDark
                              ? 'text-white hover:text-[#FF6B42]'
                              : 'text-neutral-900 hover:text-[#FF6B42]'
                          }`}
                        >
                          <span>{faq.question}</span>
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform ${
                              isDark ? 'text-white/40' : 'text-neutral-400'
                            } ${isExpanded ? 'rotate-90 !text-[#FF6B42]' : ''}`}
                          />
                        </button>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className={`mt-2.5 pt-2.5 border-t text-[11px] leading-relaxed space-y-2 ${
                              isDark
                                ? 'border-white/10 text-white/70'
                                : 'border-neutral-200 text-neutral-600'
                            }`}
                          >
                            <p>{faq.answer}</p>
                            <button
                              onClick={() => startChatFromPrompt(`Help me understand: ${faq.question}`)}
                              className="text-[10px] font-bold text-[#FF6B42] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              Ask AI for more details <ArrowRight className="w-3 h-3" />
                            </button>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Footer Help Contact Card */}
                <div
                  className={`rounded-xl p-3.5 text-center space-y-2 border ${
                    isDark
                      ? 'bg-[#151620] border-white/10'
                      : 'bg-neutral-100 border-neutral-200'
                  }`}
                >
                  <p
                    className={`text-xs font-bold ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    Can&apos;t find what you need?
                  </p>
                  <p
                    className={`text-[11px] ${
                      isDark ? 'text-white/60' : 'text-neutral-500'
                    }`}
                  >
                    Chat with our AI concierge or speak directly with engineering leads.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('messages');
                      setHasStartedChat(true);
                    }}
                    className={`mt-1 px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                      isDark
                        ? 'bg-white text-black hover:opacity-90'
                        : 'bg-neutral-900 text-white hover:bg-black'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Start Chat
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Navigation Bar */}
            <div
              className={`h-16 border-t flex items-center justify-around px-4 shrink-0 select-none transition-colors ${
                isDark
                  ? 'bg-[#0a0b10] border-white/10'
                  : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'messages', label: 'Messages', icon: MessageSquare },
                { id: 'help', label: 'Help', icon: HelpCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? isDark
                          ? 'text-white font-black'
                          : 'text-black font-black'
                        : isDark
                        ? 'text-white/40 hover:text-white/80'
                        : 'text-neutral-400 hover:text-neutral-700'
                    }`}
                  >
                    <div className="relative">
                      <Icon className="w-5 h-5" />
                      {tab.id === 'messages' && messages.length > 0 && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
