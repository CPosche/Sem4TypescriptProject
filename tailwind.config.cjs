/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "1/8": "12.5%",
        "2/8": "25%",
        "2/9": "22.22222222222222%",
        "2/10": "20%",
      },
      width: {
        "1/8": "12.5%",
        "7/8": "87.5%",
        "1/15": "6.666666666666667%",
      },
      boxShadow: {
        under: "0 5px 6px -3px black",
      },
      colors: {
        druid: "#FF7C0A",
        hunter: "#AAD372",
        mage: "#3FC7EB",
        monk: "#00FF98",
        paladin: "#F48CBA",
        priest: "#FFFFFF",
        rogue: "#FFF468",
        shaman: "#0070DD",
        warlock: "#8788EE",
        warrior: "#C69B6D",
        evoker: "#33937F",
        demonhunter: "#A330C9",
        deathknight: "#C41E3A",
      },
    },
  },
  plugins: [],
};
