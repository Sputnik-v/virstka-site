

const header = document.querySelector(".header-menu")
    window.onscroll = function(){
        
    if(window.scrollY > 100){
        header.style.background = "rgba(12, 10, 17, 1)"
    }
    else{
        header.style.background = "rgba(0, 0, 0, 0)" 
    }
        }