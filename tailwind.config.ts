import type { Config } from "tailwindcss";

// Design language inspired by getdesign.md's Supabase analysis:
// white canvas, single emerald CTA color, dark "canvas night" band for contrast.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#ffffff",
        canvasAlt: "#fafafa",
        canvasNight: "#1c1c1c",
        ink: "#171717",
        mute: "#707070",
        line: "#dfdfdf",
        lineSoft: "#ededed",
        primary: "#3ecf8e",
        primaryDeep: "#24b47e",
        accent2: "#6b01c2",
        // kept for shared component compat
        amber: "#3ecf8e",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
