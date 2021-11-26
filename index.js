let Node = require('./Node');
let Tree = require('./Tree');

(async () => {

	// Criação dos nós
	let n1 = new Node('r') // Root
	let n2 = new Node(2)
	let n3 = new Node(7)
	let n4 = new Node(90)
	let n5 = new Node(101)

	// Conexão dos nós
	n1.addChild(n2)
	n1.addChild(n3)
	n2.addChild(n4)
	n2.addChild(n5)

	// Criação da árvore
	let arvore = new Tree(n1)

	// Imprime a representação inline da árvore
	console.log(arvore.inline())

	// TODO: Interpretador da representação inline
})();