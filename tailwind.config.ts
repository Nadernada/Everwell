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
        primary: '#01390C'
      },
      backgroundImage: {
        'blue-radial': "radial-gradient(circle, #8dccff 0%, #d9eeff00 30%)",
        'landing-bg': "url('../public/105.png')"
      }
    },
  },
  plugins: [],
};
export default config;
