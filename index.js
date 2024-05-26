let count =20 
function right(){
    if(count<=40){
        count+= 10
        document.getElementById('gallery').style.transform ='translate(-'+count+'%)'
    }
    if(count>40){
        count=0
        document.getElementById('gallery').style.transform ='translate(-'+count+'%)'
    }
    console.log(count)
}
 
function left(){
    if(count>0){
        count-= 10
        document.getElementById('gallery').style.transform ='translate(-'+count+'%)'
    }
}


let but = document.getElementsByClassName("but");

for(let i=0; i<but.length; i++){
    but[i].addEventListener("click", function(){
        for(let i=0; i<but.length; i++){
            but[i].classList.remove('activ');
        }
        but[i].classList.add('activ');
    })
}