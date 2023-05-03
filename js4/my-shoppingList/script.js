const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');  //or  const formBtn = document.querySelector('button');  ----itemFor is parent
let isEditMode = false;
/*
init()
onAddItemSubmit(e)
preventDefault()
removeItemFromStorage
getItemsFromStorage
checkIfItemExists
addItemToDOM
createButton
createIcon
*/

function addItemToDOM(item) {
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
  
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
  
    // Add li to the DOM
    itemList.appendChild(li);
  }
  
  function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
  }
  
  function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
  }



function checkIfItemExists(item){
    const itemsFromStorage=getItemsFromStorage();
    return itemsFromStorage.includes(item);

}
function getItemsFromStorage(){
        let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function removeItemFromStorage(item){
    let itemsFromStorage=getItemsFromStorage();
    //filter out items to be removed
    itemsFromStorage=itemsFromStorage.filter((i)=>i!==item);

    //re-store to local storage

    localStorage.setItem('items',JSON.stringify(itemsFromStorage));

}

function onAddItemSubmit(e)
{
e.preventDefault();
const newItem=itemInput.value;

//validate input
if(newItem===''){
    alert('please add an item');
    return;
}

//check for edit mode
if(isEditMode){
const itemToEdit=itemList.querySelector('.edit-mode');
removeItemFromStorage(itemToEdit.textContent);
itemToEdit.classList.remove('edit-mode');
itemToEdit.remove();
isEditMode=false;
}
else{
 if(checkIfItemExists(newItem)){
    alert('Item is already exists!!!');
    return;
 }
}

//create item to DOM


//Add item to DOM

}

function init()
{
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);
}
init();