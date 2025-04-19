# 🎬 Buscador de Películas

Aplicación web desarrollada en JavaScript que permite buscar películas utilizando la API de OMDb. Diseñada con un enfoque en la accesibilidad y una estética inspirada en VisionOS de Apple, ofrece una experiencia de usuario fluida y agradable.

## 🧰 Tecnologías Utilizadas

- HTML5
- CSS3 (Diseño estilo glassmorphism con colores pastel)
- JavaScript (ES6+)
- Fetch API para consumo de datos
- OMDb API

## 🚀 Características

- Búsqueda de películas por título.
- Visualización de resultados con:
  - Póster de la película.
  - Título.
  - Año de lanzamiento.
  - Calificación (Rated) sobre 10.
- Diseño responsive y centrado para una mejor visualización en distintos dispositivos.

## ⚙️ Instalación y Uso

1. Clona este repositorio:
    ```bash
   git clone https://github.com/tuusuario/buscador-peliculas.git
    ```  

3. Navega al directorio del proyecto:
    ```bash
   cd buscador-peliculas
   ```

3. Abre el archivo index.html en tu navegador preferido.
  
## 🔑 API Key

Este proyecto utiliza la API de OMDb, que requiere una clave de API para funcionar. Puedes obtener una clave gratuita registrándote en omdbapi.com/apikey.aspx.​

Una vez que tengas tu clave, reemplaza 'TU_API_KEY' en el archivo app.js por tu clave personal:
```bash
    const apiKey = 'TU_API_KEY';
```  