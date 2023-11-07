//Método Splice

// const animais = ['vaca', 'cachorro', 'gato', 'pato']
// console.log(animais);
// animais.splice(1, 0, 'girafa')
// console.log(animais);

//Método Find

// const animais1 = ['vaca', 'cachorro', 'gato', 'pato', 'vaca']
// const animaisFind = animais1.find((animal) => animal === 'vaca')
// console.log(animaisFind)

//Método Filter

// const animais2 = ['vaca', 'cachorro', 'gato', 'pato', 'vaca']
// const animaisFilter = animais2.filter((animal) => animal === 'vaca')
// console.log(animaisFilter)


//Método ForEach

const produtos = [
    {
      nome: "Bola futebol",
      categoria: "esporte",
    },
    {
      nome: "Blusa social",
      categoria: "social",
    },
    {
      nome: "Bola vôlei",
      categoria: "esporte",
    },
    {
      nome: "Sapato social",
      categoria: "calcados",
    },
  ];
  
// produtos.forEach((produto) => {
//     if(produto.categoria === 'esporte'){
//         console.log(produto)}

//     });

//Método includes


const filtro = produtos.filter((produto) => 
    produto.nome.includes("Bola")
);
console.log(filtro)

//Método reduce

