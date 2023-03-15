 class Obstacle {
 
  constructor() {
    this.h = 30 * random(2, 4)
    this.w = 20 * random(2, 5)
    this.x = 700
    this.y = height - this.h
  }
  
  move() {
    this.x -= 5
  }
  
  show() {
    rect(this.x, this.y, this.w, this.h)
  }
}