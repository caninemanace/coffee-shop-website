document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

/*let button1 = document.getElementById("btn-1").toLowercase();

button1.addEventListener("click",(e)=>{
    e.preventDefault
    if(button1 === "hot"){
        displayCoffeeList();
    }if(button1 === "iced"){
        displayIcedCoffeeList();
    }else{
        displayCoffeeList();
    }
});*/


function fetchData() {
    fetch("https://api.sampleapis.com/coffee/hot")
        .then(response => response.json())
        .then(data => displayCoffeeList(data)) 
        .catch(error => console.error("Error fetching data:", error));
}


function displayCoffeeList(coffees) {
    const container = document.querySelector(".coffee-container");
    
    container.innerHTML = ""; 

    coffees.forEach(coffee => {
        const coffeeDiv = document.createElement("div");
        coffeeDiv.classList.add("coffee-item");
        coffeeDiv.innerHTML = `
            <div class="coffee-info">
                <h2>${coffee.title}</h2>
                <p>${coffee.description || "No description available."}</p><br><br><br><br><br><br><br>
                <p><strong>Origin:</strong> ${coffee.origin || "Unknown"}</p><br><br><br><br><br><br>
                <p><strong>Roast Level:</strong> ${coffee.roast || "Medium"}</p>
            </div>
            <div class="coffee-image">
                <img src="${coffee.image || 'placeholder.jpg'}" alt="${coffee.title}">
            </div>
        `;
        container.appendChild(coffeeDiv);
    });
}

/*function fetchData() {
    fetch("https://api.sampleapis.com/coffee/iced")
        .then(response => response.json())
        .then(data => displayIcedCoffeeList(data)) 
        .catch(error => console.error("Error fetching data:", error));
}


function displayIcedCoffeeList(coffees) {
    const container = document.querySelector(".Iced-coffee-container");
    
    container.innerHTML = ""; 

    coffees.forEach(coffee => {
        const coffeeDiv = document.createElement("div");
        coffeeDiv.classList.add("coffee-item");
        coffeeDiv.innerHTML = `
            <div class="coffee-info">
                <h2>${coffee.title}</h2>
                <p>${coffee.description || "No description available."}</p><br><br><br><br><br><br><br>
                <p><strong>Origin:</strong> ${coffee.origin || "Unknown"}</p><br><br><br><br><br><br>
                <p><strong>Roast Level:</strong> ${coffee.roast || "Medium"}</p>
            </div>
            <div class="coffee-image">
                <img src="${coffee.image || 'placeholder.jpg'}" alt="${coffee.title}">
            </div>
        `;
        container.appendChild(coffeeDiv);
    });
}*/


