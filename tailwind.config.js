/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    '0%': { transform: 'translate(0, -10%)' },
                    '100%': { transform: 'translate(0, 0)' },
                },
            },
            animation: {
                'waving-hand': 'wave .5s forwards',
            },
            backgroundImage: {
                'shorten-destkop': "url('/src/assets/bg-shorten-desktop.svg')",
                'shorten-mobile': "url('/src/assets/bg-shorten-mobile.svg')",
                'boost-destkop': "url('/src/assets/bg-boost-desktop.svg')",
                'boost-mobile': "url('/src/assets/bg-boost-mobile.svg')"
            },
            fontFamily: {
                sans: "Poppins, sans-serif"
            },
            colors: {
                cyan: {
                    400: "hsl(180, 66%, 49%)"
                },
                gray: {
                    300: "hsl(0, 0%, 75%)",
                    400: "hsl(257, 7%, 63%)"
                },
                violet: {
                    700: "hsl(257, 27%, 26%)",
                    800: "hsl(255, 11%, 22%)",
                    900: "hsl(260, 8%, 14%)"
                },
                red: {
                    400: "hsl(0, 87%, 67%)"
                }
            }
        },
    },
    plugins: [],
}