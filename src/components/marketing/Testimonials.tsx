import Card3D from "./Card3D";

const testimonials = [
  { quote: "Protexi transformed how we handle visa compliance. Went from chaotic spreadsheets to a fully automated system in under a week. Our HR team saved 12 hours weekly.", name: "Charlotte Davies", role: "Head of People Operations", company: "Meridian Consulting UK", avatar: "CD", rating: 5, tag: "Growth Plan", top: "border-t-[#1657ad]", grad: "from-[#1657ad] to-blue-400",   tagCls: "badge-blue",   shadow: "rgba(22,87,173,0.12)" },
  { quote: "We had a UKVI audit with zero notice. Because of Protexi, every document was ready in one click. The auditors were genuinely impressed. Complete game changer.", name: "Aarav Shah",       role: "Senior Compliance Manager",    company: "TechBridge Solutions Ltd",  avatar: "AS", rating: 5, tag: "Enterprise",   top: "border-t-blue-600", grad: "from-blue-700 to-blue-400", tagCls: "badge-blue", shadow: "rgba(22,87,173,0.12)" },
  { quote: "Managing CoS allocations was a nightmare before Protexi. The planning insights helped us stay within allocation and proactively request more before hitting the limit.", name: "Emma Fitzgerald", role: "Operations Director",           company: "GlobalPath Recruitment",    avatar: "EF", rating: 5, tag: "Growth Plan", top: "border-t-blue-600",   grad: "from-blue-600 to-blue-300",    tagCls: "badge-blue",   shadow: "rgba(22,87,173,0.12)" },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[130px] pointer-events-none opacity-70" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[110px] pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"><div className="badge badge-blue">⭐ Customer Stories</div></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Loved by compliance<br /><span className="gradient-text">teams across the UK.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card3D key={t.name} className={`card-l2 border-t-4 ${t.top}`} shadowColor={t.shadow} intensity={8}>
              <div className="p-6 flex flex-col h-full">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-sm font-black text-white shrink-0`}
                    style={{ boxShadow: "0 4px 14px rgba(22,87,173,0.35)" }}>{t.avatar}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                  <div className="ml-auto"><span className={`badge ${t.tagCls} text-[11px]`}>{t.tag}</span></div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
