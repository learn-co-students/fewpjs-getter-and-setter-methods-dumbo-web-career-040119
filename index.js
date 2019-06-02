class Circle{
  constructor(radius){
    this.radius = radius
    this.pi = Math.PI
  }

  get area() {
   return this.pi * (this.radius * this.radius);
  }

  get circumference() {
   return this.pi * (this.radius * 2);
  }

  get diameter() {
   return this.radius * 2;
  }

  set area(newArea){
    this.radius = Math.sqrt(newArea / this.pi)
  }

  set circumference(newCircumference){
    this.radius = newCircumference / (2 * this.pi)
  }

  set diameter(newDiameter){
    this.radius = newDiameter/2
  }

}
