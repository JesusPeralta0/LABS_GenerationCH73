const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

  // agregamos un solo número a una fila existente
  arr[0].push(10);

  // agregamos una fila completamente nueva de números
  arr.push([50,60,70,80,90,100]);

  // eliminar un solo número de una sola fila
  arr[3].splice(5,1);

  // invertir una de las filas sin afectar a las demás
  arr[3].reverse()

  console.log(arr)


  
  
  // Type your code above this line!