const alunos = [" maycon " , "lucas ","LUAN  " ,"mauro"];
const medias = [ 7 , 4.5 ,8, 7.5];

 const reprovados = alunos.filter((  alunos, indice)=> {
    return medias[ indice]< 7;

 });

  console.log(reprovados);
