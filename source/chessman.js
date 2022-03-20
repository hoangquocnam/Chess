function ChessMan() {
	this.image = document.createElement("img");
	this.image.style.width = CHESSMAN_SIZE + 'px';
	this.image.style.height = CHESSMAN_SIZE + 'px';
	this.position_X;
	this.position_Y;
	this.color;
	this.type;
	// set
	this.setImage = (type, color) => {
		this.image.src = `./assets/chess-${type}-${color}.png`;
		this.color = color;
		this.type = type;
	}

	this.setPosition = (posX, posY) => {
		this.position_X = posX;
		this.position_Y = posY;
	}

	// get
	this.getImage = () => {
		return this.image;
	}

	this.getColor = () => {
		return this.color;
	}

	this.getPossibleMoves = () => { };
}








