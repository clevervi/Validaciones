# Sistema de Validación de Edad con Mensajes Motivacionales

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
├── readme.md                   # Descripcion del proyecto
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


## ✉️ Contacto

Desarrollado por Adrian Villegas
