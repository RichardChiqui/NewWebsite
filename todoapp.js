const buttonclicked = document.querySelector("button")
const keypressed = document.getElementById("AddItem")

buttonclicked.addEventListener('click',e=>{
    const ToBeAdded = document.getElementById("AddItem").value
    const due = document.getElementById("DueDate").value
    whatbutton = item.id

    document.getElementById("item").innerText = val;

})
keypressed.addEventListener('keydown',e=>{
    if(e.code === "Enter"){
    const val = document.getElementById("AddItem").value
    const due = document.getElementById("DueDate").value
    whatbutton = item.id

    document.getElementById("item").innerText = val;
    }


})
