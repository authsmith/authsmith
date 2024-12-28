const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        "2xl": "1400px",
      },
      colors: {
       accent: "var(--authsmith-accent)",
        dark: "var(--authsmith-dark)",
        light: "var(--authsmith-light)",
        muted: "var(--auth-smith-muted-foreground)"
      },
      textColor: {
        accent: "var(--authsmith-accent)",
        dark: "var(--authsmith-dark)",
        light: "var(--authsmith-light)",
        muted: "var(--auth-smith-muted-foreground)"
      },
      borderColor: {
        accent: "var(--authsmith-accent)",
        dark: "var(--authsmith-dark)",
        light: "var(--authsmith-light)",
        muted: "var(--auth-smith-muted-foreground)"
      },
      fontFamily: {
        updot: ["var(--font-updot)", "ui-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
      },
      animation: {
      },
      keyframes: {
      },
    },
  },
  plugins: [],
};
module.exports = config;