/* eslint-disable */
/* global React */

function Faq() {
  const faqs = [
    {
      q: "Do I need experience to start?",
      a: "Not at all. Endura is welcoming and beginner-friendly — our coaches assess where you are and build a safe plan that grows with you, with friendly guidance every step."
    },
    {
      q: "How clean is the gym?",
      a: "Spotless. Equipment is sanitised through the day, and our unisex A/C gym is well-ventilated and regularly cleaned. Our members rate our hygiene extremely high."
    },
    {
      q: "Is it a unisex, inclusive space?",
      a: "Yes — a safe, unisex A/C gym that is highly inclusive. Everyone trains comfortably in a positive, welcoming, and friendly atmosphere."
    },
    {
      q: "What are your hours?",
      a: "We are open Monday to Saturday, opening early at 5:00 AM, so you can train whenever it suits you best — before work, in the afternoon, or evening."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section id="faq" style={{
      padding: "96px 24px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-1)",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div data-reveal="" className="eyebrow" style={{
          fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
          textAlign: "center"
        }}>
          · Questions? ·
        </div>
        <h2 data-reveal="" data-reveal-delay="80" style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(32px, 4vw, 56px)",
          lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
          textWrap: "balance",
          textAlign: "center",
          marginBottom: 48
        }}>
          Frequently Asked
        </h2>

        <div data-reveal="" data-reveal-delay="160" style={{ display: "grid", gap: 16 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
                transition: "all var(--dur-base) var(--ease-out)",
              }}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "24px",
                    background: "transparent", border: "none",
                    color: "var(--fg1)", cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700 }}>{faq.q}</span>
                  <span style={{ 
                    fontSize: 24, fontWeight: 300, color: "var(--accent)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform var(--dur-base) var(--ease-out)",
                    display: "inline-block"
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 200 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "all var(--dur-base) var(--ease-out)",
                  padding: isOpen ? "0 24px 24px" : "0 24px",
                }}>
                  <p style={{ margin: 0, color: "var(--fg2)", fontSize: 15, lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Faq = Faq;
