// SCROLL ANIMATION
const elementos = document.querySelectorAll('.animar');

function animarScroll() {
    const topoTela = window.innerHeight * 0.8;

    elementos.forEach(elemento => {
        const elementoTopo = elemento.getBoundingClientRect().top;

        if (elementoTopo < topoTela) {
            elemento.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarScroll);

// ativa ao carregar a página também
animarScroll();

// DARK MODE
const temaBtn = document.getElementById("tema-btn");

if (localStorage.getItem("tema") === "light") {
    document.body.classList.add("light");
    temaBtn.textContent = "☀️";
}

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        temaBtn.textContent = "☀️";
        localStorage.setItem("tema", "light");
    } else {
        temaBtn.textContent = "🌙";
        localStorage.setItem("tema", "dark");
    }
});

// BUSCAR CEP
function buscarCEP() {
    let cep = document.getElementById("cep").value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(dados => {
        document.getElementById("resultado").innerHTML =
        `Rua: ${dados.logradouro} <br>
        Bairro: ${dados.bairro} <br>
        Cidade: ${dados.localidade}`;
    })
    .catch(() => {
        document.getElementById("resultado").innerText = "Erro ao buscar CEP";
    });

}

