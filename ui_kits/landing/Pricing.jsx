/* eslint-disable */
/* global React, Button, Icon_ArrowRight, Icon_Check */
// Membership & Pricing Section

const TIERS = [
  {
    name: "Basic",
    price: "₹2,999",
    period: "/month",
    description: "Essential access for independent lifters.",
    features: [
      "Gym access 24/7",
      "Locker facility",
      "2 trainer consultations/month"
    ],
    highlight: false,
  },
  {
    name: "Elite",
    price: "₹7,999",
    period: "/month",
    description: "The ultimate transformation package.",
    features: [
      "Everything in Premium",
      "4 1-on-1 training sessions/week",
      "Custom meal plans",
      "Exclusive CrossFit access",
      "Priority access to all classes"
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/month",
    description: "Guided training for serious results.",
    features: [
      "Everything in Basic",
      "Personalized training plan",
      "Diet consultation",
      "Priority class booking"
    ],
    highlight: false,
  }
];

function PricingCard({ tier }) {
  const isElite = tier.highlight;
  return (
    <div style={{
      position: "relative",
      padding: 40,
      background: isElite ? "var(--surface-2)" : "var(--surface-1)",
      border: `1px solid ${isElite ? "var(--accent)" : "var(--border)"}`,
      borderRadius: 16,
      display: "flex", flexDirection: "column", gap: 24,
      boxShadow: isElite ? "0 24px 48px -20px rgba(204, 255, 0, 0.15)" : "none",
      transform: isElite ? "scale(1.05)" : "scale(1)",
      zIndex: isElite ? 10 : 1,
    }}>
      {isElite && (
        <div style={{
          position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)",
          background: "var(--accent)", color: "var(--fg-on-accent)",
          padding: "4px 16px", borderRadius: 999,
          fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          Most Popular
        </div>
      )}

      <div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24,
          textTransform: "uppercase", color: isElite ? "var(--accent)" : "var(--fg1)",
          marginBottom: 8,
        }}>{tier.name}</h3>
        <p style={{ color: "var(--fg2)", fontSize: 14, minHeight: 42 }}>{tier.description}</p>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 48, color: "var(--fg1)", lineHeight: 1 }}>{tier.price}</span>
        <span style={{ color: "var(--fg3)", fontSize: 14, fontWeight: 500 }}>{tier.period}</span>
      </div>

      <div style={{ flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
          {tier.features.map(f => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 20, height: 20, borderRadius: "50%",
                background: isElite ? "var(--accent)" : "var(--surface-2)",
                color: isElite ? "var(--fg-on-accent)" : "var(--accent)",
                flexShrink: 0,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <span style={{ fontSize: 15, color: "var(--fg2)", lineHeight: 1.4 }}>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button variant={isElite ? "primary" : "secondary"} size="lg" fullWidth iconRight={<Icon_ArrowRight size={18} />} onClick={() => window.navigateTo('Contact')}>
        Join Now
      </Button>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" style={{
      padding: "96px 24px",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
          <div className="eyebrow" style={{
            fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
          }}>
            · Membership Plans
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
            textWrap: "balance",
          }}>
            Choose your tier.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          alignItems: "center",
          padding: "32px 0",
        }}>
          <PricingCard tier={TIERS[0]} />
          <PricingCard tier={TIERS[1]} />
          <PricingCard tier={TIERS[2]} />
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
