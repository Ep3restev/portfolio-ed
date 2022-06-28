function reveals(){
    let reveal = document.querySelectorAll(".reveal")
    for(let i=0; i<reveal.length; i++){
      let wheight = window.innerHeight;
      let eTop = reveal[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if(eTop < wheight - elementVisible){
        reveal[i].classList.add("active");
      }else{
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll",reveals)

