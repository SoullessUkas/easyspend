import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        fill: {
          1: "rgba(255, 255, 255, 0.10)",
        },
        bankGradient: "#76c7a3", // Verde mais escuro
        indigo: {
          500: "#5bb0af", // Azul esverdeado mais escuro
          700: "#3ba59e", // Verde menta escuro
        },
        success: {
          25: "#e6f8ef",  // Verde claro, ligeiramente escurecido
          50: "#bfe9da",  // Verde bebê mais escuro
          100: "#9fdac7", // Verde suave um pouco mais forte
          600: "#2b9e78", // Verde moderado escurecido
          700: "#207c61", // Verde escuro
          900: "#0e5b49", // Verde mais intenso e profundo
        },
        pink: {
          25: "#dbf6e9",  // Verde claro com leve toque pastel escurecido
          100: "#b8e5d3", // Verde bebê suave e mais visível
          500: "#7bbfa2", // Verde bebê um pouco mais escuro
          600: "#5fa689", // Verde moderado
          700: "#438e70", // Verde médio mais escuro
          900: "#27634a", // Verde profundo e escuro
        },
        blue: {
          25: "#e0f7f3",  // Azul esverdeado claro
          100: "#b1e9df", // Azul-verde mais escuro
          500: "#1d9987", // Verde água mais acentuado
          600: "#0c8270", // Verde médio mais escuro
          700: "#006b59", // Verde profundo e escuro
          900: "#004f40", // Verde esmeralda escuro e intenso
        },
        sky: {
          1: "#d1ecea",   // Azul esverdeado escuro
        },
        black: {
          1: "#002a2a",   // Verde esverdeado muito escuro
          2: "#003d3d",   // Verde musgo escuro
        },
        gray: {
          25: "#e5f5f5",  // Cinza claro com toque de verde escurecido
          200: "#c1dadb", // Cinza suave com tons de verde mais acentuados
          300: "#95c0c1", // Cinza esverdeado mais escuro
          500: "#699e9f", // Cinza-verde médio
          600: "#4f7d7e", // Verde misturado com cinza escurecido
          700: "#3d6566", // Verde-escuro
          900: "#274141", // Verde muito escuro com toque de cinza
        },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #76c7a3 0%, #4a9c85 100%)", // Gradiente de verdes escuros
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient": "linear-gradient(90deg, #76c7a3 0%, #3ba59e 100%)", // Gradiente de verde escuro para verde menta
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
