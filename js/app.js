window.addEventListener("load", function() {
    var boton = document.getElementById("cri");
    var cont = 1;
    boton.addEventListener("click", function(){
        if (cont == 1){
            document.getElementById("color").value = "azul";
            document.getElementById("blue").classList.add("border-blue");
            document.getElementById("yellow").classList.remove("border-yellow");
        }
        if (cont == 2){
            document.getElementById("color").value = "verde";
            document.getElementById("green").classList.add("border-green");
            document.getElementById("blue").classList.remove("border-blue");
        }
        if (cont == 3){
            document.getElementById("color").value = "amarillo";
            document.getElementById("yellow").classList.add("border-yellow");
            document.getElementById("green").classList.remove("border-green");
            cont = 0;
        }
        cont ++;
    });

    var boton = document.getElementById("super-cri");
    boton.addEventListener("click", function(){
        var color = document.getElementById("color").value;
        if (color == "azul") {
            document.getElementById("blue").classList.add("border-blue");
            document.getElementById("green").classList.remove("border-green");
            document.getElementById("yellow").classList.remove("border-yellow");
        } else if (color == "verde") {
            document.getElementById("blue").classList.remove("border-blue");
            document.getElementById("green").classList.add("border-green");
            document.getElementById("yellow").classList.remove("border-yellow");
        }else if (color == "amarillo") {
            document.getElementById("blue").classList.remove("border-blue");
            document.getElementById("green").classList.remove("border-green");
            document.getElementById("yellow").classList.add("border-yellow");
        }
    });
});
