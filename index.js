var modal = document.getElementById('modalSample');
let modalButton = document.getElementById('modalButton');
let modalSpan = document.getElementsByClassName('modal-close')[0];

modalButton.onclick = function() {
    modal.style.display = "block";
}

modalSpan.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target === modal){
        modal.style.display = "none";
    }
}

function showToast() {
    let toast = document.getElementById("toast");

    toast.className = "show";

    setTimeout(function() {toast.className = toast.className.replace("show","");},3000);
}
