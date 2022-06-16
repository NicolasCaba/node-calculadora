const readlineSync = require('readline-sync');

function realizarOperaciones() {
  const opcion = parseInt(readlineSync.question('Ingresa una opcion:'
    + '\n1 -> Suma'
    + '\n2 -> Resta'
    + '\n3 -> Multiplicacion'
    + '\n4 -> Division\n'
  ));

  if (opcion < 1 || opcion > 4) {
    console.log('Opcion invalida');
    realizarOperaciones();
  }

  primerNum = parseFloat(readlineSync.question('Primer numero: '));
  segundoNum = parseFloat(readlineSync.question('Segundo numero: '));

  switch (opcion) {
    case 1:
      console.log(primerNum + segundoNum);
      break;
    case 2:
      console.log(primerNum - (segundoNum));
      break;
    case 3:
      console.log(primerNum * segundoNum);
      break;
    case 4:
      if (segundoNum === 0) {
        console.log('Division entre cero');
        break;
      }
      console.log(primerNum / segundoNum);
      break;
    default:
      console.log('Entrada invalida');
  }

}

realizarOperaciones();



