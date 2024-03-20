import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('../assets/bg-home.jpg')"
            },
            colors: {
                'primary-green': 'var(--primary-green)',
                'primary-red': 'var(--primary-red)',
                'primary-blue': 'var(--primary-blue)'
            }
        }
    },
    plugins: [require('tailwind-scrollbar')]
};
export default config;
