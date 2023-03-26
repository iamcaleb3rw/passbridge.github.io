document.addEventListener('scroll' , () =>{
    navBar = document.querySelector(".navbar")

    if (window.scrollY >0){
        navBar.classList.add("scrolled");
        
    }else{
        navBar.classList.remove("scrolled");
    }
})