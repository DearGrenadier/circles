function CirclesGenerator () {
	this.stylesArray = Array(
		{	
			color : "#000",
			background : "#fff",
			border : "1px solid #fff"
		},
		{
			color : "#000",
			background : "#fff",
			border : "1px solid #fff"
		}
	);
	this.getRandom = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	this.generateCircle = function () {
		return {
			style : this.stylesArray[this.getRandom(0, this.stylesArray.length)],
			number : this.getRandom(1,9)
		}
	}
}

