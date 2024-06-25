const screen = document.getElementById('screen');
let resultadoScreen = false;

function incluirNumero(n) {
    if(screen.value === 'Math ERROR') {
        screen.value = '';
    }
    if(resultadoScreen) {
        screen.value = n;
        resultadoScreen = false;
    } else {
        screen.value += n;
    }
}

function incluirOperador(o) {
    if(screen.value === 'Math ERROR') {
        screen.value = '';
    }
    if(resultadoScreen) {
        resultadoScreen = false;
    }
    screen.value += o;
}

function calcular() {
    try{
        const resultado = eval(screen.value);
        if(resultado === Infinity || resultado === -Infinity || isNaN(resultado)) {
            screen.value = 'Math ERROR';
        } else {
            screen.value = resultado;
        }
        resultadoScreen = true;
    } catch (error){
        screen.value = 'Math ERROR';
    }
}

function limpiar() {
    screen.value = '';
    resultadoScreen = false;
}