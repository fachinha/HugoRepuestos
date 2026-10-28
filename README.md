# Hugo Repuestos — Sitio Web Comercial

Sitio web moderno, de alto impacto visual y optimizado para la conversión de consultas por WhatsApp, desarrollado para **Hugo Repuestos** (San Carlos de Bariloche, Río Negro, Argentina).

Desarrollado con estándares de calidad de diseño, fluidez y microinteracciones de **[Kiur Code](https://kiurcode.pages.dev/)**.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** React 18
- **Lenguaje:** TypeScript
- **Empaquetador y Servidor de Desarrollo:** Vite 6
- **Estilos:** Tailwind CSS 3
- **Iconos:** Lucide Icons + SVG Brand Icons
- **Tipografías:** Plus Jakarta Sans & Inter (Google Fonts)
- **SEO & Metadatos:** OpenGraph, Twitter Cards, Schema.org (`AutoPartsStore`)

---

## 🚀 Despliegue en Cloudflare Pages

El proyecto está 100% optimizado para su publicación directa en **Cloudflare Pages** conectando el repositorio de GitHub:

1. **Framework Preset:** `Vite` (o `None`)
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Node.js Version:** `18` o superior (`NODE_VERSION: 20` o `22`)

---

## ⚙️ Configuración Centralizada (`src/config/siteConfig.ts`)

Todos los datos comerciales están concentrados en `src/config/siteConfig.ts`:

- **Teléfono y WhatsApp:** `whatsappRaw: '5492944629707'` (formato E.164 para Argentina: `54` + `9` + `294` + `4629707`).
- **Dirección física:** `Fagnano 1065 (Local 1)`, Bariloche.
- **Instagram oficial:** `https://www.instagram.com/hugo_repuestos/` (`@hugo_repuestos`).
- **Horarios:** Editables en `SITE_CONFIG.business.hours`.
- **Categorías:** Lista tipada de familias de repuestos con imágenes y listas de componentes.
- **Galería:** Rutas de imágenes fácilmente sustituibles por fotografías reales del mostrador.

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build
npm run preview
```

---

## 📄 Créditos

- **Desarrollo Web:** [Kiur Code](https://kiurcode.pages.dev/)
