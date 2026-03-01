import Card3D from "./Card3D";

const features = [
  { icon: "📅", title: "Visa Expiry Tracking",          desc: "Real-time tracking of every sponsored worker. Smart alerts at 90, 60, 30, and 7 days before expiry.",           tag: "Core",         iconBg: "bg-blue-100",    topColor: "border-t-[#1657ad]",  tagCls: "badge-blue",    shadow: "rgba(22,87,173,0.12)" },
  { icon: "🔍", title: "Background Verification",        desc: "Streamlined verification workflows with third-party integrations. Track every check to completion.",             tag: "Verification", iconBg: "bg-violet-100",  topColor: "border-t-violet-500", tagCls: "badge-violet",  shadow: "rgba(124,58,237,0.12)" },
  { icon: "✅", title: "Document Automation",            desc: "Auto-generate compliance checklists. Request, collect and verify documents without a single email chase.",       tag: "Automation",   iconBg: "bg-emerald-100", topColor: "border-t-emerald-500",tagCls: "badge-emerald", shadow: "rgba(16,185,129,0.12)" },
  { icon: "🔔", title: "Smart Alerts",                   desc: "Multi-channel alerts via email, Slack, and in-app. Fully customisable by team, role, or compliance event.",     tag: "Alerts",       iconBg: "bg-amber-100",   topColor: "border-t-amber-400",  tagCls: "badge-amber",   shadow: "rgba(245,158,11,0.12)" },
  { icon: "📊", title: "CoS Planning Insights",          desc: "Analyse Certificate of Sponsorship allocation and usage. Predictive insights keep your CoS budget on track.",   tag: "Analytics",    iconBg: "bg-cyan-100",    topColor: "border-t-cyan-500",   tagCls: "badge-cyan",    shadow: "rgba(6,182,212,0.12)" },
  { icon: "🗓️", title: "Compliance Calendar",            desc: "One unified view of renewals, reporting windows, training deadlines, and licence review dates.",                tag: "Planning",     iconBg: "bg-pink-100",    topColor: "border-t-pink-500",   tagCls: "badge-pink",    shadow: "rgba(244,63,94,0.12)" },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"><div className="badge badge-blue">✦ Platform Features</div></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Everything you need to<br /><span className="gradient-text-blue">stay compliant.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Built for UK sponsor licence holders. Every feature maps directly to Home Office requirements.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card3D key={f.title} className={`card-l2 border-t-4 ${f.topColor}`} shadowColor={f.shadow} intensity={10}>
              <div className="p-6 group">
                <div className={`inline-flex p-3 rounded-2xl ${f.iconBg} text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>{f.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900">{f.title}</h3>
                  <span className={`badge ${f.tagCls} text-[11px] shrink-0`}>{f.tag}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
