```markdown
# Sistema de Validación de Edad con Mensajes Motivacionales

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Un sistema interactivo que valida la edad del usuario y devuelve un mensaje personalizado según su rango etario.

## 🌟 Características principales

- **Validación de edad inteligente**:
  - Solo acepta valores numéricos enteros
  - Rango válido: 1-120 años
  - Mensajes de error específicos para cada caso

- **Personalización**:
  - Nombre opcional para mensajes personalizados
  - 5 categorías de edad con mensajes únicos

- **Experiencia de usuario**:
  - Interfaz simple mediante ventanas emergentes nativas
  - Validación en tiempo real
  - Bucle hasta obtener entrada válida

## 🛠️ Tecnologías utilizadas

- **Frontend**:
  - HTML5
  - JavaScript Vanilla (ES6)

## 📂 Estructura del proyecto

```
/
├── index.html                  # Contenedor principal
└── sistema_interactivo.js      # Lógica de la aplicación
```

## 🚀 Cómo ejecutar

1. Clona o descarga el repositorio
2. Abre el archivo `index.html` en tu navegador web
3. Sigue las instrucciones:
   - Introduce tu nombre (opcional)
   - Ingresa tu edad (número entre 1 y 120)
4. Recibe tu mensaje motivacional personalizado

## 🎨 Personalización

Para modificar los mensajes, edita la función `mensajeMotivacional`:

```javascript
// Ejemplo de modificación
if (edad < 13) {
    return `¡Hola${nombreMostrar}!\nNuevo mensaje personalizado aquí`;
}
```

## 📝 Mejoras posibles

- Añadir interfaz gráfica más elaborada
- Implementar persistencia de datos
- Agregar más categorías de edad
- Internacionalización (multiidioma)

## 🤝 ¿Cómo contribuir?

1. Haz fork del proyecto
2. Crea tu rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📜 Licencia

MIT License. Ver archivo `LICENSE` para más detalles.

## ✉️ Contacto

Desarrollado por Adrian Villegas
```

Este README.md incluye:

1. Encabezado con badges modernos
2. Sección de características mejor organizada
3. Tecnologías claramente especificadas
4. Estructura de proyecto simplificada
5. Instrucciones de ejecución paso a paso
6. Ejemplo claro de personalización
7. Sección de posibles mejoras
8. Guía de contribución estándar
9. Información de licencia y contacto

El diseño es más moderno que el anterior, con:
- Badges actualizados
- Mejor organización visual
- Sección de "Mejoras posibles"
- Lenguaje más conciso
- Formato consistente
