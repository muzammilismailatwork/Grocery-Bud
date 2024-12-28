var groceryList = [];

function addItems(){
var inputItem = document.querySelector("input");
groceryList.push(inputItem.value);
inputItem.value = "";

var itemsList = document.querySelector("#groceryList");
itemsList.innerHTML = "";

groceryList.forEach(function(item, index){
    var itemsDiv = document.createElement("div");
    itemsDiv.setAttribute("id", index)
    itemsDiv.innerHTML = `<div class="row">
                    <div class="col-1"></div>
                    <div class="col-8">
                        <h6>${item}</h6>
                    </div>
                    <div class="col-1 text-end">
                        <button onclick="editItem(this)" class="icon"><i class="fa-regular fa-pen-to-square"></i></button>
                    </div>
                    <div class="col-1 text-start">
                        <button onclick="deleteItem(this)" class="icon"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="col-1"></div>
                </div>`
    itemsList.appendChild(itemsDiv);
})
}

function deleteItem(currentItem){
    groceryList.splice(currentItem.parentElement.parentElement.parentElement.id, 1)
    var itemsList = document.querySelector("#groceryList");
    itemsList.innerHTML = "";

groceryList.forEach(function(item, index){
    var itemsDiv = document.createElement("div");
    itemsDiv.setAttribute("id", index)
    itemsDiv.innerHTML = `<div class="row">
                    <div class="col-1"></div>
                    <div class="col-8">
                        <h6>${item}</h6>
                    </div>
                    <div class="col-1 text-end">
                        <button onclick="editItem(this)" class="icon"><i class="fa-regular fa-pen-to-square"></i></button>
                    </div>
                    <div class="col-1 text-start">
                        <button onclick="deleteItem(this)" class="icon"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="col-1"></div>
                </div>`
    itemsList.appendChild(itemsDiv);
})
}

function clearAllItems(){
    groceryList = [];
    var itemsList = document.querySelector("#groceryList");
    itemsList.innerHTML = "";
}

function editItem(currentItem){
    var inputItem = document.querySelector("input");
    var parentRow = currentItem.parentElement.parentElement.parentElement;
    var itemText = parentRow.querySelector("h6").innerHTML;
    inputItem.value = itemText;

    var addBtn = document.querySelector(".addBtn");
    addBtn.innerHTML = "Edit";
    addBtn.setAttribute("onclick", `editHandler(${parentRow.id})`); 
}

function editHandler(id){
    var inputItem = document.querySelector("input");
    var updatedItem = inputItem.value;
    
    // Update the groceryList with the new item text
    groceryList.splice(id, 1, updatedItem);

    var addBtn = document.querySelector(".addBtn");
    addBtn.innerHTML = "Add";
    addBtn.setAttribute("onclick", "addItems()");
    inputItem.value = "";

    // Re-render the grocery list
    var itemsList = document.querySelector("#groceryList");
    itemsList.innerHTML = "";

    groceryList.forEach(function(item, index){
        var itemsDiv = document.createElement("div");
        itemsDiv.setAttribute("id", index);
        itemsDiv.innerHTML = `<div class="row">
                    <div class="col-1"></div>
                    <div class="col-8">
                        <h6>${item}</h6>
                    </div>
                    <div class="col-1 text-end">
                        <button onclick="editItem(this)" class="icon"><i class="fa-regular fa-pen-to-square"></i></button>
                    </div>
                    <div class="col-1 text-start">
                        <button onclick="deleteItem(this)" class="icon"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="col-1"></div>
                </div>`;
        itemsList.appendChild(itemsDiv);
    });
}

