/* eslint-disable */
/* global React, HatchedImage */
// About Page section.

function About() {
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
          · Our Story
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
          textWrap: "balance",
          marginBottom: 48
        }}>
          Built for those who demand more.
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }} className="mmm-split-grid">
          <div>
            <p style={{
              fontSize: 20, color: "var(--fg2)", lineHeight: 1.6, marginBottom: 24,
            }}>
              At Mr &amp; Mrs. Muscle, we believe fitness is not a hobby—it's a lifestyle. Established over a decade ago, our mission has always been to provide a premier environment for individuals who want to train hard, stay focused, and achieve their maximum potential.
            </p>
            <p style={{
              fontSize: 18, color: "var(--fg2)", lineHeight: 1.6, marginBottom: 32,
            }}>
              We combine state-of-the-art equipment, world-class personal trainers, and a dedicated community of like-minded members to help you reach your goals faster than ever before.
            </p>
            
            <div style={{ display: "grid", gap: 16 }}>
              {[
                "Certified professional trainers",
                "State-of-the-art strength and cardio equipment",
                "Inclusive and highly motivated community",
                "Proven results over 15+ years"
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 24, height: 24, borderRadius: "50%", background: "var(--accent)", color: "var(--fg-on-accent)"
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "var(--fg1)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{
              position: "relative",
              width: "100%",
              height: 500,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 48px -20px rgba(0, 0, 0, 0.5)",
            }}>
              <img src="../../assets/gym_interior_about_1780129679707.png" alt="Gym Overview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div style={{ marginTop: 96, borderTop: "1px solid var(--border-subtle)", paddingTop: 96 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 36,
              textTransform: "uppercase", color: "var(--fg1)", marginBottom: 12,
            }}>Meet the Experts</h2>
            <p style={{ color: "var(--fg2)" }}>The coaches who will push you beyond your limits.</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}>
            {[
              { name: "Raj Kumar", exp: "10 Years", spec: "Strength & Conditioning", certs: "ACE, NASM-CPT", bio: "Former powerlifter dedicated to building unshakeable foundational strength." },
              { name: "Priya Sharma", exp: "8 Years", spec: "Cardio & Endurance", certs: "ISSA, CrossFit L1", bio: "High-energy coach focusing on stamina and functional movements." },
              { name: "Arjun Singh", exp: "12 Years", spec: "CrossFit Specialist", certs: "CrossFit L3, CSCS", bio: "Brings Olympic weightlifting techniques into everyday fitness routines." },
              { name: "Ananya Gupta", exp: "6 Years", spec: "Yoga & Flexibility", certs: "RYT-500", bio: "Expert in mobility and recovery to keep your body injury-free." }
            ].map(t => (
              <div key={t.name} style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex", flexDirection: "column"
              }}>
                <HatchedImage label="TRAINER PHOTO" height={240} />
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, textTransform: "uppercase", color: "var(--fg1)", margin: 0 }}>{t.name}</h3>
                    <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.exp}</span>
                  </div>
                  <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>{t.spec}</div>
                  <p style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.5, marginBottom: 16 }}>{t.bio}</p>
                  <div style={{ fontSize: 12, color: "var(--fg3)", fontWeight: 600, borderTop: "1px solid var(--border-subtle)", paddingTop: 12 }}>
                    Certs: <span style={{ color: "var(--fg1)" }}>{t.certs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
