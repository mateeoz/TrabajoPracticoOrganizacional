document.getElementById('search').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});