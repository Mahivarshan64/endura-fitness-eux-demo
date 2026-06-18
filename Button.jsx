/* eslint-disable */
/* global React */
// Reusable button primitives.
//
// Variants:
//   primary   — solid red, white text. The hero "Become a Member" CTA.
//   secondary — outline, red border on hover.
//   ghost     — text-only, low contrast.
//
// Sizes: sm | md | lg

const BTN_BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontFamily: "var(--font-body)",
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  borderRadius: 8,
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "all var(--dur-base) var(--ease-out)",
  whiteSpace: "nowrap",
  textDecoration: "none",
  userSelect: "none",
};

const BTN_SIZES = {
  sm: { padding: "8px 14px",  fontSize: 12, height: 36 },
  md: { padding: "12px 20px", fontSize: 13, height: 44 },
  lg: { padding: "16px 28px", fontSize: 14, height: 56 },
};

function Button({
  children,
  variant = "primary",
  size = "md",
  iconRight,
  iconLeft,
  onClick,
  href,
  style,
  fullWidth,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const variantStyle = (() => {
    if (variant === "primary") {
      return {
        background: hover ? "var(--accent-bright)" : "var(--accent)",
        color: "var(--fg-on-accent)",
        boxShadow: hover ? "var(--shadow-accent-glow)" : "none",
      };
    }
    if (variant === "secondary") {
      return {
        background: "transparent",
        color: hover ? "var(--accent)" : "var(--fg1)",
        borderColor: hover ? "var(--accent)" : "var(--border-hot)",
      };
    }
    // ghost
    return {
      background: "transparent",
      color: hover ? "var(--fg1)" : "var(--fg2)",
    };
  })();

  const composed = {
    ...BTN_BASE,
    ...BTN_SIZES[size],
    ...variantStyle,
    transform: pressed ? "scale(0.98)" : "scale(1)",
    width: fullWidth ? "100%" : "auto",
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPressed(false); },
    onMouseDown:  () => setPressed(true),
    onMouseUp:    () => setPressed(false),
    onClick,
  };

  const inner = (
    <React.Fragment>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </React.Fragment>
  );

  if (href) {
    return <a href={href} style={composed} {...handlers} {...rest}>{inner}</a>;
  }
  return <button style={composed} {...handlers} {...rest}>{inner}</button>;
}

window.Button = Button;
