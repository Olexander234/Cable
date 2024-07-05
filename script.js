 let cars2 = (message) => console.log(message)
cars2('Привіт JavaScript')



let label3() = (message) => console.log('Привіт, ${message}')
label3('Olexnader')

let mul = (n, m) => {
    console.log(n + m)
    console.log(n - m)
    console.log(n * m)


}
mul(2, 3)

let myAverageScore = (array) => {
    let sum = 0
    for (let i = 0; i < array.lenght; i++){
        sum += array[i]
    } 
    let average = sum / array.lenght
    if(average > 91){
        console.log('My average score: A')
    }
    else if(average > 81 && average < 90){
        console.log('My average score: B')
    }
    else if(avergae > 71 && average< 80){
        console.log('My average score: C')
    }
    else if(sum > 70){
        console.log('My average score: D')
    }
    return sum
}  
let score = [78, 100, 65, 28, 36, 97]
myAverageScore(scores)

const calculateDiscountedPrice = (price, discount, callback) =>{
    let discountPrice = price * (discount / 100)
    let finishedPrice = price - discountPrice
    callback(finishedPrice)
}
calculateDiscountedPrice(100, 15, (finishedPrice) => console.log(finishedPrice)) 


  let cars = {
    bmw:2017,
    audi:2023,
    user:'Olexander'
} 
console.log(cars)
console.log(cars.audi)
delete cars.bmw
console.log(cars)
cars.audi = 1993
console.log(cars)   



  let car {
    brand: Ferrari,
    model: spyder,
    year: old,
    color: blue
} 
 



 let bankAccount = {
    ownerName:'Olexander',
    accountNumber: 17,
    balance: 1600,
    deposit(numberToPush){
        this.balance += numberToPush;
        console.log('До балансу додано ${numberToPush}');
    },
    withdraw(numberToAdd){
        if(this.balance < numberToAdd){
            console.log("Cars")
        }else{
            this.balance -= numberToAdd;
           
            console.log('З балансу знято ${this.balance}');
            console.log('На рахунку - ${this.balance}');
        }
    },
};
let input = document.querySelector(".main__input")
let buttonToAdd = document.querySelector(".main__but");
let buttonToMInus = document.querySelector(".main__but-2");
buttonToPush.addEventListener('click', function () {
    let inputVal = input.value;
    let numberInput = parseInt
    if(numberInput.lenght <= 0){
        console.log("Нічого не введено");
      else{
            bankAccount.deposit(inputVal);
        }
        console.log(bankAccount);
    }
});

 







let user = {
    name: 'Olexander',
    email: '@.com',
    password: '6958683',
    login(){
        if(this.name === '' || !this.email.includes('@') || this.password.length < 6 ){
            console.log('Error')
        }
        else{
            console.log('Ви заєстровані')
        }
    }
}

function setInput(){
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value; 
    user.password = document.getElementById('password').value;
}
let button = document.querySelector('.main__but')
button.addEventListener('click', function(){
   setInput()
   user.login()
})







let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum



