/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  fontFamily: {
    Prompt: ["Prompt" , " sans-serif"],
  },

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  fontFamily: {
    Prompt: ["Prompt" , " sans-serif"],
  },

  plugins: [
    require("daisyui")
    
  ],
}
