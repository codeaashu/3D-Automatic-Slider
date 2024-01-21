/* ===( CODE AASHU )=== */
let imgContainer = document.querySelector(".img-container");
 
setInterval(() => {
        let last = imgContainer.firstElementChild;
        last.remove();
        imgContainer.appendChild(last);
      }, 2500);