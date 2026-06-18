/* eslint-disable */
/* global React */
// Lucide icons inlined as React components.
// Stroke width / line caps / line joins match Lucide defaults so the
// vibe is consistent across the kit.
//
// Source: https://lucide.dev — Lucide, ISC license.

const I = ({ children, size = 24, stroke = "currentColor", strokeWidth = 2, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

const Dumbbell = (p) => (
  <I {...p}>
    <path d="M14.4 14.4 9.6 9.6" />
    <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
    <path d="m21.5 21.5-1.4-1.4" />
    <path d="M3.9 3.9 2.5 2.5" />
    <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
  </I>
);

const Star = (p) => (
  <I {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </I>
);

const Play = (p) => (
  <I {...p}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </I>
);

const MapPin = (p) => (
  <I {...p}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </I>
);

const Clock = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </I>
);

const Phone = (p) => (
  <I {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </I>
);

const Menu = (p) => (
  <I {...p}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </I>
);

const X = (p) => (
  <I {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </I>
);

const ArrowRight = (p) => (
  <I {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </I>
);

const Heart = (p) => (
  <I {...p}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </I>
);

const Apple = (p) => (
  <I {...p}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </I>
);

const Users = (p) => (
  <I {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </I>
);

const Activity = (p) => (
  <I {...p}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </I>
);

const Layers = (p) => (
  <I {...p}>
    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
  </I>
);

const ChevronLeft = (p) => (
  <I {...p}>
    <polyline points="15 18 9 12 15 6" />
  </I>
);

const ChevronRight = (p) => (
  <I {...p}>
    <polyline points="9 18 15 12 9 6" />
  </I>
);

const ImageIcon = (p) => (
  <I {...p}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </I>
);

const Quote = (p) => (
  <I {...p}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </I>
);

const Check = (p) => (
  <I {...p}>
    <polyline points="20 6 9 17 4 12" />
  </I>
);

const Sparkles = (p) => (
  <I {...p}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </I>
);

const Instagram = (p) => (
  <I {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </I>
);

const Facebook = (p) => (
  <I {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </I>
);

const Youtube = (p) => (
  <I {...p}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </I>
);

Object.assign(window, {
  Icon_Dumbbell: Dumbbell,
  Icon_Star: Star,
  Icon_Play: Play,
  Icon_MapPin: MapPin,
  Icon_Clock: Clock,
  Icon_Phone: Phone,
  Icon_Menu: Menu,
  Icon_X: X,
  Icon_ArrowRight: ArrowRight,
  Icon_Heart: Heart,
  Icon_Apple: Apple,
  Icon_Users: Users,
  Icon_Activity: Activity,
  Icon_Layers: Layers,
  Icon_ChevronLeft: ChevronLeft,
  Icon_ChevronRight: ChevronRight,
  Icon_Image: ImageIcon,
  Icon_Quote: Quote,
  Icon_Check: Check,
  Icon_Sparkles: Sparkles,
  Icon_Instagram: Instagram,
  Icon_Facebook: Facebook,
  Icon_Youtube: Youtube,
});
