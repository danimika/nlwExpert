const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de estilo gráfico",
      "Uma linguagem de marcação para documentos web",
      "Uma linguagem de programação de alto nível",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Atribuição de valor",
      "Comparação estrita de valor e tipo",
      "Concatenação de strings",
    ],
    correta: 1
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "var nomeVariavel;",
      "variavel = nomeVariavel;",
      "const nomeVariavel = 42;",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um estilo de codificação JavaScript",
      "Uma linguagem de marcação para documentos web",
      "A representação da estrutura de um documento HTML para manipulação via código JavaScript",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a finalidade do método 'addEventListener'?",
    respostas: [
      "Adicionar elementos visuais à página",
      "Adicionar um ouvinte de eventos a um elemento HTML",
      "Realizar operações matemáticas",
    ],
    correta: 1
  },
  {
    pergunta: "Como se comenta uma linha de código em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "'Este é um comentário'",
      "<!-- Este é um comentário -->",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado que armazena apenas números",
      "Um objeto que armazena chaves e valores",
      "Uma estrutura que armazena uma coleção ordenada de elementos",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do método 'push' em um array?",
    respostas: [
      "Remover o último elemento do array",
      "Adicionar um elemento no início do array",
      "Adicionar um elemento no final do array",
    ],
    correta: 2
  },
  {
    pergunta: "O que é hoisting em JavaScript?",
    respostas: [
      "Um método de ordenação de variáveis",
      "O comportamento de mover declarações para o topo de um escopo durante a fase de compilação",
      "Um tipo de estrutura de controle de fluxo",
    ],
    correta: 1
  },
  {
    pergunta: "Como se realiza uma requisição HTTP assíncrona em JavaScript?",
    respostas: [
      "Usando o método 'syncRequest'",
      "Utilizando a função 'fetch'",
      "Enviando um formulário HTML",
    ],
    correta: 1
  },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}