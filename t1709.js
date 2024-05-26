let pic = ["ujhf.jpg","ujhs2.jpg","fjevjvrfe.jpg","bfbvjbbrv.jpg","fejrhfjerfee.jpg"];
let i=0;
picture=document.getElementById("picture")
function slide_left(){
  i=i-1;
  if (i<0){
    i=4;
  }
  picture.src=pic[i];
}
function slide_right(){
  i=i+1;
  if (i>4){
    i=0;
  }
  picture.src=pic[i];
}