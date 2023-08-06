let totalGroceries = 0;
let totalQuantity = 0;

function addGrocery() {
    const groceryInput = document.getElementById('groceryName');
    const quantityInput = document.getElementById('quantity');
    const groceryList = document.getElementById('groceryList');
    const totalGroceriesElement = document.getElementById('totalGroceries');
    const totalQuantityElement = document.getElementById('totalQuantity');

    if (groceryInput.value.trim() === '' || !quantityInput.value) {
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="grocery-name" onclick="toggleCompleted(this.parentElement)">${groceryInput.value}</span>
        <span>${quantityInput.value}</span>
    `;
    groceryList.appendChild(listItem);

    totalGroceries++;
    totalQuantity += parseInt(quantityInput.value);

    totalGroceriesElement.textContent = totalGroceries;
    totalQuantityElement.textContent = totalQuantity;

    groceryInput.value = '';
    quantityInput.value = '';
    groceryInput.focus(); // Set focus back to the grocery input
}

function toggleCompleted(element) {
    const groceryName = element.querySelector('.grocery-name');
    const quantitySpan = element.querySelector('span:last-child');
    
    element.classList.toggle('completed');
    if (element.classList.contains('completed')) {
        totalQuantity -= parseInt(quantitySpan.textContent);
    } else {
        totalQuantity += parseInt(quantitySpan.textContent);
    }
    
    const totalQuantityElement = document.getElementById('totalQuantity');
    totalQuantityElement.textContent = totalQuantity;
}

function handleKeyUp(event) {
    if (event.key === 'Enter') {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput === document.activeElement) {
            addGrocery();
        }
    }
}

const groceryNameInput = document.getElementById('groceryName');
const quantityInput = document.getElementById('quantity');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', addGrocery);
quantityInput.addEventListener('keyup', handleKeyUp);
