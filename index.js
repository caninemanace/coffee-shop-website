document.addEventListener("DOMContentLoaded", () => {
    fetchData("hot"); 
});

document.getElementById("hot-btn").addEventListener("click", () => fetchData("hot"));
document.getElementById("iced-btn").addEventListener("click", () => fetchData("iced"));

function fetchData(type) {
    let url = type === "iced" ? "https://api.sampleapis.com/coffee/iced" : "https://api.sampleapis.com/coffee/hot";

    fetch(url)
        .then(response => response.json())
        .then(data => displayCoffeeList(data, type))
        .catch(error => console.error("Error fetching data:", error));
}

function displayCoffeeList(coffees, type) {
    const container = document.querySelector(".coffee-container");
    container.innerHTML = ""; 

    coffees.forEach(coffee => {
        const coffeeDiv = document.createElement("div");
        coffeeDiv.classList.add("coffee-item");
        coffeeDiv.innerHTML = `
            <div class="coffee-info">
                <h2>${coffee.title}</h2>
                <p>${coffee.description || "No description available."}</p>
                <p><strong>Ingredients:</strong> ${coffee.ingredients || "Unknown"}</p>
                <p><strong>Roast Level:</strong> ${coffee.roast || "Medium"}</p>
            </div>
            <div class="coffee-image">
                <img src="${coffee.image || 'placeholder.jpg'}" alt="${coffee.title}">
            </div>
        `;
        container.appendChild(coffeeDiv);
    });
}



