/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                palanquin: ['Palanquin', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            gridAutoColumns: {
                '70/30': '70% 28%',
            },
            colors: {
                'darkgray': '#0A0A0A',
            },  
        },
    },
    darkMode: 'class',
    plugins: [],
}

