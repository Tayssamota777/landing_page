// SCROLL ANIMATION
const elementos = document.querySelectorAll(".animar");

function animarScroll() {
    const alturaTela = window.innerHeight;

    elementos.forEach((el) => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < alturaTela - 100) {
            el.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);

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
    const cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (cep.length !== 8) {
        document.getElementById("resultado").innerText = "CEP inválido";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(dados => {
            if (dados.erro) {
                document.getElementById("resultado").innerText = "CEP não encontrado";
                return;
            }

            document.getElementById("resultado").innerText =
                `${dados.logradouro}, ${dados.bairro} - ${dados.localidade}/${dados.uf}`;
        })
        .catch(() => {
            document.getElementById("resultado").innerText = "Erro ao buscar CEP";
        });
}
