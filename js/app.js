const preloader1 = document.querySelector(".preloader-1");
const preloader2 = document.querySelector(".preloader-2");
const content = document.querySelector('.content');
const omitir = document.getElementById('omitir');
const youtubePlayer = document.querySelector("#youtube-player");

let timeout;

preloader1.style.display = "block";
preloader2.style.display = "none";  
content.style.display = "none";  

omitir.addEventListener('click', () => {

    preloader1.style.display = "none";  
    preloader2.style.display = "block";
    youtubePlayer.remove();

    // Configuramos un timeout para mostrar el contenido después de 1000 ms (1 segundo)
    timeout = setTimeout(() => {
        preloader2.style.display = "none";  
        content.style.display = "block";  
    }, 1000);
});
