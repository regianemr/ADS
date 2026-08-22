// Estrutura de controle que permite selecionar um dos vários blocos de código baseado no valor de uma expressão
// alternativa mais organizada do que if e else repetidamente

function checkTrafficLight(lightColor) {
  switch (lightColor){
    case 'verde':
      console.log("Pode atravessar a rua.");
      break;
    case 'amarelo':
      console.log("Prepare-se para parar.");
      break;
    case 'vermelho':
      console.log("PARE!");
      break;
    default:
      console.log("Cor inválida!");
  }

}

checkTrafficLight('verde');
checkTrafficLight('amarelo');
checkTrafficLight('vermelho');
checkTrafficLight('azul');