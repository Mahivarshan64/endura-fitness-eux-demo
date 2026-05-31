/* eslint-disable */
/* global React, Icon_Quote */
// Transformation Gallery Page

const TRANSFORMATIONS = [
  { name: "Arun K.", duration: "6 Months", quote: "Lost 18kg and found my confidence.", label: "Weight Loss", img: "../../assets/before_after_1_1780129699663.png", height: 450 },
  { name: "Meera S.", duration: "1 Year", quote: "From struggling with 5kg to deadlifting 60kg.", label: "Strength", img: "../../assets/before_after_2_1780129717079.png", height: 350 },
  { name: "Rahul V.", duration: "8 Months", quote: "The CrossFit community changed my life.", label: "Conditioning", img: "../../assets/before_after_3_1780129731569.png", height: 500 },
  { name: "Pooja N.", duration: "4 Months", quote: "Diet and consistency. Dropped 12kg fast.", label: "Weight Loss", img: "../../assets/before_after_4_1780129746081.png", height: 400 },
  { name: "Suresh P.", duration: "1.5 Years", quote: "Gained 10kg of pure muscle mass.", label: "Muscle Gain", img: "../../assets/before_after_5_1780129794204.png", height: 450 },
  { name: "Deepa T.", duration: "9 Months", quote: "I feel 10 years younger and much stronger.", label: "Overall Fitness", img: "../../assets/before_after_6_1780129812079.png", height: 350 },
  { name: "Kiran R.", duration: "5 Months", quote: "Completely redefined my physique.", label: "Body Recomp", img: "../../assets/before_after_7_1780129828942.png", height: 500 },
  { name: "Vikas M.", duration: "11 Months", quote: "Never thought I could look this shredded.", label: "Shredding", img: "../../assets/before_after_8_1780129847029.png", height: 400 }
];

function TransformationCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
      position: "relative",
      borderRadius: 12,
      overflow: "hidden",
      height: item.height,
      marginBottom: 24,
      background: "var(--surface-1)",
      border: `1px solid ${hover ? "var(--accent)" : "var(--border)"}`,
      transition: "all var(--dur-base) var(--ease-out)",
      cursor: "pointer",
      breakInside: "avoid"
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <img src={item.img} alt={`Before and after of ${item.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      {/* Gradient overlay to ensure text is readable */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(to top, rgba(11,11,11,0.95) 0%, rgba(11,11,11,0.4) 50%, transparent 100%)",
        transition: "opacity var(--dur-base) var(--ease-out)",
        opacity: hover ? 1 : 0.85
      }} />

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
        padding: 24,
        display: "flex", flexDirection: "column", gap: 12,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "transform var(--dur-base) var(--ease-out)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--accent)" }}>
          <Icon_Quote size={16} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, fontStyle: "italic", lineHeight: 1.2 }}>
            "{item.quote}"
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg1)" }}>{item.name}</span>
          <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--fg3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.duration}</span>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" style={{
      padding: "96px 24px",
      minHeight: "calc(100vh - var(--nav-h))",
    }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
          <div className="eyebrow" style={{
            fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
          }}>
            · Hall of Fame
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
            textWrap: "balance",
          }}>
            Real Results.
          </h2>
        </div>

        <div className="mmm-gallery-grid">
          {TRANSFORMATIONS.map((t, i) => (
            <TransformationCard key={i} item={t} />
          ))}
        </div>
      </div>
      <style>{`
        .mmm-gallery-grid {
          column-count: 3;
          column-gap: 24px;
        }
        @media (max-width: 1024px) {
          .mmm-gallery-grid {
            column-count: 2;
          }
        }
        @media (max-width: 600px) {
          .mmm-gallery-grid {
            column-count: 1;
          }
        }
      `}</style>
    </section>
  );
}

window.Gallery = Gallery;
