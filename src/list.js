const itemListEl = document.getElementById('item-list');
const searchParams = new URLSearchParams(window.location.search);
const category = searchParams.get('category');



function incrementButtonClicked(increment, i, quantityEl, items) {
    items[i].quantity += increment;
    quantityEl.textContent = items[i].quantity;
    const newJsonArray = JSON.stringify(items);
    window.localStorage.setItem('items', newJsonArray);
}

function createList() {
    let items = [];
    const jsonArray = window.localStorage.getItem('items');
    if(jsonArray) {
        items = JSON.parse(jsonArray);
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
            const deleteButtonEl = document.createElement('button');
    
            const plusButtonTD = document.createElement('td');
            const minusButtonTD = document.createElement('td');
            const deleteButtonTD = document.createElement('td');
        
            plusButtonEl.textContent = '+';
            minusButtonEl.textContent = '-';
            deleteButtonEl.textContent = 'Delete';
        
            newRowEl.appendChild(plusButtonTD);
            newRowEl.appendChild(minusButtonTD);
            newRowEl.appendChild(deleteButtonTD);
        
            plusButtonTD.appendChild(plusButtonEl);
            minusButtonTD.appendChild(minusButtonEl);
            deleteButtonTD.appendChild(deleteButtonEl);
        
            plusButtonEl.addEventListener('click', function() {
                incrementButtonClicked(1, i, quantityEl, items);
            });
        
            minusButtonEl.addEventListener('click', function() {
                incrementButtonClicked(-1, i, quantityEl, items);
            });
    
            deleteButtonEl.addEventListener('click', function() {
                items.splice(i, 1);
                while(itemListEl.firstChild) {
                    itemListEl.removeChild(itemListEl.firstChild);
                }
                const newJsonArray = JSON.stringify(items);
                window.localStorage.setItem('items', newJsonArray);
                createList();
            });
        }
    }
}

createList();