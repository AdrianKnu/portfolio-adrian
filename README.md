# Portfolio de Adrián Knuppelholz

Sitio personal hecho con React, Vite, Tailwind CSS y Motion. Tres idiomas (ES, EN, PT), tema claro y oscuro automático, y animaciones ligadas al scroll.

## Comandos

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # genera la carpeta dist/
npm run preview   # sirve dist/ para probar el build
```

`SINGLE=1 npm run build` genera un único `index.html` con todo incluido (útil para previsualizar o subir a cualquier hosting).

## Dónde editar el contenido

| Qué                                           | Archivo          |
| --------------------------------------------- | ---------------- |
| Todos los textos (ES, EN, PT)                 | `src/content.js` |
| Contacto, stack, certificaciones, proyectos   | `src/data.js`    |
| Colores, tipografía y modo oscuro             | `src/index.css`  |
| Saludos de la pantalla de bienvenida          | `src/components/Intro.jsx` |
| Ilustraciones de cada proyecto                | `src/components/Motifs.jsx` |

Para agregar un proyecto: suma una entrada en `PROJECTS` (`src/data.js`) y su texto en los tres idiomas dentro de `projects.items` (`src/content.js`).

## Publicar en GitHub Pages

1. Sube el proyecto a la rama `main` del repositorio (por ejemplo `portfolio-adrian`).
2. En GitHub, ve a Settings, Pages y elige **GitHub Actions** como fuente.
3. Cada push a `main` compila y publica el sitio con `.github/workflows/deploy.yml`.

El build usa rutas relativas (`base: "./"`), así que funciona tanto en `usuario.github.io/repositorio/` como en un dominio propio.
