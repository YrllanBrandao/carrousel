const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const previous = document.querySelector('#previous');
const next = document.querySelector("#next");
const setImage = document.querySelectorAll(".setImage");

let index = 0;

const clearSet = () => {

  setImage.forEach((select) => {

    if (select.classList.contains('active'))
    {
      select.classList.remove('active');

    }

  })
}
setImage.forEach((choose)=>{
 
   
   
    
   choose.addEventListener('click', () =>{
     
     
     clearSet();
   choose.classList.add('active');
   
    const myIndex = Number(choose.id);
    
    
    carrousel(myIndex)
    
     })
 
  });



previous.addEventListener('click', (e)=>{
 
  decrementIndex();
});
next.addEventListener('click', (e) =>{
  
  incrementIndex();
  }
  );



const decrementIndex =  () =>{
  
 index--;
 if(index < 0)
 {
   index = 3;
   
 }
 
 
 
   carrousel(index);
  
  
};


const incrementIndex = () =>{
  

  index++
  
  if (index > 3)
  {
    index = 0;
  
  }
  

  
  
  
  carrousel(index);
  
};

function carrousel(arg)
{
  
  slide.forEach((img) =>{
    
    img.classList.add("notVisible");
    if(img.classList.contains('active'))
    {
      img.classList.remove('active');
    }
    
    
    
  })
  
  slide[arg].classList.add('active');
  clearSet();
  setImage[arg].classList.add('active')
}

setInterval(incrementIndex, 4000)


