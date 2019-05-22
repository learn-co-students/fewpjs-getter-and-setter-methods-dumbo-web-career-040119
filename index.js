// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return (this.radius * 2)
    }

    get circumference() {
        return (this.radius * 2 * Math.PI);
    }
    get area(){
        return ((this.radius * this.radius) * Math.PI)
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2; 
    }

    set circumference(newCircumference){
        this.radius = (newCircumference / 2) / Math.PI;
    }
}