let count =20 
function right(){
    if(count<=40){
        count+= 10
        document.getElementById('slider').style.transform ='translate(-'+count+'%)'
    }
    if(count>40){
        count=0
        document.getElementById('slider').style.transform ='translate(-'+count+'%)'
    }
    console.log(count)
}
 
function left(){
    if(count>0){
        count-= 10
        document.getElementById('slider').style.transform ='translate(-'+count+'%)'
    }
}
let  num;
let dx;
document.getElementById('mj').addEventListener('click', (el)=>{
    const node = el.target.parentNode;
    
    if(el.target.nodeName == 'SPAN'){
        document.querySelectorAll('.mm').forEach(n => n.classList.remove('active'));
        el.target.classList.add('active')
        num = [...node.children].indexOf(el.target)
        console.log(num);
    }
    if(num == 1){
        dx=20;
        document.getElementById('slider').style.transform ='translate(-'+dx+'%)'
    }
    if(num == 0){
        dx=0;
        document.getElementById('slider').style.transform ='translate(-'+dx+'%)'
    }
    if(num == 2){
        dx=40;
        document.getElementById('slider').style.transform ='translate(-'+dx+'%)'
    }
})