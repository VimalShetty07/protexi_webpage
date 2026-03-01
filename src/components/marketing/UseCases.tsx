"use client";
import { useState } from "react";
import Card3D from "./Card3D";

const useCases = [
  { tab: "HR Teams",    icon: "👥", activeTab: "bg-[#1657ad] text-white shadow-lg shadow-blue-200",    cardTop: "border-t-[#1657ad]",  shadow: "rgba(22,87,173,0.12)",
    headline: "Stop drowning in compliance admin.",
    desc: "Protexi automates the repetitive tasks that eat your HR team's time — document chasing, deadline tracking, and worker record management.",
    bullets: ["Automated onboarding compliance workflows","One-click right-to-work document collection","Real-time worker status dashboard","Bulk visa expiry alerts and renewals","Mobile-friendly for remote HR teams"],
    metrics: [{ label: "Hours saved/week", value: "12hrs", color: "text-[#1657ad]", bg: "bg-blue-50 border-blue-100" }, { label: "Workers tracked", value: "142", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" }, { label: "Docs automated", value: "89%", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" }] },
  { tab: "Compliance",  icon: "🛡️", activeTab: "bg-blue-700 text-white shadow-lg shadow-blue-200",  cardTop: "border-t-blue-600", shadow: "rgba(22,87,173,0.12)",
    headline: "Be audit-ready 365 days a year.",
    desc: "Built for compliance managers who need certainty. Know your exposure, close your gaps, and face any UKVI inspection with confidence.",
    bullets: ["Live compliance health score","Automated audit-pack generation","Gap analysis and remediation tracking","UKVI reporting deadline calendar","Regulatory change notifications"],
    metrics: [{ label: "Compliance score", value: "97%", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" }, { label: "Open gaps", value: "2", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" }, { label: "Audit-ready docs", value: "100%", color: "text-[#1657ad]", bg: "bg-blue-50 border-blue-100" }] },
  { tab: "Leadership",  icon: "📈", activeTab: "bg-blue-700 text-white shadow-lg shadow-blue-200",      cardTop: "border-t-blue-600",   shadow: "rgba(22,87,173,0.12)",
    headline: "Full visibility. Zero surprises.",
    desc: "Compliance risk is business risk. Protexi gives leadership a real-time view of your organisation's compliance posture — without wading through reports.",
    bullets: ["Executive compliance summary dashboard","CoS budget utilisation and forecast","Risk exposure by department","Trend analytics and historical reports","Integration-ready data exports"],
    metrics: [{ label: "Licence risk", value: "Low", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" }, { label: "CoS remaining", value: "34/50", color: "text-[#1657ad]", bg: "bg-blue-50 border-blue-100" }, { label: "Next review", value: "Mar 15", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" }] },
];

const activity = [
  { text: "Visa alert sent — Sarah T.", time: "2m ago",  dot: "bg-blue-500" },
  { text: "Document uploaded — R. Patel", time: "1hr ago", dot: "bg-[#1657ad]" },
  { text: "CoS used — New hire onboarded", time: "3hr ago", dot: "bg-blue-500" },
  { text: "Compliance check passed",      time: "1d ago", dot: "bg-blue-500" },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = useCases[active];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"><div className="badge badge-blue">👥 Built For Every Team</div></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Protexi works for<br /><span className="gradient-text">your whole organisation.</span>
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {useCases.map((uc, i) => (
            <button key={uc.tab} onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                active === i ? uc.activeTab : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
              style={active !== i ? { boxShadow: "0 2px 8px rgba(22,87,173,0.06)" } : {}}>
              <span>{uc.icon}</span>{uc.tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">{c.headline}</h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">{c.desc}</p>
            <ul className="space-y-3 mb-10">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary text-sm">
              Book a Demo for {c.tab}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <Card3D className={`card-l2 border-t-4 ${c.cardTop}`} shadowColor={c.shadow} intensity={8}>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">{c.icon}</span>
                <span className="text-sm font-bold text-slate-700">Live Dashboard Preview</span>
                <div className="ml-auto px-2 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700">● Live</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {c.metrics.map((m) => (
                  <div key={m.label} className={`border rounded-xl p-4 text-center ${m.bg}`}>
                    <div className={`text-2xl font-black ${m.color} mb-1`}>{m.value}</div>
                    <div className="text-xs text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">Recent Activity</div>
              {activity.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 py-2 border-b border-slate-50 last:border-0">
                  <span className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                  <span className="text-xs text-slate-600 flex-1 font-medium">{item.text}</span>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              ))}
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
