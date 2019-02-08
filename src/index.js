const formEl = document.getElementById('category-form');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const newLocation = 'list.html?category=' + encodeURIComponent(formEl.category.value);
    // console.log(newLocation);
    window.location = newLocation;
});