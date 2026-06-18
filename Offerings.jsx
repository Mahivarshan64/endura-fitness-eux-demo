/* eslint-disable */
/* global React, Icon_Dumbbell, Icon_Layers, Icon_Sparkles, Icon_Heart, Icon_ArrowRight */
// The Sport Life Standard — facility highlights built on the brand pillars.
// 4-card interactive grid. Hover: card raises, border lights to red, icon fills red.

const OFFERINGS = [
  {
    icon: "dumbbell",
    title: "Elite Coaching & Support",
    blurb: "Certified, motivating trainers who give you real one-on-one attention — correcting form, tracking progress, and keeping you accountable every session.",
    benefits: ["Personalised programmes for your goal", "Hands-on form correction & safety", "Constant motivation, zero judgement"],
    included: "Goal assessment, structured plans, and a coach who knows your name.",
    proof: "Personal attention",
    cta: "Meet the coaches",
    page: "About",
    tag: "01 · Coaching",
  },
  {
    icon: "layers",
    title: "Spacious Multi-Floor Club",
    blurb: "A massive, well-organised space across multiple floors — premium strength racks, full cardio arrays, and room to train without waiting in line.",
    benefits: ["Multiple dedicated training floors", "Premium strength & cardio equipment", "Open layout, never overcrowded"],
    included: "Free weights, machines, functional zones, and a high-energy cardio deck.",
    proof: "Multi-floor",
    cta: "See the space",
    page: "Gallery",
    tag: "02 · Facility",
  },
  {
    icon: "sparkles",
    title: "Impeccable Hygiene",
    blurb: "Cleanliness is non-negotiable. Equipment is sanitised through the day and every floor is ventilated to keep the air — and the iron — fresh.",
    benefits: ["Equipment sanitised through the day", "Bright, well-ventilated floors", "Spotless changing rooms & showers"],
    included: "The spotless, fresh environment our members rate us highest for.",
    proof: "Spotless daily",
    cta: "Take a tour",
    page: "Contact",
    tag: "03 · Hygiene",
  },
  {
    icon: "heart",
    title: "Welcoming For Everyone",
    blurb: "From the front desk to the floor, you belong here — a safe, unisex space that's proudly LGBTQ+ friendly and perfect for training partners.",
    benefits: ["Friendly, hassle-free onboarding", "Safe unisex & partner-friendly", "Proudly LGBTQ+ inclusive"],
    included: "A community that greets you by name from your very first visit.",
    proof: "All welcome",
    cta: "Get started",
    page: "Contact",
    tag: "04 · Community",
  },
];

function OfferingIcon({ name, active }) {
  const color = active ? "var(--fg-on-accent)" : "var(--accent)";
  const bg = active ? "var(--accent)" : "var(--surface-2)";
  const border = active ? "var(--accent)" : "var(--border)";
  const props = { size: 28, stroke: color, strokeWidth: 2 };
  const map = {
    dumbbell: <Icon_Dumbbell size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
    layers:   <Icon_Layers size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
    sparkles: <Icon_Sparkles size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
    heart:    <Icon_Heart size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
  };
  return (
    <div style={{
      width: 64, height: 64,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: bg, border: `1px solid ${border}`,
      borderRadius: 12,
      transition: "all var(--dur-base) var(--ease-out)",
      flexShrink: 0
    }}>
      {map[name]}
    </div>
  );
}

function OfferingCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: 32,
        background: "var(--surface-1)",
        border: `1px solid ${hover ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 16,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 24px 48px -20px rgba(255, 46, 46, 0.22)" : "none",
        transition: "all var(--dur-base) var(--ease-out)",
        display: "flex", flexDirection: "column", gap: 24,
        height: "100%",
        boxSizing: "border-box"
      }}>
      
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <OfferingIcon name={item.icon} active={hover} />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10, fontWeight: 500, letterSpacing: "0.14em",
          color: hover ? "var(--accent)" : "var(--fg3)",
          textTransform: "uppercase",
          transition: "color var(--dur-base) var(--ease-out)",
        }}>{item.tag}</span>
      </div>

      <div>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800, fontSize: 26, lineHeight: 1.1,
          letterSpacing: "-0.01em", textTransform: "uppercase",
          color: "var(--fg1)", marginBottom: 12
        }}>
          {item.title}
        </h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--fg2)" }}>
          {item.blurb}
        </p>
      </div>

      <div style={{ padding: "20px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--fg1)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Key Benefits</div>
        <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "grid", gap: 8, marginBottom: 20 }}>
          {item.benefits.map(b => (
            <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--fg2)" }}>
              <span style={{ color: "var(--accent)", marginTop: 2 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--fg1)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>What's Included</div>
        <div style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.5 }}>{item.included}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>The Standard</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 900, color: "var(--fg1)", lineHeight: 1, textTransform: "uppercase" }}>{item.proof}</div>
        </div>

        <button style={{
          background: hover ? "var(--accent)" : "transparent",
          color: hover ? "var(--fg-on-accent)" : "var(--fg1)",
          border: `1px solid ${hover ? "var(--accent)" : "var(--border)"}`,
          padding: "10px 16px", borderRadius: 8,
          fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em",
          display: "inline-flex", alignItems: "center", gap: 8,
          cursor: "pointer", transition: "all var(--dur-base) var(--ease-out)"
        }} onClick={() => window.navigateTo(item.page)}>
          {item.cta}
          <Icon_ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function Offerings() {
  return (
    <section id="features" style={{
      padding: "96px 24px",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 32, marginBottom: 48, flexWrap: "wrap",
        }}>
          <div data-reveal="" style={{ maxWidth: 720 }}>
            <div className="eyebrow" style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
            }}>
              · The Sport Life Standard
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
              textWrap: "balance",
            }}>
              Why members rate us 4.9 stars.
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--fg2)", lineHeight: 1.55 }}>
            Elite coaching, a spotless multi-floor club, and a front desk that welcomes everyone — the four things 1,000+ members keep reviewing us for.
          </p>
        </div>

        <div className="mmm-bento-grid">
          {OFFERINGS.map((o, i) => (
            <div key={o.title} className={`mmm-bento-card-${i}`} data-reveal="" data-reveal-delay={String(i * 110)}>
              <OfferingCard item={o} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Offerings = Offerings;
window.OfferingCard = OfferingCard;
