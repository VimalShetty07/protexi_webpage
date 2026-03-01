"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Colour blobs — pure white bg means we use tinted blobs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-blue-100 blur-[140px] animate-glow-pulse opacity-70" />
        <div className="absolute -top-24 right-[-100px] w-[550px] h-[550px] rounded-full bg-violet-100 blur-[120px] animate-glow-pulse opacity-60" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[-80px] left-[30%] w-[500px] h-[400px] rounded-full bg-sky-100 blur-[110px] animate-glow-pulse opacity-60" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-100 blur-[100px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl xl:text-[82px] font-black tracking-tight leading-[1.02] mb-6 text-[#1657ad] animate-slide-up">
              UK Sponsor<br />
              <span className="text-[#0f3f86]">Compliance,</span><br />
              Simplified.
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.15s" }}>
              Stay audit-ready, automate visa tracking, and eliminate manual compliance work.
              Protexi protects your sponsor licence —{" "}
              <span className="font-bold text-slate-800">without the stress.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a href="#contact" className="btn-primary text-base w-full sm:w-auto justify-center px-8 py-4">
                Book a Demo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="#pricing" className="btn-secondary text-base w-full sm:w-auto justify-center px-8 py-4">
                View Pricing
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="max-w-5xl mx-auto relative">
            {/* Browser wrapper */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 14px 34px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.95)" }}
            >
              {/* Browser bar */}
              <div className="bg-[#f1f5f9] border-b border-slate-200/80 px-5 py-3.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" style={{ boxShadow: "0 0 8px rgba(248,113,113,0.7)" }} />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" style={{ boxShadow: "0 0 8px rgba(250,204,21,0.7)" }} />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.7)" }} />
                </div>
                <div className="flex-1 max-w-xs mx-auto bg-white border border-slate-200 rounded-lg h-6 flex items-center justify-center px-3 gap-1.5"
                  style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)" }}>
                  <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs text-slate-400 font-medium">app.protexi.co.uk</span>
                </div>
              </div>

              {/* Dashboard */}
              <div className="bg-[#f8faff] p-6">
                {/* App top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-slate-900 font-bold">Compliance Dashboard</div>
                    <div className="text-slate-400 text-xs mt-0.5">February 2026 · 142 active workers</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-700"
                      style={{ boxShadow: "0 2px 8px rgba(16,185,129,0.2)" }}>● Live</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1657ad] to-violet-500 flex items-center justify-center text-xs font-black text-white"
                      style={{ boxShadow: "0 4px 12px rgba(22,87,173,0.4)" }}>HR</div>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Active Workers", value: "142", sub: "+3 this month", text: "text-[#1657ad]",   sub_c: "text-blue-400",   glow: "rgba(22,87,173,0.14)",   top: "border-t-2 border-t-[#1657ad]" },
                    { label: "Expiring Soon",  value: "7",   sub: "Within 30 days",text: "text-amber-600",  sub_c: "text-amber-400",  glow: "rgba(245,158,11,0.14)",  top: "border-t-2 border-t-amber-400" },
                    { label: "Pending Docs",   value: "23",  sub: "Action needed", text: "text-violet-600", sub_c: "text-violet-400", glow: "rgba(124,58,237,0.14)", top: "border-t-2 border-t-violet-500" },
                    { label: "Compliance",     value: "97%", sub: "Excellent",     text: "text-emerald-600",sub_c: "text-emerald-400",glow: "rgba(16,185,129,0.14)",  top: "border-t-2 border-t-emerald-500" },
                  ].map((c) => (
                    <div key={c.label} className={`bg-white ${c.top} rounded-xl p-3.5`}
                      style={{ boxShadow: `0 4px 20px ${c.glow}, 0 1px 4px rgba(0,0,0,0.04)` }}>
                      <div className="text-xs text-slate-400 mb-1">{c.label}</div>
                      <div className={`text-2xl font-black ${c.text}`}>{c.value}</div>
                      <div className={`text-[11px] mt-0.5 ${c.sub_c} font-medium`}>{c.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Worker table */}
                <div className="bg-white rounded-xl overflow-hidden"
                  style={{ boxShadow: "0 4px 20px rgba(22,87,173,0.07), 0 1px 4px rgba(0,0,0,0.04)", border: "1px solid rgba(22,87,173,0.08)" }}>
                  <div className="grid grid-cols-4 px-4 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wide bg-slate-50/80 border-b border-slate-100">
                    <span>Employee</span><span className="hidden md:block">Visa Type</span><span>Expiry</span><span>Status</span>
                  </div>
                  {[
                    { name: "Sarah Thompson",  initials: "ST", grad: "from-[#1657ad] to-blue-400",   visa: "Skilled Worker", expiry: "12 Jun 2025", status: "Active",   pill: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                    { name: "Raj Patel",        initials: "RP", grad: "from-violet-500 to-purple-400", visa: "ICT",           expiry: "03 Jan 2025", status: "Expiring", pill: "bg-amber-100 text-amber-700 border-amber-200" },
                    { name: "Maria Santos",     initials: "MS", grad: "from-pink-500 to-rose-400",    visa: "Skilled Worker", expiry: "28 Mar 2026", status: "Active",   pill: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                    { name: "Ahmed Al-Rashid",  initials: "AA", grad: "from-orange-500 to-amber-400", visa: "Global Talent", expiry: "15 Feb 2025", status: "Alert",    pill: "bg-red-100 text-red-600 border-red-200" },
                  ].map((row) => (
                    <div key={row.name} className="grid grid-cols-4 px-4 py-3 border-b border-slate-50 last:border-0 hover:bg-blue-50/30 items-center transition-colors">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${row.grad} flex items-center justify-center text-[10px] font-black text-white shrink-0`}
                          style={{ boxShadow: "0 2px 8px rgba(22,87,173,0.3)" }}>{row.initials}</div>
                        <span className="text-xs text-slate-700 font-semibold hidden sm:block">{row.name}</span>
                      </div>
                      <span className="text-xs text-slate-400 hidden md:block">{row.visa}</span>
                      <span className="text-xs text-slate-500 font-medium">{row.expiry}</span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border w-fit ${row.pill}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
