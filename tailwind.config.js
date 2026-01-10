/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0b',
        panel: 'rgba(255,255,255,0.03)',
        stroke: 'rgba(255,255,255,0.10)',
        stroke2: 'rgba(255,255,255,0.14)',
        text: 'rgba(255,255,255,0.92)',
        muted: 'rgba(255,255,255,0.60)',
        dim: 'rgba(255,255,255,0.40)',
      },
      fontFamily: {
        display: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,0.06), transparent 60%)',
        'radial-soft-2': 'radial-gradient(900px 500px at 30% 20%, rgba(255,255,255,0.05), transparent 60%)',
      },
      letterSpacing: {
        wide2: '0.22em',
        wide3: '0.28em',
      },
    },
  },
  plugins: [],
}
