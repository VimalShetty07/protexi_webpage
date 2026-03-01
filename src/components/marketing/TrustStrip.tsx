export default function TrustStrip() {
  const logos = ["Deloitte UK", "KPMG", "Accenture", "NHS Trust", "Clifford Chance", "Barclays", "HSBC", "PwC"];
  return (
    <section className="py-14 bg-white" style={{ boxShadow: "inset 0 1px 0 rgba(22,87,173,0.08), inset 0 -1px 0 rgba(22,87,173,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mb-8">Trusted by leading UK organisations</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
          {logos.map((l) => <span key={l} className="text-slate-300 font-black text-sm tracking-wide hover:text-slate-600 transition-colors cursor-default">{l}</span>)}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: "🏆", text: "UKVI Approved Workflows", cls: "badge-blue" },
            { icon: "🔒", text: "ISO 27001 Compliant",     cls: "badge-blue" },
            { icon: "⭐", text: "4.9/5 Customer Rating",   cls: "badge-blue" },
            { icon: "🇬🇧", text: "UK Data Hosting",        cls: "badge-blue" },
          ].map((item) => (
            <div key={item.text} className={`badge ${item.cls}`}>{item.icon} {item.text}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
