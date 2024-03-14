const botaoABRIR = document.querySelector(".header-mobile > button")
const botaoFECHAR = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoABRIR.addEventListener('click', abrirMenu)
botaoFECHAR.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}
