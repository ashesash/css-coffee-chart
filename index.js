const coffee_type = document.querySelector(".coffee-type");
const coffee_filling = document.querySelector(".filling");
const buttons = document.querySelectorAll("button");
let current_element = null;

const changeCoffeeType = (selected) => {
    if (current_element) {
        current_element.classList.remove("selected");
        coffee_filling.classList.remove(current_element.id);
    }
    current_element = selected;
    coffee_filling.classList.add(current_element.id);
    current_element.classList.add("selected");
    coffee_type.innerText = selected.innerText;
};

const setActiveType = (element) => {
    element.toggleClass("selected");
};

[...buttons].forEach((button) => {
    button.addEventListener("click", () => {
        changeCoffeeType(button);
        console.log("clicked")
    });
});