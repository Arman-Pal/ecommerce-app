import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    "react",
    tailwindcss(),
  ],
  server:{ port : 5173 },
    "extends": [
      "plugin:react/recommended",
      "ecommerce-app"  // or any other setup you're using
    ],
    "settings": {
      "react": {
        "version": "detect"  // Automatically detects the React version you're using
      }
    }
  }
)
