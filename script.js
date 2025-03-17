let currentslide=0;
const totalslides=10;

const dots=document.querySelectorAll('.dot-container button');
const images=document.querySelectorAll('.image-container img');


function updateslide(newindex)
{
  images[currentslide].classList.remove('active');  
  currentslide=newindex;
  images[currentslide].classList.add('active'); 

  updateindicator(currentslide);
}
function updateindicator(index){
    dots.forEach(element => {
        element.style.backgroundColor='transparent'
    });
    dots[index].style.backgroundColor='#8052ec';

}

function prev(){
    const newindex=(currentslide-1+totalslides)%totalslides;
    updateslide(newindex)
}
function next(){
    const newindex=(currentslide+1)%totalslides;
    updateslide(newindex)
}
updateslide(0);