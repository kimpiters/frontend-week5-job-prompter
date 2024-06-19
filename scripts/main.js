//////////////////// Opdracht 1 ////////////////////

//// Opdracht 1a ////
console.log(`Opdracht 1a:
De afdeling sales heeft ${departments.marketing.numberOfEmployees} medewerkers.`);

//// Opdracht 1b ////
console.log(`Opdracht 1b:
Marketing is een leuke afdeling om te werken. ${departments.marketing.description}`);

//// Opdracht 1c ////
console.log(`Opdracht 1c:
De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers.`);

//// Opdracht 1d ////
console.log(`Opdracht 1d:
Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.jobs[1].description}`);

//////////////////// Opdracht 2 + 3 + 4 + 5 ////////////////////

// Prompt user for department and log
const inputDepartment = prompt(`Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]`);
switch (inputDepartment) {
    case `marketing`:
    case `sales`:
    case `customer-service`:
        console.log(`${inputDepartment} is een leuke afdeling om te werken. Er werken op dit moment ${departments[inputDepartment].numberOfEmployees} medewerkers.`);
        document.getElementById(`department-description`).textContent = departments[inputDepartment].description;
        break;
    default:
        console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen`);
        document.getElementById(`error-message`).textContent = `Ongeldige keuze. Probeer het opnieuw door de pagina te verversen`;
}

// Prompt user for job title and log
const inputTitle = prompt(`Je koos ${inputDepartment}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
0: ${departments[inputDepartment].jobs[0].title},
1: ${departments[inputDepartment].jobs[1].title},
2: ${departments[inputDepartment].jobs[2].title},
3: ${departments[inputDepartment].jobs[3].title}`);

if (Number(inputTitle) >= 0 && Number(inputTitle) < 4) {
    console.log("Je koos " + departments[inputDepartment].jobs[Number(inputTitle)].title + ". Een uitdagende rol!");
    document.getElementById('role-title').textContent = departments[inputDepartment].jobs[Number(inputTitle)].title;
    document.getElementById(`role-description`).textContent = departments[inputDepartment].jobs[Number(inputTitle)].description;
} else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen")
    document.getElementById(`error-message`).textContent = `Ongeldige keuze. Probeer het opnieuw door de pagina te verversen`;
}