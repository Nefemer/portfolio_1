# Mi Portfolio — Astro + TypeScript

Portfolio personal construido con Astro y TypeScript.

## Estructura del proyecto

```
portfolio/
├── src/
│   ├── components/       ← Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Technologies.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── data/
│   │   └── portfolio.ts  ← ✏️ EDITA ESTE ARCHIVO con tu info
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/               ← Archivos estáticos (imágenes, CV, etc.)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Cómo empezar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Personalizar tu información

Abre `src/data/portfolio.ts` y edita:
- Tu nombre, rol y bio
- Lista de tecnologías que conoces
- Tus proyectos (título, descripción, links)
- Tus redes sociales y contacto

### 3. Correr el servidor local

```bash
npm run dev
```

Tu portfolio estará en `http://localhost:4321`

### 4. Construir para producción

```bash
npm run build
```

Los archivos generados quedan en la carpeta `dist/`.

## Cómo agregar un nuevo proyecto

En `src/data/portfolio.ts`, agrega un objeto al array `projects`:

```typescript
{
  title: 'Nombre del proyecto',
  description: 'Qué hace y qué tecnologías usaste.',
  tags: ['TypeScript', 'Node.js'],
  github: 'https://github.com/tu-usuario/repo',
  url: 'https://demo.com', // opcional
}
```

## Despliegue gratuito

- **Vercel**: conecta tu repo de GitHub, detección automática
- **Netlify**: igual que Vercel
- **GitHub Pages**: cambia `site` en `astro.config.mjs`
