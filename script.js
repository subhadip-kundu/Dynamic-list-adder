// Pre-existing array of list items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6', 'Item 7', 'Item 8'];

let currentIndex = 0;

// Function to add a new list item on button click
function addListItem() {
    
    const list = document.querySelector('ol');

    if (currentIndex < items.length) {
        const listItem = document.createElement('li');
        listItem.textContent = items[currentIndex];
        list.appendChild(listItem);

        currentIndex++;
    } else {
        // Display a message if all items have been added
        alert('All items have been added.');
    }
}
