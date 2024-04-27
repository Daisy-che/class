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
console.log(`is available for rent:${myCar.isAvailable}`)

//question1:2
class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.rentalName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
    calculateRentalDuration(){
        const durationInMillisecond=this.rentalEndDate-this.rentalStartDate;
        const durationInDays=math.floor(durationInMillisecond/(1000*60*60*24));
        return durationInDays
    }
}
const car1={make:"Toyota",model:"Camry"};
const startDate=new Date("2024-04-25")
const endDate=new Date("2024-04-25");
const durationDays=Rental.calculateRentalDuration();
console.log(`Rental duration:${durationDays} days`)
//3
class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.rentalName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
    calculateRentalDuration(){
        const startTimeStamp=this.rentalStartDate.getTime();
        const endTimeStamp=this.rentalEndDate.getTime();
        const durationInMillisecond=endTimeStamp-startTimeStamp;
        const durationDays=math.floor(durationInMillisecond/(1000*60*60*24));

    }
}
const carInfo={make:"Toyota",model:"Camry",year:2003};
const startDate1=new Date("2024-04-25")
const endDate1=new Date("2024-04-25");
const myRental=newRental(carInfo,"Morgan",startDate,endDate);
console.log(`Renter:${myRental.renterName}`)
console.log(`carDetail:${myRental.car.make},${myRental.car.mode},(${myRental.car.year})`);
console.log(`Rental duration:${myRental.calculateRentalDuration()}days`);




//question2
//1
class Question{
    constructor(text,option,correctAnswer){
        this.text=text;
        this.option=option;
        this.correctAnswer=correctAnswer;
    }
    checkAnswer(userAnswer){
        return userAnswer===this.correctAnswer;
    }
}
const QuestionText="What is the capital of Kenya"
const questionOption=["Nairobi","Kigali","Kampala"]
const correctAnswer="Nairobi"
console.log(`Is the answer corect! ${myQuestion.checkAnswer(userAnswer)}}`)
//2
class Quiz{
    constructor(){
        this.question=[]
        this.currentQuestionIndex=0;
        this.score=0;

    }
    addQuestion(question){
        this.question.push(question);

    }
    nextQuestion(){
        this.currentQuestionIndex++;

    }

    submitAnswer(userAnswer){
        const currentQuestion=this.question[this.currentQuestionIndex];
        if(currentQuestion.checkAnswer(userAnswer)){
            this.score++
        }
    }
}
class Question{
    constructor(text,correctAnswer){
        this.text=text;
        this.correctAnswer=correctAnswer;
    }
    checkAnswer(userAnswer){
        return userAnswer.toLowerCase()==this.correctAnswer.toLowerCase();
    }
}
const Quiz=new Quiz()
Quiz.addQuestion/new Question("what is the capital of France?");
Quiz.submitAnswer("Paris")
console.log(`Your score:${Quiz.score}`)
