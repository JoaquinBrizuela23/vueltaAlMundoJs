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
    
    UI()(destiny, budget, balance);
};
function UI (){
    let result = document.getElementById("result")
    let dataPrint = document.createElement("div")
    dataPrint.innerHTML = `
    <div class ="container-data row">
        <div class="col s4">
            <h6> ${destiny} </h6>
        </div>
        <div class="col s4">
            <h6> ${budget} </h6>
        </div>
        <div class="col s4">
            <h6> ${balance} </h6>
        </div>
    </div>`
    result.appendChild(dataPrint)
}