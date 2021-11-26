class Tree {
	
	constructor(root) {
		this.root = root
	}

	inline(node = this.root) {
		if (node.children.length == 0) return `${node.value}`

		let r = `${node.value} (`
		for (let child of node.children) {
			r += ` ${this.inline(child)} `
		}
		r += ')'

		return r
	}

}

module.exports = Tree

