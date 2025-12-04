let i = 1;
let sinalVermelho = document.getElementsByClassName('btn-123')[0];
let sinalAmarelo    = document.getElementsByClassName('btn-123')[1];
let sinalVerde = document.getElementsByClassName ('btn-123')[2];
console.log(sinalVermelho)
function nextColor(){
    i++;
    if(i > 3 ){
        i = 1;
    }
    
    switch ('radio'+i){
        case 'radio1':
            sinalVerde.classList.remove('btn-green')
            sinalVermelho.classList.add('btn-red')
            console.log(sinalVermelho)
            console.log('radio'+i);
            break;
        case 'radio2':
            sinalVermelho.classList.remove('btn-red');
            sinalAmarelo.classList.add('btn-yellow');
            console.log('radio'+i);
            break;
        case 'radio3':
            console.log('radio'+i);
            sinalAmarelo.classList.remove('btn-yellow');
            sinalVerde.classList.add('btn-green') ;           
            break;
    }
}

setInterval((e)=>{
    nextColor()
},1000)