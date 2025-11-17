# Sistema de Telefonía Móvil - Presentación Interactiva

Presentación interactiva basada en el capítulo 2.7 del libro "Comunicaciones y Redes de Computadores" de Andrew S. Tanenbaum.

## 📋 Descripción

Esta es una presentación web moderna e interactiva sobre el sistema de telefonía móvil, que abarca desde los conceptos básicos de redes celulares hasta la evolución de las tecnologías 1G, 2G, 3G, 4G y 5G. Desarrollada con Svelte 5 y estilizada con Tailwind CSS v4.

## ✨ Características

- **Diseño moderno y responsivo** con efectos visuales atractivos
- **Navegación fluida** entre slides con teclado o botones
- **Glosario interactivo** con términos técnicos clicables
- **Videos explicativos** en formato modal para animaciones
- **Zoom de imágenes** con medium-zoom para ver detalles
- **Puntero láser virtual** para presentaciones en vivo
- **Temporizador** de presentación
- **Animaciones suaves** con Svelte transitions

## 🚀 Tecnologías

- **Svelte 5** - Framework reactivo moderno
- **Vite 7** - Build tool ultra-rápido
- **Tailwind CSS v4** - Utilidades CSS
- **Medium Zoom** - Zoom interactivo de imágenes
- **GitHub Pages** - Hosting gratuito

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/presentacion-tanenbaum.git

# Navegar al directorio
cd presentacion-tanenbaum

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Genera build de producción
npm run preview      # Previsualiza build de producción

# Deploy
npm run deploy       # Deploy automático a GitHub Pages
```

## 📁 Estructura del Proyecto

```
presentacion-tanenbaum/
├── src/
│   ├── assets/          # Imágenes y videos
│   │   └── video/       # Videos de animaciones
│   ├── data/            # Datos JSON
│   │   ├── slides.json              # Contenido de slides
│   │   └── glosarios_terminos.json  # Términos del glosario
│   ├── lib/             # Componentes Svelte
│   │   ├── Counter.svelte
│   │   ├── Footer.svelte
│   │   ├── GlossaryPanel.svelte
│   │   ├── Header.svelte
│   │   ├── Pointer.svelte
│   │   ├── Slide.svelte
│   │   ├── Timer.svelte
│   │   └── useKeyboardNavigation.js
│   ├── stores/          # Svelte stores
│   │   ├── glossaryStore.js
│   │   ├── presentationStore.js
│   │   └── timerStore.js
│   ├── App.svelte       # Componente principal
│   ├── app.css          # Estilos globales
│   └── main.js          # Punto de entrada
├── public/              # Archivos estáticos
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions para deploy
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Uso

### Navegación
- **Flechas izquierda/derecha** o **teclas A/D**: Navegar entre slides
- **Botones laterales**: Navegación con mouse
- **Barra de progreso**: Indica slide actual

### Características Interactivas
- **Términos del glosario**: Clic en términos resaltados para ver definiciones
- **Botón "Animación"**: Ver videos explicativos cuando disponibles
- **Zoom de imágenes**: Clic en imágenes para ampliar
- **Puntero láser**: Botón superior derecho para activar señalador virtual

## 🎨 Personalización

### Agregar Slides
Edita `src/data/slides.json`:

```json
{
  "id": 31,
  "title": "Título del Slide",
  "imagen": "31.png",
  "video": "31.mp4",
  "bullets": [
    "Punto 1",
    "Punto 2"
  ]
}
```

### Agregar Términos al Glosario
Edita `src/data/glosarios_terminos.json`:

```json
{
  "id": "NUEVO_TERMINO",
  "significado": "Definición del término"
}
```

## 🌐 Deploy a GitHub Pages

1. **Configura tu repositorio en GitHub**

2. **Deploy automático**: Push a `main` branch
   ```bash
   git add .
   git commit -m "Update presentation"
   git push origin main
   ```

3. **Deploy manual**:
   ```bash
   npm run deploy
   ```

4. **Habilita GitHub Pages**:
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

Tu presentación estará en: `https://tu-usuario.github.io/presentacion-tanenbaum/`

## 👨‍🎓 Autor

**Tobias González Galeano**  
Maestría en Gestión de Sistemas Informáticos  
Módulo: Redes de Comunicación de Datos

## 📚 Referencias

Tanenbaum, A. S., & Wetherall, D. (2011). Comunicaciones y redes de computadores. Pearson Educación.

## 📄 Licencia

MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reportar Issues

Si encuentras algún bug o tienes sugerencias, por favor abre un issue en el repositorio.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
