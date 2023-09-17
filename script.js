const _data = [
    {
        id:1,
        verso: "ben 10",
        valor: 1
    },
    {
        id:2,
        verso: "mickey mouse",
        valor:2
    },
    {
        id:3,
        verso: "velma",
        valor:3
    },
    {
        id:4,
        verso: "ben 10",
        valor:1
    },
    {
        id:5,
        verso: "mickey mouse",
        valor:2
    },
    {
        id:6,
        verso: "velma",
        valor:3
    }
];

function montarCarta(){
    lista = document.querySelector(".cartas");
    _data.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.classList.add('carta');
        li.dataset.valor = item.valor;
        lista.append(li)
    })
};

document.addEventListener("DOMContentLoaded", ()=>{
    montarCarta();
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach(carta => {
        carta.addEventListener("click", (e) =>{
            console.log(e.target); 
        })
    });
});