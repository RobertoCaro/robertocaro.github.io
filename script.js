let respuestaCorrecta;

function generarEjercicio() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    respuestaCorrecta = num1 + num2; // Puedes cambiar por otras operaciones (resta, multiplicación, etc.)
    
    document.getElementById('ejercicio').textContent = `${num1} + ${num2} = ?`;
    document.getElementById('resultado').textContent = "";
}

function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
    
    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById('resultado').textContent = "¡Correcto! 🎉";
        document.getElementById('resultado').style.color = "green";
    } else {
        document.getElementById('resultado').textContent = "Inténtalo de nuevo ❌";
        document.getElementById('resultado').style.color = "red";
    }
}