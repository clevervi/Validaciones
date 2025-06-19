/**
 * Sistema Interactivo de Mensajes Motivacionales
 * Versión mejorada que reutiliza los mensajes originales
 */

// Objeto que contiene los mensajes motivacionales organizados por grupo de edad
const MENSAJES_MOTIVACIONALES = {
  infantil: {
    rango: [1, 12],
    mensaje: (nombre) => `¡Hola${nombre}!\nA tu corta edad, cada día es una aventura. ¡Nunca dejes de explorar y aprender!`
  },
  adolescente: {
    rango: [13, 17],
    mensaje: (nombre) => `¡Hola${nombre}!\nEstás en una etapa clave para descubrir tus pasiones. ¡Aprovecha cada oportunidad y sigue adelante!`
  },
  joven: {
    rango: [18, 29],
    mensaje: (nombre) => `¡Hola${nombre}!\nLa juventud es el mejor momento para crear tu camino. ¡No temas a los retos y persigue tus sueños!`
  },
  adulto: {
    rango: [30, 59],
    mensaje: (nombre) => `¡Hola${nombre}!\nTu experiencia es valiosa. ¡Sigue creciendo y demuestra de lo que eres capaz!`
  },
  mayor: {
    rango: [60, 120],
    mensaje: (nombre) => `¡Hola${nombre}!\nTu sabiduría inspira a quienes te rodean. ¡La edad es solo un número para seguir aprendiendo!`
  }
};

/**
 * Valida si la entrada es un número entero dentro del rango permitido
 */
function validarEdad(edadIngresada) {
  if (!edadIngresada || !/^\d+$/.test(edadIngresada)) {
    return { valido: false, mensaje: "Debes ingresar un número entero positivo." };
  }
  
  const edad = parseInt(edadIngresada, 10);
  
  if (edad < 1 || edad > 120) {
    return { valido: false, mensaje: "La edad debe estar entre 1 y 120 años." };
  }
  
  return { valido: true, edad };
}

/**
 * Solicita la edad al usuario hasta que ingrese un valor válido
 */
function obtenerEdadValida() {
  let resultado;
  do {
    const entrada = prompt("Por favor, ingresa tu edad (entre 1 y 120):");
    resultado = validarEdad(entrada);
    if (!resultado.valido) {
      alert(resultado.mensaje);
    }
  } while (!resultado.valido);
  
  return resultado.edad;
}

/**
 * Determina el grupo de edad y devuelve el mensaje correspondiente
 */
function obtenerMensajeMotivacional(nombre, edad) {
  const nombreMostrar = nombre ? ` ${nombre}` : "";
  
  for (const grupo in MENSAJES_MOTIVACIONALES) {
    const [min, max] = MENSAJES_MOTIVACIONALES[grupo].rango;
    if (edad >= min && edad <= max) {
      return MENSAJES_MOTIVACIONALES[grupo].mensaje(nombreMostrar);
    }
  }
  
  // Mensaje por defecto (no debería ocurrir por la validación previa)
  return `¡Hola${nombreMostrar}!\nGracias por compartir tu edad con nosotros. ¡Sigue adelante!`;
}

/**
 * Función principal que orquesta el flujo del programa
 */
function iniciarSistemaInteractivo() {
  const nombreUsuario = prompt("¿Cómo te llamas? (opcional)");
  const edadUsuario = obtenerEdadValida();
  const mensajeFinal = obtenerMensajeMotivacional(nombreUsuario, edadUsuario);
  
  alert(mensajeFinal);
}

// Iniciar el programa
iniciarSistemaInteractivo();
