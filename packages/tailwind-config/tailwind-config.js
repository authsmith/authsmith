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
       accent: "rgb(var(--authsmith-accent))",
       "accent-gradient": "rgb(var(--authsmith-accent-gradient))",
        alert: "rgb(var(--authsmith-alert))",
        error: "rgb(var(--authsmith-error))",
        dark: "rgb(var(--authsmith-dark))",
        light: "rgb(var(--authsmith-light))",
        muted: "rgb(var(--auth-smith-muted-foreground))"
      },
      textColor: {
        accent: "rgb(var(--authsmith-accent))",
        "accent-gradient": "rgb(var(--authsmith-accent-gradient))",
        alert: "rgb(var(--authsmith-alert))",
        error: "rgb(var(--authsmith-error))",
        dark: "rgb(var(--authsmith-dark))",
        light: "rgb(var(--authsmith-light))",
        muted: "rgb(var(--auth-smith-muted-foreground))"
      },
      borderColor: {
        accent: "rgb(var(--authsmith-accent))",
        "accent-gradient": "rgb(var(--authsmith-accent-gradient))",
        alert: "rgb(var(--authsmith-alert))",
        error: "rgb(var(--authsmith-error))",
        dark: "rgb(var(--authsmith-dark))",
        light: "rgb(var(--authsmith-light))",
        muted: "rgb(var(--auth-smith-muted-foreground))"
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        mono: ["Martian Mono", "monospace"],
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