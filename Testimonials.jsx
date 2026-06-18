/* eslint-disable */
/* global React, Icon_Star, Icon_Quote, Icon_ChevronLeft, Icon_ChevronRight */
// Testimonials carousel — 2 cards visible on desktop, paged with arrows.

const TESTIMONIALS = [
  {
    body: "Easily the cleanest gym I've trained in. Equipment is wiped down through the day and every floor is well ventilated — you can tell hygiene is taken seriously here.",
    author: "Sai Teja",
    role: "Member · 1 year",
    rating: 5,
  },
  {
    body: "The trainers are professional and genuinely motivating. They fix your form, track your progress, and never make you feel out of place. Best coaching I've had in Hyderabad.",
    author: "Divya R.",
    role: "Member · 8 months",
    rating: 5,
  },
  {
    body: "As a couple we wanted a safe, unisex space — Sport Life is exactly that. It's spread over multiple floors so it never feels crowded. Great vibe for everyone.",
    author: "Arjun & Meghana",
    role: "Members · 6 months",
    rating: 5,
  },
  {
    body: "Walked in for a tour and the front desk made onboarding effortless. Friendly from the first minute, no pushy sales talk. I joined the same day.",
    author: "Rahul V.",
    role: "Google Review",
    rating: 5,
  },
  {
    body: "A huge multi-floor setup with premium equipment for everything — strength, cardio, functional. I never have to wait for a machine, even at peak hours.",
    author: "Praveen K.",
    role: "Member · 2 years",
    rating: 5,
  },
  {
    body: "A welcoming, inclusive community that genuinely feels like family. Clean, professional and high-energy. Comfortable for everyone — highly recommended.",
    author: "Sneha M.",
    role: "Google Review",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon_Star key={i} size={16} stroke="var(--accent)" fill="var(--accent)" strokeWidth={1.5} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <article style={{
      position: "relative",
      padding: 32,
      background: "var(--surface-1)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      display: "flex", flexDirection: "column", gap: 20,
      height: "100%",
    }}>
      <Icon_Quote size={28} stroke="var(--accent)" strokeWidth={2} />
      <p style={{
        margin: 0,
        fontSize: 17,
        lineHeight: 1.55,
        color: "var(--fg1)",
        flex: 1,
      }}>
        &ldquo;{t.body}&rdquo;
      </p>
      <div style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: 18,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
      }}>
        <div>
          <div style={{ fontWeight: 700, color: "var(--fg1)", fontSize: 15 }}>{t.author}</div>
          <div style={{ fontSize: 12, color: "var(--fg3)", marginTop: 2, letterSpacing: "0.04em" }}>{t.role}</div>
        </div>
        <Stars count={t.rating} />
      </div>
    </article>
  );
}

function Testimonials() {
  const [idx, setIdx] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 880);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = TESTIMONIALS.length;
  const max = Math.max(0, total - (isMobile ? 1 : 2));

  // Ensure idx doesn't exceed new max when resizing from desktop to mobile and back
  React.useEffect(() => {
    if (idx > max) setIdx(max);
  }, [max, idx]);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(max, i + 1));

  const shift = isMobile ? "calc(100% + 16px)" : "calc(50% + 8px)";
  const basis = isMobile ? "100%" : "calc(50% - 8px)";

  return (
    <section id="testimonials" style={{
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
              · Reviews
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95,
              letterSpacing: "-0.02em", textTransform: "uppercase",
              marginBottom: 20,
            }}>
              {/* eslint-disable-next-line react/jsx-no-literals */}
              Loved across Hyderabad.
            </h2>

            {/* Prominent rating badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 14, flexWrap: "wrap",
              padding: "12px 18px",
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-pill)",
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28,
                color: "var(--accent)", lineHeight: 1,
              }}>4.9</span>
              <Stars count={5} />
              <span style={{
                fontSize: 13, fontWeight: 600, color: "var(--fg2)", letterSpacing: "0.02em",
              }}>
                from <span style={{ color: "var(--fg1)" }}>1,000+</span> Google reviews
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={prev} disabled={idx === 0} style={arrowBtn(idx === 0)}>
              <Icon_ChevronLeft size={20} />
            </button>
            <button onClick={next} disabled={idx === max} style={arrowBtn(idx === max)}>
              <Icon_ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex",
            gap: 16,
            transform: `translateX(calc(${-idx} * ${shift}))`,
            transition: "transform var(--dur-entrance) var(--ease-out)",
          }} className="mmm-testimonial-track">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ flex: `0 0 ${basis}`, minWidth: 0 }}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div style={{ display: "flex", gap: 6, marginTop: 24, justifyContent: "center" }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Page ${i + 1}`}
              style={{
                width: i === idx ? 24 : 8, height: 8,
                background: i === idx ? "var(--accent)" : "var(--border-hot)",
                border: "none", borderRadius: 4, cursor: "pointer",
                transition: "all var(--dur-base) var(--ease-out)",
                padding: 0,
              }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function arrowBtn(disabled) {
  return {
    width: 44, height: 44,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: "var(--surface-1)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: disabled ? "var(--fg3)" : "var(--fg1)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all var(--dur-micro) var(--ease-out)",
  };
}

window.Testimonials = Testimonials;
window.TestimonialCard = TestimonialCard;
window.Stars = Stars;
