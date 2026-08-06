const notas  = [maycon];


const notasAtualizadas = notas.map((nota)=>{
return nota + 1 >= 10 ? 10 : nota +1;
});

console.log( notasAtualizadas); 
