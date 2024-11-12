// Mostrar el formulario correspondiente a la configuración seleccionada
function mostrarFormulario() {
    const seleccion = document.getElementById('configuracion').value;
    document.getElementById('formEsfera').style.display = 'none';
    document.getElementById('formCilindro').style.display = 'none';
    document.getElementById('formPlano').style.display = 'none';

    if (seleccion === 'esfera') {
        document.getElementById('formEsfera').style.display = 'block';
    } else if (seleccion === 'cilindro') {
        document.getElementById('formCilindro').style.display = 'block';
    } else if (seleccion === 'plano') {
        document.getElementById('formPlano').style.display = 'block';
    }
}

// Constante de gravitación universal
const G = 6.674e-11;

// Calcular el campo gravitacional para una esfera
function calcularCampoEsfera() {
    const radio = parseFloat(document.getElementById('radioEsfera').value);
    const masa = parseFloat(document.getElementById('masaEsfera').value);
    const distancia = parseFloat(document.getElementById('distanciaEsfera').value);

    let campo;
    if (distancia < radio) {
        // Dentro de la esfera
        campo = (G * masa * distancia) / (radio ** 3);
    } else {
        // Fuera de la esfera
        campo = (G * masa) / (distancia ** 2);
    }

    // Mostrar resultado
    mostrarResultado(`El campo gravitacional en r = ${distancia} m es: ${campo.toExponential(3)} N/kg`);
}

// Calcular el campo gravitacional para un cilindro
function calcularCampoCilindro() {
    const radio = parseFloat(document.getElementById('radioCilindro').value);
    const densidadLineal = parseFloat(document.getElementById('densidadCilindro').value);
    const distancia = parseFloat(document.getElementById('distanciaCilindro').value);

    let campo;
    if (distancia < radio) {
        // Dentro del cilindro
        campo = (G * densidadLineal * distancia) / (2 * radio);
    } else {
        // Fuera del cilindro
        campo = (G * densidadLineal) / (distancia);
    }

    // Mostrar resultado
    mostrarResultado(`El campo gravitacional en r = ${distancia} m es: ${campo.toExponential(3)} N/kg`);
}

// Calcular el campo gravitacional para un plano
function calcularCampoPlano() {
    const densidadSuperficial = parseFloat(document.getElementById('densidadPlano').value);

    const campo = 2 * G * densidadSuperficial;

    // Mostrar resultado
    mostrarResultado(`El campo gravitacional es: ${campo.toExponential(3)} N/kg`);
}

// Mostrar el resultado en la página
function mostrarResultado(mensaje) {
    document.getElementById('resultado').innerHTML = `<h2>Resultado:</h2><p>${mensaje}</p>`;
}
