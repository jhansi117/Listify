const form = document.querySelector("form");
const items  = document.getElementById("items");

form.addEventListener('submit',function(e){
    e.preventDefault();
    //getting user input
    const user_input = document.querySelector("#add-field").value;
    //adding item to the ul
    let new_item = document.createElement('li');
    new_item.innerHTML = user_input;
    items.appendChild(new_item);
    document.querySelector("#add-field").value = '';
})

//removing items
items.addEventListener('click', function(e){
    const item = e.target;
    if(item.tagName == "LI"){
        item.remove();
    }
})


