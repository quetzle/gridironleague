function Player(position, age, potential, skill) {
	this.position = position;
	
	if (age == -1)
		this.age = Math.floor((19.7 + (Math.random() + Math.random() + Math.random()) / 3 * 5) + (-2 * Math.random() + 1) * .06);
	
	this.potential = potential;
	
	
}