let calculadoraSigue = true
const texto = ["Ingrese el primer numero", "Para sumar: 1, Resta: 2, Multiplicacion:3, Divicion:4", "Ingrese el segundo numero"]

while (calculadoraSigue) {

    let numero1 = parseInt (prompt (texto[0]))
    let operacion = parseInt (prompt(texto [1]))
    let numero2 = parseInt (prompt (texto[2]))
    



switch (operacion) {
    case 1:
        alert (`El resultado es: ${numero1 + numero2}`)
      break;
    case 2:
        alert (`El resultado es: ${numero1 -  numero2}`)
      break;
    case 3:
        alert (`El resultado es: ${numero1 * numero2}`)
      break;
    case 4:
        alert (`El resultado es: ${numero1 / numero2}`)
        break;
    default:
      alert ("Operacion no valida")
      break;
  }
  calculadoraSigue = confirm("Deseas realizar otra operacion?")
  }
    alert("¡Gracias por usar la calculadora!");
  
