const itemListEl = document.getElementById('item-list');
const searchParams = new URLSearchParams(window.location.search);
const category = searchParams.get('category');

let items = [];
const jsonArray = window.localStorage.getItem('items');
if(jsonArray) {
    items = JSON.parse(jsonArray);
}

function incrementButtonClicked(increment, i, quantityEl) {
    items[i].quantity += increment;
    quantityEl.textContent = items[i].quantity;
    const newJsonArray = JSON.stringify(items);
    window.localStorage.setItem('items', newJsonArray);
}

for(let i = 0; i < items.length; i++) {
    if((!category) || category === items[i].category) {
        const newRowEl = document.createElement('tr');
        itemListEl.appendChild(newRowEl);
        
        const nameEl = document.createElement('td');
        const categoryEl = document.createElement('td');
        const descriptionEl = document.createElement('td');
        const quantityEl = document.createElement('td');
    
        nameEl.textContent = items[i].name;
        categoryEl.textContent = items[i].category;
        descriptionEl.textContent = items[i].description;
        quantityEl.textContent = items[i].quantity;
    
        newRowEl.appendChild(nameEl);
        newRowEl.appendChild(categoryEl);
        newRowEl.appendChild(descriptionEl);
        newRowEl.appendChild(quantityEl);
    
        const plusButtonEl = document.createElement('button');
        const minusButtonEl = document.createElement('button');
        const plusButtonTD = document.createElement('td');
        const minusButtonTD = document.createElement('td');
    
        plusButtonEl.textContent = '+';
        minusButtonEl.textContent = '-';
    
        newRowEl.appendChild(plusButtonTD);
        newRowEl.appendChild(minusButtonTD);
    
        plusButtonTD.appendChild(plusButtonEl);
        minusButtonTD.appendChild(minusButtonEl);
    
        plusButtonEl.addEventListener('click', function() {
            incrementButtonClicked(1, i, quantityEl);
        });
    
        minusButtonEl.addEventListener('click', function() {
            incrementButtonClicked(-1, i, quantityEl);
        });
    }
}