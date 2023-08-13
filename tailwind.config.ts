import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(180, 29%, 50%)",
        "cyan-bg": "hsl(180, 52%, 96%)",
        "cyan-filter": "hsl(180, 31%, 95%)",
        "gray-cyan": "hsl(180, 8%, 52%)",
        "dark-gray-cyan": "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        "header-desktop": "url('/bg-header-desktop.svg')",
        "header-mobile": "url('/bg-header-mobile.svg')",
      },
      boxShadow: {
        "3xl": "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
    },
    screens: {
      xs: "332px",
      md: "860px",
    },
  },
  plugins: [],
};
export default config;
