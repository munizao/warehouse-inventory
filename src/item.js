const formEl = document.getElementById('add-item-form');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    let quantity = parseInt(formEl.quantity.value);
    if(isNaN(quantity)) {
        quantity = 0;
    }
    const newItem = {
        name: formEl.name.value,
        category: formEl.category.value,
        description: formEl.description.value,
        quantity: quantity
    };

    let items = [];
    const jsonArray = window.localStorage.getItem('items');
    if(jsonArray) {
        items = JSON.parse(jsonArray);
    }
    items.push(newItem);
    console.log(items);
    const newJsonArray = JSON.stringify(items);
    window.localStorage.setItem('items', newJsonArray);
});