/* eslint-disable */
/* global React, Button, Icon_ArrowRight, Icon_MapPin, Icon_Phone */
// Contact Page section.

function Contact() {
  return (
    <section style={{
      padding: "96px 24px",
      minHeight: "calc(100vh - var(--nav-h))",
    }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div className="eyebrow" style={{
          fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
        }}>
          · Get In Touch
        </div>
        <h2 data-reveal="" style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
          textWrap: "balance",
          marginBottom: 48
        }}>
          Ready to start at Endura?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
        }} className="mmm-split-grid">
          
          <div data-reveal="" style={{
            padding: 40,
            background: "var(--surface-1)",
            border: "1px solid var(--border)",
            borderRadius: 12,
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: "var(--fg1)" }}>Send us a message</h3>
            <form style={{ display: "grid", gap: 20 }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg2)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{
                  width: "100%", padding: "14px 16px", background: "var(--canvas)", border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--fg1)", fontSize: 16, fontFamily: "inherit"
                }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg2)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{
                  width: "100%", padding: "14px 16px", background: "var(--canvas)", border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--fg1)", fontSize: 16, fontFamily: "inherit"
                }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg2)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
                <textarea placeholder="How can we help you?" rows="4" style={{
                  width: "100%", padding: "14px 16px", background: "var(--canvas)", border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--fg1)", fontSize: 16, fontFamily: "inherit", resize: "vertical"
                }} />
              </div>
              <div style={{ marginTop: 8 }}>
                <Button variant="primary" size="lg" fullWidth={true} iconRight={<Icon_ArrowRight size={18} />}>
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div data-reveal="" data-reveal-delay="120" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: "var(--fg1)" }}>Contact Information</h3>
              <p style={{ color: "var(--fg2)", lineHeight: 1.6, marginBottom: 32 }}>
                Questions about membership, personal training, or want to walk the floors first? Our front-desk team makes getting started effortless — drop by, call, or message us.
              </p>

              <div style={{ display: "grid", gap: 24 }}>
                <a href="https://www.google.com/maps/search/?api=1&query=Endura+Fitness+Studio+Suzuki+Showroom+Dindigul" target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 16, textDecoration: "none" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    <Icon_MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--fg1)", marginBottom: 4 }}>Location</div>
                    <div style={{ color: "var(--fg2)", lineHeight: 1.5 }}>
                      1st Floor, Suzuki Showroom, No 34A,<br />
                      Palani Rd, Pandian Nagar, New Agraharam,<br />
                      Nehruji Nagar, Dindigul, Tamil Nadu 624001
                    </div>
                  </div>
                </a>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    <Icon_Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--fg1)", marginBottom: 4 }}>Phone</div>
                    <a href="tel:+919965511102" style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)", textDecoration: "none" }}>099655 11102</a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--fg1)", marginBottom: 4 }}>Hours</div>
                    <div style={{ color: "var(--fg2)" }}>Mon-Sat · 5:00 AM – 10:00 PM</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--fg1)", marginBottom: 4 }}>Email</div>
                    <a href="mailto:hello@endurafitness.in" style={{ color: "var(--fg2)", textDecoration: "none" }}>hello@endurafitness.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div style={{ marginTop: 96, maxWidth: 800, margin: "96px auto 0" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 36,
              textTransform: "uppercase", color: "var(--fg1)", marginBottom: 12,
            }}>Frequently Asked Questions</h2>
            <p style={{ color: "var(--fg2)" }}>Everything you need to know about memberships and policies.</p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {[
              { q: "Can I tour the gym before joining?", a: "Absolutely. Walk in any day during our hours, or book a tour and our friendly front-desk team will show you around — no pressure, no obligation." },
              { q: "Is Endura unisex and beginner friendly?", a: "Yes. We're a safe, unisex A/C club that's welcoming to couples and beginners. Our friendly trainers make sure first-timers feel comfortable from day one." },
              { q: "How do you maintain quality facilities?", a: "We provide a fully air-conditioned, clean environment with sanitised equipment, well-ventilated areas, and friendly staff ensuring comfort throughout the day." },
              { q: "What's included in membership?", a: "Membership covers full access to our unisex A/C gym floor, equipment, lockers, and showers. Higher tiers include friendly coaching and customized diet charts." },
              { q: "Do you offer personal training?", a: "Yes. Our friendly coaches, including certified female trainers, offer personal training with customized weight loss and bodybuilding programs tailored to you." },
              { q: "What are your timings?", a: "We are open from Monday to Saturday, opening early at 5:00 AM so you can train before work or later in the day depending on your personal schedule." },
              { q: "Is there parking and easy access?", a: "We are conveniently located on the 1st Floor above the Suzuki Showroom on Palani Road in Dindigul, with easy parking and direct access for members." },
              { q: "Can couples or partners train together?", a: "Of course. Many members train as partners or couples — our unisex layout and friendly coaching staff give everyone space and a welcoming atmosphere." },
            ].map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function FaqItem({ faq }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      background: "var(--surface-1)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      overflow: "hidden",
    }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "transparent", border: "none", color: "var(--fg1)", fontSize: 16, fontWeight: 600,
          cursor: "pointer", textAlign: "left", fontFamily: "inherit"
        }}>
        {faq.q}
        <span style={{ color: "var(--accent)", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform var(--dur-micro) var(--ease-out)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </button>
      <div style={{
        padding: open ? "0 24px 24px" : "0 24px",
        maxHeight: open ? 200 : 0,
        opacity: open ? 1 : 0,
        color: "var(--fg2)", lineHeight: 1.6,
        transition: "all var(--dur-base) var(--ease-out)",
      }}>
        {faq.a}
      </div>
    </div>
  );
}

window.Contact = Contact;
