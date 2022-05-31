let calculoVacaciones = document.getElementById("vacationCalc")
calculoVacaciones.addEventListener("submit", calcExpensas)
function calcExpensas (e){
    e.preventDefault();
    let destiny = document.getElementById("destiny").value,
    budget = document.getElementById("budget").value;
    acomodation = document.getElementById("acomodation").value,
    transport = document.getElementById("transport").value,
    food = document.getElementById("food").value;

    let expensas = parseInt(acomodation) + parseInt(transport) + parseInt(food)
    let balance = budget - expensas
    
    console.log(destiny, budget, balance)
};
function UI (){
    
}