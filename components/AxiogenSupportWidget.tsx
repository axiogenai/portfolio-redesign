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
  Loader2,
  ArrowRight,
  Sparkles as SparklesIconNo, // will not use
  CheckCircle2,
  Bot,
  User,
} from 'lucide-react';
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
    question: 'How to Start a Project with Axiogen?',
    answer:
      'Starting is straightforward: send us a message here or email axiogen01@gmail.com with your core vision. Our lead engineers review your scope and provide a technical roadmap and estimation within 24-48 hours.',
  },
  {
    id: 'products',
    question: 'What are Axiogen Ecosystem Platforms?',
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

  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll chat
  useEffect(() => {
    if (activeTab === 'messages') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab, isLoading]);

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
        "Thank you for contacting Team Axiogen. Our engineering leads will review your inquiry. You can also reach us directly at axiogen01@gmail.com.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            "We encountered a temporary network issue. Please feel free to email our lead engineers directly at axiogen01@gmail.com.",
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
      {/* Floating Trigger Launcher Button */}
      <div className="fixed bottom-6 right-6 z-[999] flex items-center justify-center">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close Axiogen Support' : 'Open Axiogen Support & AI Chat'}
          className="relative w-14 h-14 rounded-full bg-black border border-white/20 hover:border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.65)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.85)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group select-none"
        >
          {/* Subtle glow border */}
          <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Online active dot indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-black" />
          </span>

          {isOpen ? (
            <ChevronDown className="w-6 h-6 text-white transition-transform duration-200" />
          ) : (
            <div className="flex items-center justify-center w-full h-full p-2.5">
              <AxiogenLogo className="w-8 h-8 text-white group-hover:rotate-6 transition-transform duration-300" />
            </div>
          )}
        </button>
      </div>

      {/* Widget Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[998] w-[calc(100vw-32px)] sm:w-[390px] h-[590px] max-h-[calc(100vh-120px)] bg-[#0c0c12] border border-white/10 rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden text-white font-sans backdrop-blur-2xl"
          >
            {/* Top Header */}
            <div className="bg-gradient-to-b from-[#141420] to-[#0c0c12] px-6 pt-5 pb-4 border-b border-white/5 relative shrink-0">
              {/* Top brand row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AxiogenLogo className="w-5 h-5 text-white" />
                  <span className="text-xs font-extrabold tracking-widest uppercase text-white/90">
                    AXIOGEN
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Team Avatars */}
                  <div className="flex items-center -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden">
                      <img src="/logo.png" alt="Axiogen" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center text-[9px] font-bold text-emerald-300 shadow-sm">
                      AI
                    </div>
                    <div className="w-6 h-6 rounded-full bg-sky-500/30 border border-sky-400/40 flex items-center justify-center text-[9px] font-bold text-sky-300 shadow-sm">
                      AP
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Greeting Heading */}
              {activeTab !== 'messages' ? (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    Hi there <span className="text-xl">👋</span>
                  </h2>
                  <p className="text-2xl font-bold tracking-tight text-white/90">
                    How can we help?
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-white">Messages</h2>
                    <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Axiogen AI Concierge Online
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* TAB CONTENT: HOME */}
            {activeTab === 'home' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Primary Action Card: "Send us a message" */}
                <div
                  onClick={() => {
                    setActiveTab('messages');
                    setHasStartedChat(true);
                  }}
                  className="bg-white hover:bg-neutral-100 text-black rounded-2xl p-4 flex items-center justify-between cursor-pointer shadow-md transition-all duration-200 active:scale-[0.98] group"
                >
                  <div>
                    <h3 className="font-bold text-sm tracking-tight text-black">
                      Send us a message
                    </h3>
                    <p className="text-[11px] text-neutral-600 mt-0.5">
                      Chat live with our AI assistant & team
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                    <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Help Search & FAQs Card */}
                <div className="bg-white rounded-2xl p-4 text-black shadow-md space-y-3">
                  {/* Search input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search for help"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white text-black placeholder-neutral-500 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-black/20 transition-all"
                    />
                  </div>

                  {/* FAQ List */}
                  <div className="divide-y divide-neutral-100">
                    {filteredFaqs.slice(0, 4).map((faq) => {
                      const isExpanded = selectedFaq === faq.id;
                      return (
                        <div key={faq.id} className="py-2.5 first:pt-1 last:pb-1">
                          <button
                            onClick={() => setSelectedFaq(isExpanded ? null : faq.id)}
                            className="w-full flex items-center justify-between gap-2 text-left text-xs font-semibold text-neutral-800 hover:text-black group transition-colors cursor-pointer"
                          >
                            <span className="line-clamp-1">{faq.question}</span>
                            <ChevronRight
                              className={`w-3.5 h-3.5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                                isExpanded ? 'rotate-90 text-black' : 'group-hover:translate-x-0.5'
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 text-[11px] text-neutral-600 leading-relaxed bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/60"
                            >
                              <p>{faq.answer}</p>
                              <button
                                onClick={() => startChatFromPrompt(`Tell me more about: ${faq.question}`)}
                                className="mt-2 text-[10px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
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

                {/* Direct quick action pill */}
                <div className="px-2 pt-1 flex items-center justify-between text-[11px] text-white/50">
                  <span>Questions about an upcoming project?</span>
                  <button
                    onClick={() => startChatFromPrompt('Can I get a quotation for my project?')}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold underline cursor-pointer"
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
                  /* Empty state exactly like screenshot */
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white/60">
                      <MessageSquare className="w-7 h-7 text-white/70" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">No messages</h3>
                    <p className="text-xs text-white/50 max-w-[240px] mb-6 leading-relaxed">
                      Messages from the team and AI concierge will be shown here.
                    </p>
                    <button
                      onClick={() => setHasStartedChat(true)}
                      className="bg-white text-black hover:bg-neutral-200 px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
                    >
                      <span>Send us a message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  /* Active Chat Stream */
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Messages Scroll Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Initial Greeting if only starting */}
                      {messages.length === 0 && (
                        <div className="flex gap-2.5 items-start">
                          <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                            <AxiogenLogo className="w-4 h-4 text-white" />
                          </div>
                          <div className="space-y-1 max-w-[82%]">
                            <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-white/90 leading-relaxed shadow-sm">
                              Hi! I am Axiogen&apos;s AI Assistant. How can we help you today? Ask
                              me about our AI systems, web development, custom software, or getting
                              a project quotation.
                            </div>
                            <span className="text-[10px] text-white/30 px-1 font-mono">Just now</span>
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
                              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                                <AxiogenLogo className="w-4 h-4 text-white" />
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
                                    ? 'bg-white text-black font-medium rounded-tr-sm shadow-md'
                                    : 'bg-white/10 border border-white/10 text-white/90 rounded-tl-sm'
                                }`}
                              >
                                {m.content}
                              </div>
                              <span
                                className={`text-[10px] text-white/30 block px-1 font-mono ${
                                  isUser ? 'text-right' : 'text-left'
                                }`}
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
                          <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                            <AxiogenLogo className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-2.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestion Chips */}
                    {messages.length <= 2 && (
                      <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar">
                        {[
                          '🚀 What services do you offer?',
                          '💼 How do I get a quotation?',
                          '⚡ What are your sprint timelines?',
                        ].map((chip) => (
                          <button
                            key={chip}
                            onClick={() => handleSendMessage(chip)}
                            className="text-[10px] font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 whitespace-nowrap text-white/70 hover:text-white transition-all cursor-pointer shrink-0"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Input Bar */}
                    <div className="p-3 border-t border-white/10 bg-[#08080e]">
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
                          className="flex-1 bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                        />
                        <button
                          type="submit"
                          disabled={!inputMessage.trim() || isLoading}
                          className="w-8 h-8 rounded-xl bg-white text-black hover:bg-neutral-200 disabled:opacity-40 flex items-center justify-center transition-all cursor-pointer shrink-0"
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
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search knowledge base..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/40 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium focus:outline-none"
                  />
                </div>

                <div className="space-y-2.5">
                  {filteredFaqs.map((faq) => {
                    const isExpanded = selectedFaq === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-3.5 transition-all"
                      >
                        <button
                          onClick={() => setSelectedFaq(isExpanded ? null : faq.id)}
                          className="w-full flex items-center justify-between gap-2 text-left text-xs font-bold text-white hover:text-emerald-400 cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronRight
                            className={`w-4 h-4 text-white/40 shrink-0 transition-transform ${
                              isExpanded ? 'rotate-90 text-emerald-400' : ''
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2.5 pt-2.5 border-t border-white/5 text-[11px] text-white/60 leading-relaxed space-y-2"
                          >
                            <p>{faq.answer}</p>
                            <button
                              onClick={() => startChatFromPrompt(`Help me understand: ${faq.question}`)}
                              className="text-[10px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
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
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center space-y-2">
                  <p className="text-xs font-bold text-white">Can&apos;t find what you need?</p>
                  <p className="text-[11px] text-white/50">
                    Chat with our AI concierge or speak directly with engineering leads.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('messages');
                      setHasStartedChat(true);
                    }}
                    className="mt-1 px-4 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Start Chat
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Navigation Bar */}
            <div className="h-16 border-t border-white/10 bg-[#09090f] flex items-center justify-around px-4 shrink-0 select-none">
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
                        ? 'text-white'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    <div className="relative">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/40'}`} />
                      {tab.id === 'messages' && messages.length > 0 && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
                      )}
                    </div>
                    <span className="text-[10px] font-semibold">{tab.label}</span>
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
