let emojis = ["😍","🐠","🫦","💕","💁","🎶","🍆"]
let t = "lol"
let rectangles = []
let size = 25

function setup(){

    createCanvas(windowWidth,windowHeight)
    textSize(size)
    
    for(let i = 100; i <= width-100; i = i + size*2){
		
	for(let j = 100; j <= height-100; j = j + size*2){
			
		r = new Rectangle(i,j)	
		
		rectangles.push(r)
		
		}
	}	
	
}

function draw(){

	background(10)

	for (let r of rectangles){
		
	r.display()
	
	}

}

class Rectangle{
	
	constructor(x,y){
		
		this.x = x
		this.y = y
		this.size = size
		this.counter = 0
		this.wasHovered = false
		this.textArray = emojis
		this.t = this.textArray[0]
		this.textCounter = 0
	}
	
	display(){
		

    	if(mouseX <= this.x + this.size && mouseX >= this.x && mouseY >= this.y && mouseY <= this.y + this.size){

		this.counter = this.counter + 1
    	
    	} else {this.counter = 0; this.wasHovered == false}
	
    	if (this.counter == 1){
    		
    		this.t = this.textArray[floor(random(this.textArray.length))] 
    		
    	}

		 
	text(this.t,this.x,this.y,this.size,this.size)

	}
	
}

function windowResized() {
    
  resizeCanvas(windowWidth, windowHeight);

}