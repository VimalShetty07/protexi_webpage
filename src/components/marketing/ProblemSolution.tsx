import Card3D from "./Card3D";

const cards = [
  { icon: "⏰", problem: "Missing Compliance Deadlines", problemDesc: "Visa expiries, document renewals, and reporting windows slip through the cracks. One missed deadline puts your licence at risk.", solution: "Automated Deadline Tracking", solutionDesc: "Smart alerts at 90, 60, 30, and 7 days before every deadline — nothing ever slips.", topBorder: "border-t-blue-600", iconBg: "bg-blue-50", badgeProblem: "badge-blue",   badgeSolution: "badge-blue", shadow: "rgba(22,87,173,0.1)" },
  { icon: "📄", problem: "Manual Document Chaos",        problemDesc: "Chasing employees for updated passports, RTW docs and certificates wastes hours every week across your HR team.", solution: "Smart Document Automation",  solutionDesc: "Automated request workflows, secure upload portals and instant verification — stop chasing.",    topBorder: "border-t-blue-600", iconBg: "bg-blue-50", badgeProblem: "badge-blue",  badgeSolution: "badge-blue", shadow: "rgba(22,87,173,0.1)" },
  { icon: "🛡️", problem: "Audit Stress & Uncertainty",  problemDesc: "UKVI audits are unpredictable. Not knowing if you're fully compliant is a constant source of anxiety.",           solution: "Always Audit-Ready",         solutionDesc: "Live compliance scores, pre-audit checklists and one-click document packs — full confidence.",  topBorder: "border-t-blue-600",iconBg: "bg-blue-50",badgeProblem: "badge-blue", badgeSolution: "badge-blue", shadow: "rgba(22,87,173,0.1)" },
];

export default function ProblemSolution() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"><div className="badge badge-blue">⚡ The Problem → Solution</div></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Compliance is <span className="gradient-text-warm">broken.</span><br /><span className="text-slate-700">We fix it.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">UK sponsor compliance is complex. Protexi replaces the chaos with calm.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card3D key={c.problem} className={`card-l2 border-t-4 ${c.topBorder}`} shadowColor={c.shadow} intensity={10}>
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-2xl ${c.iconBg} text-3xl mb-5`}>{c.icon}</div>
                <div className="mb-5">
                  <span className={`badge ${c.badgeProblem} text-[11px]`}>✗ Problem</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">{c.problem}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.problemDesc}</p>
                </div>
                <div className="divider-gradient mb-5" />
                <div>
                  <span className={`badge ${c.badgeSolution} text-[11px]`}>✓ Protexi Fix</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">{c.solution}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.solutionDesc}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
