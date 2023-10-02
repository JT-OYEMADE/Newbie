/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        faqShadow: "9px 8px 0px rgba(255, 255, 255, 0.4)",
      },
      fontSize: {
        hxl: [
          "78px",
          {
            lineHeight: "120%",
            letterSpacing: "-0.08em",
            fontWeight: "800",
          },
        ],
        // "3xl": [
        //   "1.875rem",
        //   {
        //     lineHeight: "2.25rem",
        //     letterSpacing: "-0.02em",
        //     fontWeight: "700",
        //   },
        // ],
      },
      // gradientColor: {
      //   customGradient: "321.2deg, #160F20 6.92%, #191020 128.11%",
      // },
      colors: {
        newbieBlue: "#003CFF",
        dark: "#060606",
        darkDeep: "#0B090E",
        blackBox: "#160F20",
        purpleBox: "#191020",
        // gradientColor: {
        //   100: "linear-gradient(321.2deg, #160F20 6.92%, #191020 128.11%)",
        // },
      },

      boxShadow: {
       '3xl': '0px 0.30914px 15.04483px 0px rgba(0, 0, 0, 0.02), 0px 0.78184px 38.0495px 0px rgba(0, 0, 0, 0.03), 0px 1.59488px 77.61742px 0px rgba(0, 0, 0, 0.04), 0px 3.28515px 159.87721px 0px rgba(0, 0, 0, 0.05), 0px 9px 438px 0px rgba(0, 0, 0, 0.07)'
      },
    },
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },

};