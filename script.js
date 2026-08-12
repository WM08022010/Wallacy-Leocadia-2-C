// ================================
// CONTROLE DO TAMANHO DA FONTE
// ================================

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");

let tamanhoFonte = 18;

aumentarFonte.addEventListener("click", () => {

    if (tamanhoFonte < 28) {
        tamanhoFonte += 2;
        document.documentElement.style.fontSize = `${tamanhoFonte}px`;
    }

});

diminuirFonte.addEventListener("click", () => {

    if (tamanhoFonte > 14) {
        tamanhoFonte -= 2;
        document.documentElement.style.fontSize = `${tamanhoFonte}px`;
    }

});


// ================================
// ALTO CONTRASTE
// ================================

const contraste = document.getElementById("contraste");

contraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    const ativado = document.body.classList.contains("alto-contraste");

    contraste.setAttribute("aria-pressed", ativado);

    contraste.textContent = ativado
        ? "Contraste normal"
        : "Alto contraste";
});


// ================================
// ESPAÇAMENTO DO TEXTO
// ================================

const espacamento = document.getElementById("espacamento");

espacamento.addEventListener("click", () => {

    document.body.classList.toggle("espacamento");

    const ativado = document.body.classList.contains("espacamento");

    espacamento.setAttribute("aria-pressed", ativado);

    espacamento.textContent = ativado
        ? "Espaçamento normal"
        : "Espaçamento";
});


// ================================
// LEITURA DO TEXTO EM VOZ ALTA
// ================================

const leitura = document.getElementById("leitura");
const pararLeitura = document.getElementById("pararLeitura");
const textoPrincipal = document.getElementById("textoPrincipal");

leitura.addEventListener("click", () => {

    if (!("speechSynthesis" in window)) {
        alert("Seu navegador não oferece suporte à leitura em voz alta.");
        return;
    }

    // Para qualquer leitura anterior
    window.speechSynthesis.cancel();

    const texto = textoPrincipal.innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
});


// ================================
// PARAR LEITURA
// ================================

pararLeitura.addEventListener("click", () => {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

});


// ================================
// TECLA ESC PARA PARAR A LEITURA
// ================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

    }

});