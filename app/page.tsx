"use client";

import { useState, useEffect, useRef } from "react";

const ADVISORS = [
  { emoji: "♟️", name: "Le CEO", desc: "Vision & croissance", color: "#D4A843" },
  { emoji: "⚖️", name: "Le CFO", desc: "Risques & rentabilité", color: "#E05C5C" },
  { emoji: "💡", name: "Le CMO", desc: "Marketing & acquisition", color: "#8B7CF6" },
  { emoji: "🔧", name: "Le COO", desc: "Exécution & opérations", color: "#4CAF8A" },
];

const TESTIMONIALS = [
  {
    name: "Amadou D.",
    role: "Fondateur, Dakar Fresh",
    text: "En 5 minutes j'avais une analyse complète de ma décision d'expansion. Ce que 3 heures avec mon entourage n'auraient pas donné.",
    avatar: "AD",
    color: "#D4A843",
  },
  {
    name: "Fatou N.",
    role: "CEO, Boutique Kermel",
    text: "Le conseiller financier m'a évité une erreur de trésorerie qui aurait pu couler mon business. Indispensable.",
    avatar: "FN",
    color: "#4CAF8A",
  },
  {
    name: "Ibrahima S.",
    role: "E-commerce, Saint-Louis",
    text: "Enfin un outil pensé pour nos réalités. Il comprend le marché sénégalais, les contraintes locales, tout.",
    avatar: "IS",
    color: "#8B7CF6",
  },
];

const PRICING = [
  {
    name: "Yëgël",
    wolof: "Découverte",
    price: "Gratuit",
    sub: "Pour toujours",
    color: "#555",
    features: ["5 consultations / mois", "4 conseillers de base", "Historique 7 jours"],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Xam-Xam",
    wolof: "Savoir",
    price: "3 500",
    sub: "FCFA / mois",
    color: "#D4A843",
    features: ["Consultations illimitées", "Conseillers spécialisés", "Historique complet", "Support WhatsApp"],
    cta: "Choisir ce plan",
    highlight: true,
  },
  {
    name: "Boroom",
    wolof: "Le Patron",
    price: "9 000",
    sub: "FCFA / mois",
    color: "#8B7CF6",
    features: ["Tout de Xam-Xam", "IA personnalisée à ton business", "Rapports PDF", "Accès prioritaire"],
    cta: "Devenir Boroom",
    highlight: false,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

function Section({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function DieufeulLanding() {
  const [activeAdvisor, setActiveAdvisor] = useState(0);
  const WA_NUMBER = "33753015900";
  const WA_MESSAGE = encodeURIComponent("Salam, je veux rejoindre Dieufeul 🙏");
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  useEffect(() => {
    const t = setInterval(() => setActiveAdvisor(p => (p + 1) % ADVISORS.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: "#060606",
      color: "#e8e2d4",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060606; }
        ::-webkit-scrollbar-thumb { background: #D4A84355; border-radius: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(180deg, #060606ee 0%, transparent 100%)",
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, color: "#D4A843" }}>
          Dieufeul
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button style={{
            background: "#25D366", color: "#fff", border: "none", borderRadius: "8px",
            padding: "10px 20px", fontSize: "13px", fontWeight: 600, cursor: "pointer",
          }}>
            Rejoindre →
          </button>
        </a>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", textAlign: "center", zIndex: 1 }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, #D4A84315 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "15%", right: "10%", width: "200px", height: "200px", border: "1px solid #D4A84322", borderRadius: "50%", animation: "float 6s ease-in-out infinite", pointerEvents: "none" }} />

        <div style={{ animation: "fadeUp 0.8s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#D4A84311", border: "1px solid #D4A84333", borderRadius: "100px", padding: "6px 16px", marginBottom: "32px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4CAF8A", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#D4A843", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Bientôt disponible au Sénégal</span>
          </div>
        </div>

        <div style={{ animation: "fadeUp 0.8s ease 0.1s both" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, margin: "0 0 8px", color: "#e8e2d4" }}>
            Ton conseil<br /><span style={{ color: "#D4A843" }}>d&apos;administration</span><br />personnel.
          </h1>
        </div>

        <div style={{ animation: "fadeUp 0.8s ease 0.2s both" }}>
          <p style={{ color: "#888", fontSize: "18px", lineHeight: 1.7, maxWidth: "520px", margin: "24px auto 48px", fontWeight: 300 }}>
            4 conseillers IA spécialisés analysent tes décisions business sous tous les angles. Disponible 24h/24, pensé pour l&apos;entrepreneur sénégalais.
          </p>
        </div>

        <div style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "#25D366", color: "#fff", border: "none", borderRadius: "12px",
              padding: "16px 32px", fontSize: "16px", fontWeight: 700, cursor: "pointer",
              boxShadow: "0 0 32px #25D36644",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.522 5.855L.057 23.882l6.198-1.625A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.031-1.371l-.361-.214-3.741.981.998-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
              </svg>
              Rejoindre sur WhatsApp
            </button>
          </a>
          <p style={{ color: "#555", fontSize: "12px", marginTop: "12px" }}>Gratuit à l&apos;inscription · Paiement Wave & Orange Money</p>
        </div>

        {/* Advisor pills */}
        <div style={{ animation: "fadeUp 0.8s ease 0.4s both", marginTop: "64px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          {ADVISORS.map((a, i) => (
            <div key={i} style={{
              background: i === activeAdvisor ? `${a.color}15` : "#0f0f0f",
              border: `1px solid ${i === activeAdvisor ? a.color + "55" : "#1f1f1f"}`,
              borderRadius: "12px", padding: "12px 18px",
              display: "flex", alignItems: "center", gap: "10px",
              transition: "all 0.4s ease",
            }}>
              <span style={{ fontSize: "20px" }}>{a.emoji}</span>
              <div>
                <div style={{ color: i === activeAdvisor ? a.color : "#666", fontSize: "13px", fontWeight: 600, transition: "color 0.4s" }}>{a.name}</div>
                <div style={{ color: "#444", fontSize: "11px" }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ color: "#D4A843", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>Comment ça marche</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, margin: 0 }}>3 étapes, une décision claire</h2>
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {[
            { num: "01", title: "Pose ta question", desc: "Décris ta décision business en quelques phrases.", icon: "✍️" },
            { num: "02", title: "Le conseil délibère", desc: "Tes 4 conseillers analysent chaque angle en parallèle.", icon: "🧠" },
            { num: "03", title: "Décide avec clarté", desc: "Une synthèse finale te donne une recommandation nette.", icon: "⚡" },
          ].map((s, i) => (
            <Section key={i}>
              <div style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: "16px", padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #D4A84344, transparent)" }} />
                <div style={{ color: "#D4A84333", fontFamily: "'Cormorant Garamond', serif", fontSize: "56px", fontWeight: 700, lineHeight: 1, marginBottom: "16px" }}>{s.num}</div>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{s.icon}</div>
                <h3 style={{ color: "#e8e2d4", fontSize: "18px", fontWeight: 600, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* ADVISORS */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ color: "#D4A843", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>Tes conseillers</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, margin: 0 }}>4 experts, 0 conflit d&apos;intérêt</h2>
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {ADVISORS.map((a, i) => (
            <Section key={i}>
              <div style={{ background: `linear-gradient(135deg, ${a.color}08 0%, #0d0d0d 100%)`, border: `1px solid ${a.color}22`, borderRadius: "16px", padding: "28px 22px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{a.emoji}</div>
                <div style={{ color: a.color, fontWeight: 600, fontSize: "15px", marginBottom: "6px" }}>{a.name}</div>
                <div style={{ color: "#555", fontSize: "12px" }}>{a.desc}</div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ color: "#D4A843", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>Témoignages</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, margin: 0 }}>Ils ont décidé avec Dieufeul</h2>
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {TESTIMONIALS.map((t, i) => (
            <Section key={i}>
              <div style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: "16px", padding: "28px" }}>
                <p style={{ color: "#b0a898", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", lineHeight: 1.75, margin: "0 0 24px" }}>&quot;{t.text}&quot;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `${t.color}22`, border: `1px solid ${t.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: t.color, fontSize: "13px", fontWeight: 700 }}>{t.avatar}</div>
                  <div>
                    <div style={{ color: "#e8e2d4", fontSize: "14px", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: "#555", fontSize: "12px" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ color: "#D4A843", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>Tarifs</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, margin: 0 }}>Prix pensés pour toi</h2>
            <p style={{ color: "#666", marginTop: "12px", fontSize: "15px" }}>Paiement Wave & Orange Money · Sans engagement</p>
          </div>
        </Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {PRICING.map((p, i) => (
            <Section key={i}>
              <div style={{ background: p.highlight ? `linear-gradient(135deg, ${p.color}12 0%, #0d0d0d 100%)` : "#0d0d0d", border: `1px solid ${p.highlight ? p.color + "55" : "#1f1f1f"}`, borderRadius: "16px", padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                {p.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />}
                {p.highlight && <div style={{ position: "absolute", top: "16px", right: "16px", background: p.color, color: "#000", borderRadius: "6px", padding: "3px 10px", fontSize: "10px", fontWeight: 700 }}>POPULAIRE</div>}
                <div style={{ color: p.color, fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, marginBottom: "4px" }}>{p.name}</div>
                <div style={{ color: "#555", fontSize: "12px", marginBottom: "24px" }}>{p.wolof}</div>
                <div style={{ marginBottom: "24px" }}>
                  <span style={{ color: "#e8e2d4", fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 700 }}>{p.price}</span>
                  <span style={{ color: "#666", fontSize: "13px", marginLeft: "6px" }}>{p.sub}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: p.color, fontSize: "14px" }}>✓</span>
                      <span style={{ color: "#888", fontSize: "13px" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <button style={{ width: "100%", padding: "13px", background: p.highlight ? p.color : "transparent", border: `1px solid ${p.highlight ? p.color : "#2a2a2a"}`, borderRadius: "10px", color: p.highlight ? "#000" : "#888", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
                    {p.cta}
                  </button>
                </a>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "100px 24px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, #D4A84310 0%, transparent 70%)", pointerEvents: "none" }} />
        <Section>
          <div style={{ color: "#D4A843", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "20px" }}>✦ Rejoins l&apos;aventure ✦</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, margin: "0 0 24px", lineHeight: 1.1 }}>
            Prends de meilleures décisions,<br /><span style={{ color: "#D4A843" }}>dès aujourd&apos;hui.</span>
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginBottom: "40px" }}>Rejoins les premiers entrepreneurs sénégalais sur Dieufeul.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              background: "#25D366", color: "#fff", border: "none", borderRadius: "12px",
              padding: "18px 48px", fontSize: "16px", fontWeight: 700, cursor: "pointer",
              boxShadow: "0 0 32px #25D36644",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.522 5.855L.057 23.882l6.198-1.625A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.031-1.371l-.361-.214-3.741.981.998-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
              </svg>
              Rejoindre sur WhatsApp
            </button>
          </a>
          <p style={{ color: "#444", fontSize: "12px", marginTop: "16px" }}>Paiement via Wave & Orange Money · Annulation à tout moment</p>
        </Section>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#D4A843", fontWeight: 700 }}>Dieufeul</div>
        <div style={{ color: "#444", fontSize: "12px" }}>© 2025 Dieufeul · Dakar, Sénégal</div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["WhatsApp", "Instagram", "LinkedIn"].map(s => (
            <span key={s} style={{ color: "#444", fontSize: "12px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
