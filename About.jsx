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
          Built for everyone who walks in.
        </h2>

        {/* ── Stats banner ── */}
        <div data-reveal="" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          marginBottom: 72,
          border: "1px solid var(--border)",
          borderRadius: 12,
          background: "var(--surface-1)",
          overflow: "hidden",
        }} className="mmm-about-stats">
          {[
            { v: "4.9 ★",   l: "Google Rating",      sub: "From 1,000+ reviews" },
            { v: "1,000+",  l: "Five-Star Reviews",  sub: "And counting" },
            { v: "5:00 AM",  l: "Opens Early Daily",  sub: "Monday to Saturday" },
          ].map((s, i, arr) => (
            <div key={s.l} style={{
              padding: "36px 32px",
              borderRight: i < arr.length - 1 ? "1px solid var(--border)" : "none",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1,
                color: "var(--accent)", letterSpacing: "-0.02em",
              }}>{s.v}</div>
              <div style={{
                fontSize: 13, fontWeight: 700, color: "var(--fg1)",
                textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 10,
              }}>{s.l}</div>
              <div style={{
                fontSize: 11, color: "var(--fg3)", letterSpacing: "0.1em",
                textTransform: "uppercase", marginTop: 4,
              }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }} className="mmm-split-grid">
          <div>
            <p data-reveal="" style={{
              fontSize: 20, color: "var(--fg2)", lineHeight: 1.6, marginBottom: 24,
            }}>
              At Endura Fitness Studio, we believe a premium gym should feel welcoming, not intimidating. We built a modern, unisex A/C facility in the heart of Dindigul for everyone who wants to train in a friendly, professional space.
            </p>
            <p data-reveal="" data-reveal-delay="120" style={{
              fontSize: 18, color: "var(--fg2)", lineHeight: 1.6, marginBottom: 32,
            }}>
              We combine premium strength and cardio equipment, friendly certified trainers (including female coaches), and customized weight loss programs — so every visit is motivating, from your first day to your ultimate goal.
            </p>

            <div data-reveal="" data-reveal-delay="220" style={{ display: "grid", gap: 16 }}>
              {[
                "Certified, friendly male & female trainers",
                "Quality bodybuilding & general fitness gear",
                "Modern A/C facility & customized diet charts",
                "Safe, supportive environment for all levels"
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
          <div data-reveal="" data-reveal-delay="80">
            <div style={{
              position: "relative",
              width: "100%",
              height: 500,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 48px -20px rgba(0, 0, 0, 0.5)",
            }}>
              <img src="./assets/gym_interior_about_1780129679707.png" alt="Gym Overview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* ── Philosophy / Values ── */}
        <div data-reveal="" style={{ marginTop: 96 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
            }}>· How We Train</div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1,
              textTransform: "uppercase", color: "var(--fg1)",
            }}>Our Philosophy</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="mmm-about-pillars">
            {[
              {
                num: "01",
                title: "Friendly Coaching",
                body: "Get genuine attention. Our friendly coaches (including female trainers) guide your workouts, correct form, and design diet charts to help you succeed — supporting your path every day.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M12 3v18"/></svg>
                ),
              },
              {
                num: "02",
                title: "Modern A/C Studio",
                body: "Work out in absolute comfort. Our fully air-conditioned, clean facility features top-quality strength and cardio equipment, providing a motivating and fresh space for every session.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
                ),
              },
              {
                num: "03",
                title: "Inclusive & Safe",
                body: "From a welcoming front desk to a supportive floor, Endura is a safe unisex gym built for everyone. We foster a highly motivated, positive environment where you can build confidence.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ),
              },
            ].map((p) => (
              <div key={p.num} style={{
                padding: 36,
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                display: "flex", flexDirection: "column", gap: 20,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: "var(--accent)", color: "var(--fg-on-accent)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {p.icon}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>{p.num}</span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22,
                  textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--fg1)",
                  lineHeight: 1.05,
                }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: "var(--fg2)", lineHeight: 1.6 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Milestone / Quote ── */}
        <div data-reveal="" style={{
          marginTop: 80, padding: "56px 48px",
          background: "var(--accent)", borderRadius: 16,
          display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
        }} className="mmm-split-grid">
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--fg-on-accent)", opacity: 0.6, marginBottom: 16,
            }}>· Dindigul's Most Motivating Gym</div>
            <blockquote style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.1,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "var(--fg-on-accent)", margin: 0,
            }}>
              "We don't just build bodies. We built a clean, welcoming home where every member belongs."
            </blockquote>
            <div style={{ marginTop: 20, fontSize: 13, fontWeight: 600, color: "var(--fg-on-accent)", opacity: 0.7 }}>
              — Endura Fitness Studio
            </div>
          </div>
          <div style={{
            display: "grid", gap: 16, minWidth: 180,
          }} className="mmm-hide-mobile">
            {[
              { v: "4.9★",     l: "Google Rating" },
              { v: "1,000+",   l: "Member Reviews" },
              { v: "5:00 AM", l: "Opens Mon-Sat" },
            ].map((s) => (
              <div key={s.l} style={{
                padding: "14px 20px",
                background: "rgba(11,11,11,0.15)",
                borderRadius: 10,
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: 22, color: "var(--fg-on-accent)", lineHeight: 1, minWidth: 48,
                }}>{s.v}</span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-on-accent)", opacity: 0.75 }}>{s.l}</span>
              </div>
            ))}
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
              { name: "Raj Kumar", exp: "10 Years", spec: "Bodybuilding & Fitness", certs: "ACE, NASM-CPT", img: "./assets/trainer_1.png", bio: "Former powerlifter dedicated to building unshakeable foundational strength." },
              { name: "Priya Sharma", exp: "8 Years", spec: "Friendly Coaching & Diet", certs: "ISSA, CrossFit L1", img: "./assets/trainer_2.png", bio: "Friendly expert providing custom diet charts and motivational cardio guidance." },
              { name: "Arjun Singh", exp: "12 Years", spec: "Strength Training", certs: "CrossFit L3, CSCS", img: "./assets/trainer_3.png", bio: "Brings Olympic weightlifting techniques into everyday fitness routines." },
              { name: "Ananya Gupta", exp: "6 Years", spec: "Weight Loss & Fitness", certs: "RYT-500", img: "./assets/trainer_4.png", bio: "Expert in mobility and recovery to keep your body injury-free." }
            ].map(t => (
              <div key={t.name} style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex", flexDirection: "column"
              }}>
                <div style={{ position: "relative", width: "100%", height: 240, background: "var(--surface-2)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
                  <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
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
      <style>{`
        @media (max-width: 880px) {
          .mmm-about-stats { grid-template-columns: 1fr !important; }
          .mmm-about-stats > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .mmm-about-stats > div:last-child { border-bottom: none !important; }
          .mmm-about-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
window.About = About;

