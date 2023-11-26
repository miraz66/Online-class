function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
import typographyPlugin from "@tailwindcss/typography";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      backgroundColor: {
        primary: withOpacity("--background-primary-color"),
        secondary: withOpacity("--background-secondary-color"),
        muted: withOpacity("--background-muted-color"),
      },
      textColor: {
        primary: withOpacity("--text-primary-color"),
        current: withOpacity("--text-current-color"),
        secondary: withOpacity("--text-secondary-color"),
        muted: withOpacity("--text-muted-color"),
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [typographyPlugin],
};
