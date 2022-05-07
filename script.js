const $img = document.querySelector(".img-1 img");
let rutimg = "img/img2.png";
let rutimg2 = "img/img1.png";
let click = false;
const $form = document.querySelector("form");
const $name = document.querySelector(".input-name input");
const $modal = document.querySelector(".modal");
const $span = document.querySelector(".usuario");

document.addEventListener("DOMContentLoaded",()=>{
    $img.addEventListener("click",()=>{
        click ? click=false : click=true;
        click ?  $img.src= rutimg2 : $img.src=rutimg ;
        $img.classList.toggle("active");
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
    },8000);


}