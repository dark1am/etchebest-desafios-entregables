function recorridoAsync(textRead,responseTime = 1000,reloadFunction) {
  let temp = textRead.split(" ");
  let counter = 0;

  let timerOutput = setInterval(() => {
    console.log(temp[counter]);
    counter++;
    
    if (counter == temp.length) {
      clearInterval(timerOutput);
      counter = 0;
      reloadFunction(temp.length);
    }
  }, responseTime);
}

recorridoAsync("Me llamo Callback", 100, (words) => {
  let totalWords = words;
  recorridoAsync("Soy una funcion", 100, (words) => {
    totalWords += words;
    recorridoAsync("Esto es codigo asincrono",100,(words)=>{
      totalWords += words;
      console.log(`Proceso terminado, cantidad de palabras procesadas:  ${totalWords}`)
    })
  });
});