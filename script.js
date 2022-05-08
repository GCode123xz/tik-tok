const $img = document.querySelector(".img-1 img");
let rutimg = "img/img2.png";
let rutimg2 = "img/img1.png";
let click = false;
const $form = document.querySelector("form");
const $name = document.querySelector(".input-name input");
const $modal = document.querySelector(".modal");
const $span = document.querySelector(".usuario");
const $frame_1 = document.querySelector("#wrap");
const $frame_2 = document.querySelector(".card");
const check = document.querySelector("#checkbox");

document.addEventListener("DOMContentLoaded",()=>{
    $frame_1.addEventListener("click",()=>{
        if(!check.checked){
         $frame_1.remove()
        }
    })
    $img.addEventListener("click",()=>{
        $img.src= rutimg2; 
        $img.classList.toggle("active");
        setTimeout(()=>{
            $img.parentElement.remove();
            document.querySelector(".titulo").remove();
            $frame_1.classList.add("active");
            
        },5000);
        
    })

    $form.addEventListener("submit",enviarNombre)
})
const enviarNombre = (e)=>{
    e.preventDefault();
    $modal.remove();
    document.querySelector(".titulo").classList.add("active");
    document.querySelector(".img-1").classList.add("active");
    $span.textContent=`${$name.value}`;
    setInterval(()=>{
        document.querySelector("h5").classList.add("hidden");
    },5000);
}