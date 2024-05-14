let imagens=['./src/assets/brinquedos1.png','./src/assets/brinquedos2.png','./src/assets/brinquedos3.png', './src/assets/brinquedos4.png'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById('imgCarrossel').src=imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

function medidas(){

    const contador = document.getElementById("contador")
    let valor=0;
    
    let tempo =setInterval(()=>{
        valor +=1;

        contador.innerHTML = `+ ${valor}`;

        if(valor ==300){
            clearInterval(tempo)
        }

    })
}