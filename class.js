class car{
    constructor(make,model,year){
        this.make=make
        this.model=model;
        this.year=year;
        this.isAvailable=true;
    }

toggleAvailability(){
    this.isAvailable=!this.isAvailable;
}
}
const myCar=new car("Toyota","camry",2020);
console.log(`car details:${myCar.make}${myCar.model}(${myCar.year})`)
