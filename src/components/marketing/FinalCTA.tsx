"use client";
import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Rainbow top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1657ad] via-[#7c3aed] via-[#f43f5e] to-[#06b6d4]" />

      <div className="absolute inset-0 dot-grid opacity-40" />
      {/* Dramatic blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[140px] pointer-events-none animate-glow-pulse opacity-80" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-violet-100 rounded-full blur-[120px] pointer-events-none animate-glow-pulse opacity-70" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="badge badge-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            14-Day Free Trial — No Card Required
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
          Start your compliance<br />
          <span className="gradient-text">transformation today.</span>
        </h2>

        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
          Join 500+ UK sponsor licence holders who replaced compliance chaos with Protexi.{" "}
          <span className="font-bold text-slate-800">Free trial. Cancel anytime.</span>
        </p>

        {!submitted ? (
          <div className="max-w-md mx-auto mb-10">
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.co.uk" required
                className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1657ad] transition-all text-sm"
                style={{ boxShadow: "0 2px 8px rgba(22,87,173,0.06)" }} />
              <button type="submit" className="btn-primary text-sm py-3.5 px-6 whitespace-nowrap">
                Start Free Trial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-sm mx-auto mb-10">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-5 flex items-center gap-3"
              style={{ boxShadow: "0 4px 20px rgba(16,185,129,0.15)" }}>
              <span className="text-2xl">🎉</span>
              <div className="text-left">
                <div className="text-sm font-bold text-emerald-800">You&apos;re on the list!</div>
                <div className="text-xs text-emerald-600">We&apos;ll be in touch within 24 hours.</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="btn-primary text-base py-4 px-8 justify-center">
            Book a Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="#pricing" className="btn-secondary text-base py-4 px-8 justify-center">View Pricing</a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {[
            { t: "No credit card required", c: "text-[#1657ad]" },
            { t: "14-day free trial",       c: "text-violet-600" },
            { t: "Cancel anytime",           c: "text-pink-600" },
            { t: "UK data hosting",          c: "text-cyan-600" },
          ].map((item) => (
            <span key={item.t} className="flex items-center gap-1.5 text-slate-400 font-medium">
              <span className={`font-black ${item.c}`}>✓</span>{item.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
