const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    };
};

/*
  Já conhecemos o laço de repetição chamado "for",
  mas há uma palavra reservada que nos permite iterar sobre cada propriedade,
  que talvez você ainda não conheça. 
  
  usaremos a palavra reservada "in", ela faz com que seja capturado cada uma das chaves
  no objeto cliente. Isto é, deixar a chave em cliente, em uma tradução livre.
  
  "typeof" de um array retorna um objeto, e poderíamos adicionar outro tratamento
  para chamar novamente dentro do objeto endereço e ler os campos ou tratar os arrays,
  checar se é um array e criar outro método para isso.

  Mas para o nosso entendimento, isso que fizemos é satisfatório.
  Conseguimos compreender como o for...in pega as propriedades e como podemos manipulá-las,
  fazer validações e entender como funciona esse tipo de laço de repetição.
  */