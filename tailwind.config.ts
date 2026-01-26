import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  // darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        brand: {
          blue: "#2eb6dc",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        grey: {
          50: "#F8F9FC",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1d2939",
          900: "#101828",
        },
        blueDark: {
          50: "#EFF4FF",
          // 100: "#F2F4F7",
          // 200: "#EAECF0",
          // 300: "#D0D5DD",
          // 400: "#98A2B3",
          // 500: "#06b6d4",
          600: "#155EEF",
          700: "#004EEB",
          800: "#5324FB",
          // 900: "#101828",
        },
        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        orange: {
          50: "#",
          100: "#",
          200: "#",
          300: "#",
          400: "#",
          500: "#",
          600: "#E62E05",
          700: "#",
          800: "#",
          900: "#",
        },
        success: {
          50: "#",
          100: "#",
          200: "#",
          300: "#",
          400: "#",
          500: "#",
          600: "#039855",
          700: "#",
          800: "#",
          900: "#",
        },
      },
      fontFamily: {
        valentina: ["Valentina", "serif"],
        sans: [
          "Graphik",
          "valintina",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["Merriweather", "serif", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        normal: "0",
        wider: ".05em",
        widest: ".1em",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "4px",
        large: "12px",
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
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
        "bg-slide": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "slide-right 4s linear infinite",
        swipe: "swipe 10s steps(8) infinite",
        "slide-left": "slide-left 320s linear infinite",
        "bg-slide": "bg-slide 30s linear infinite",
        slide: "slide 320s linear infinite",
      },
      backgroundImage: {
        // 'hero-img': "url('/asset/rainbow.png')",
        "line-pattern": "url('/asset/accent.svg')",
        // 'auth-pattern': "url('/asset/LinePattern.svg')",
      },
      opacity: {
        "0": "0",
        "20": "0.2",
        "40": "0.4",
        "60": "0.6",
        "80": "0.8",
        "100": "1",
      },
      backgroundSize: ({ theme }) => ({
        auto: "auto",
        cover: "cover",
        contain: "contain",
        ...theme("spacing"),
      }),
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
} satisfies Config;

export default config;
