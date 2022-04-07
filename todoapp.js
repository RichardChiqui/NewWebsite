var buttonclicked = document.querySelector("button")
var keypressed = document.querySelector("input")

buttonclicked.addEventListener('click',e=>{
    const ToBeAdded = document.getElementById("AddItem").value
    const due = document.getElementById("DueDate").value

    var tag = document.createElement("span");
    var text = document.createTextNode(ToBeAdded);
    tag.appendChild(text);
    var element = document.getElementById("List");
    element.appendChild(tag);



})
keypressed.addEventListener('keyup',e=>{

    if(e.key === "Enter"){
        buttonclicked.click()

    }


})
