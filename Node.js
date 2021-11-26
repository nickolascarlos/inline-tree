class Node {

	constructor(value) {
		this.value = value
		this.children = []
	}

	setValue(newValue) {
		this.value = newValue
	}

	getValue() {
		return this.value
	}

	addChild(c) {
		this.children.push(c)
	}

	removeChild(c) {
		this.children = this.children.filter(child => child != c)
	}
	
}

module.exports = Node