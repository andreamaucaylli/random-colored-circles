#RANDOM COLORED CIRCLES

Un script que me permita cambiar el color de borde de los círculos al realizar clic sobre los botnes 'Cri' y 'Supercri'.

![random colored circles](http://i63.tinypic.com/x2wdgj.jpg)

###BOTÓN CRI:

Este botón ejeutará un script que muestre un borde en los círculo cada vez que se realice clic, admás mostrará en el input el color de borde de cada círculo.

```javascript
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
```

Para ello se inicializa un evento y se declara un contador que represente el número de clics, así tenemos que la primera condición 'cont == 1' del primer if rpresenta el primer clic, que siendo verdadero añada un borde al primer círculo. Así tenemos para el segundo click, la condición 'cont == 2' que remueve el borde del círculo anterior y añade un borde al segundo círculo, para el tercer clic igual agrega un borde al tercer círculo y remueve el borde del segundo círculo. Al cumplirse las 3 condiciones de los if, el contador vuelve a cero y se reinicializa de nuevo todo.


###BOTÓN SUPERCRI:

Este botón ejecutará un script que al ingresar el nombre del color de fondo de los círculos, mostrará un borde.

```javascript
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
```

Para ello se inicializa un evento y se declara una variable que contenga los inputs, colores de fondo de los círculos que ingrese el usuario que son comparados usando una estructura condicional, siendo que la primera condición se compara el input al color azul y siendo esta verdadera se agregará un borde al círculo con el color en el input, la segunda condición de igual manera si es que el input es el color verde agreará un borde al círculo de dicho color y la tercera condición, si el input es el color amarillo de igual forma se agregará un borde al círculo de ese color.
