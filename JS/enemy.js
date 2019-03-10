

function Enemy(enemyType, health, mana, strength, agility, speed) {
	this.classType = enemyType;
	this.health = health;
	this.mana = mana;
	this.strength = strength;
	this.agility = agility;
	this.speed = speed;
}

function createEnemy(enemyNum) {
	switch (enemyNum) {
		case 1:
			enemy = new Enemy("Troll", 200, 0, 50, 10, 30);
			break;
		case 2:
			enemy = new Enemy("Smurf", 100, 0, 20, 20, 50);
			break;
		default:
			break;
	}
}

function Attack() {
	

}

function chooseEnemy(){
	enemyNum = Math.floor((Math.random() * 2) + 1);
	createEnemy(this.enemyNum);
	if (enemyNum === 1) {
		getEnemy.innerHTML = '<img src="img/enemies/1.png" class = "enemy-class">' + '<div><h3>' + enemy.classType + '</h3><p>Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>'
	} else if (enemyNum = 2){
		getEnemy.innerHTML = '<img src="img/enemies/2.png" class="enemy-class">'+ '<div><h3>' + enemy.classType + '</h3><p>Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>'
	}

	getActions.innerHTML = '<a href="#" onclick = Attack()>Attack!</a>'
}