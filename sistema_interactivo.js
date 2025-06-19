/**
 * Solicita y valida la edad del usuario.
 * Devuelve la edad como número entero o null si es inválida.
 */
function solicitarEdad() {
    const edadIngresada = prompt("Por favor, ingresa tu edad (entre 1 y 120):");
    if (!edadIngresada || !/^\d+$/.test(edadIngresada)) {
        alert("Debes ingresar un número entero positivo.");
        return null;
    }
    const edad = parseInt(edadIngresada, 10);
    if (edad < 1 || edad > 120) {
        alert("La edad debe estar entre 1 y 120 años.");
        return null;
    }
    return edad;
}

/**
 * Devuelve un mensaje motivacional según la edad.
 */
function mensajeMotivacional(nombre, edad) {
    let nombreMostrar = nombre ? ` ${nombre}` : "";
    if (edad < 13) {
        return `¡Hola${nombreMostrar}!\nA tu corta edad, cada día es una aventura. ¡Nunca dejes de explorar y aprender!`;
    } else if (edad < 18) {
        return `¡Hola${nombreMostrar}!\nEstás en una etapa clave para descubrir tus pasiones. ¡Aprovecha cada oportunidad y sigue adelante!`;
    } else if (edad < 30) {
        return `¡Hola${nombreMostrar}!\nLa juventud es el mejor momento para crear tu camino. ¡No temas a los retos y persigue tus sueños!`;
    } else if (edad < 60) {
        return `¡Hola${nombreMostrar}!\nTu experiencia es valiosa. ¡Sigue creciendo y demuestra de lo que eres capaz!`;
    } else {
        return `¡Hola${nombreMostrar}!\nTu sabiduría inspira a quienes te rodean. ¡La edad es solo un número para seguir aprendiendo!`;
    }
}

// Programa principal
const nombreUsuario = prompt("¿Cómo te llamas? (opcional)");

let edad;
do {
    edad = solicitarEdad();
} while (edad === null);

// Mostrar mensaje motivacional
alert(mensajeMotivacional(nombreUsuario, edad));