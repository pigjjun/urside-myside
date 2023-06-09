module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        "88px": "88px",
        "92px": "92px",
        "100px": "100px",
      },
      transitionProperty: {
        "height": "height",
        "width": "width",
        "opacity": "opacity",
        "color": "color",
        "background-color": "background-color",
      },
      transitionDuration: {
        "50": "50ms",
        "100": "100ms",
        "250": "250ms",
        "500": "500ms",
        "1000": "1000ms",
      },
      transitionTimingFunction: {
        "in": "ease-in",
        "out": "ease-out",
        "in-out": "ease-in-out",
      },
      transitionDelay: {
        "0": "0ms",
        "100": "100ms",
        "500": "500ms",
      },
      animation: {
        sparkle: "sparkle 700ms linear infinite",
      },
      keyframes: {
        sparkle: {
          "0%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    },
    colors: {
      "white-theme-000": "#ffffff",
      "white-theme-001": "#f7f6f3",
      "white-theme-002": "#eeede6",
      "white-theme-003": "#e6e4da",
      "white-theme-004": "#dddbcd",
      "white-theme-005": "#d5d2c1",
      "white-theme-006": "#ccc9b5",
      "white-theme-007": "#c4c0a8",
      "white-theme-008": "#bbb79c",
      "white-theme-009": "#b3ae8f",
      "white-theme-010": "#aaa583",
      "black-theme-000": "#E1DED8",
      "black-theme-001": "#B5B3B0",
      "black-theme-002": "#969696",
      "black-theme-003": "#6e6e6e",
      "black-theme-004": "#464646",
      "black-theme-005": "#1e1e1e",
      "black-theme-006": "#000000",
      "button-red-001": "#EBBFCA",
      "button-red-002": "#F099AF",
      "button-red-003": "#F25B81",
      "button-red-004": "#F1426E",
      "button-red-005": "#EA174C",
      "button-blue-001": "#96C5F0",
      "button-blue-002": "#6BB0F0",
      "button-blue-003": "#3C95E8",
      "button-blue-004": "#1083EE",
      "button-blue-005": "#006DD2",
      "button-neutral-001": "#CCD1BD",
      "button-neutral-002": "#CBD7A9",
      "button-neutral-003": "#B9CD80",
      "button-neutral-004": "#A1CC28",
      "button-neutral-005": "#85AF0B",
    },
  },
  plugins: [],
};
