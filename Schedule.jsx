/* eslint-disable */
/* global React */
// Detailed Schedule Page

const SCHEDULE_DATA = [
  {
    type: "Strength",
    timings: "06:00 - 09:00, 17:00 - 21:00",
    instructor: "Raj Kumar",
    experience: "10 years"
  },
  {
    type: "Cardio & Endurance",
    timings: "Morning + Evening batches",
    instructor: "Priya Sharma",
    experience: "8 years"
  },
  {
    type: "CrossFit",
    timings: "Specialized timings",
    instructor: "Arjun Singh",
    experience: "12 years"
  },
  {
    type: "Yoga & Flexibility",
    timings: "Morning session",
    instructor: "Ananya Gupta",
    experience: "6 years"
  }
];

function Schedule() {
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
          · Coaching &amp; Classes
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
          textWrap: "balance",
          marginBottom: 48
        }}>
          Expert coaches, every day.
        </h2>

        <div style={{
          background: "var(--surface-1)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
        }}>
          {/* Table Header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 2fr 1.5fr 1fr",
            gap: 16,
            padding: "20px 24px",
            background: "var(--surface-2)",
            borderBottom: "1px solid var(--border)",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--fg3)",
          }}>
            <div>
              {/* eslint-disable-next-line react/jsx-no-literals */}
              Class Type
            </div>
            <div>
              {/* eslint-disable-next-line react/jsx-no-literals */}
              Timings
            </div>
            <div>
              {/* eslint-disable-next-line react/jsx-no-literals */}
              Instructor
            </div>
            <div>
              {/* eslint-disable-next-line react/jsx-no-literals */}
              Experience
            </div>
          </div>

          {/* Table Body */}
          <div>
            {SCHEDULE_DATA.map((row, i) => (
              <div key={row.type} style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 2fr 1.5fr 1fr",
                gap: 16,
                padding: "24px",
                borderBottom: i < SCHEDULE_DATA.length - 1 ? "1px solid var(--border-subtle)" : "none",
                alignItems: "center",
                transition: "background var(--dur-micro) var(--ease-out)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface-2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--fg1)", textTransform: "uppercase" }}>
                  {row.type}
                </div>
                <div style={{ color: "var(--fg2)", fontSize: 15, fontFamily: "var(--font-mono)" }}>
                  {row.timings}
                </div>
                <div style={{ color: "var(--accent)", fontWeight: 600, fontSize: 16 }}>
                  {row.instructor}
                </div>
                <div style={{ color: "var(--fg2)", fontSize: 14 }}>
                  {row.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SchedulePage = Schedule;
