const parrafo1 = document.getElementById('parrafo1')
const parrafo2 = document.getElementById('parrafo2')
let textoBold = 'CARIÑOSITOS ONDEMAND'


window.onload = () => {
    let textop1 = document.createTextNode(`En ${textoBold} ofrecemos una experiencia unica para los chicos y grandes del hogar.`)
    let textop2 = document.createTextNode('Crea tu propio oso para regalar o regalarte')
    parrafo1.appendChild(textop1)
    parrafo2.appendChild(textop2)
}