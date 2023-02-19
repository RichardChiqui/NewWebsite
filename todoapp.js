var buttonclicked = document.querySelector("button")
var Item = document.getElementById("AddItem")
var Due = document.getElementById("DueDate")



Item.addEventListener('keydown',e=>{

    if(e.key === "Enter"){
       AddTo(0)
     
    }
})
Due.addEventListener('keydown',e=>{
    if(e.key === "Enter"){
        AddTo(0)
    }
})
buttonclicked.addEventListener('click', function(){AddTo(0)})

function AddTo(test){

    if(Item.value===""){
        alert("Please enter something to do")
        return;
    }

    const itemVal = Item.value
    const due = Due.value
    if(due == null){
        due = ""
    }
    var finaltext = itemVal + "   " + due
    var tagText = document.createElement("li");
    var textDueVal = document.createTextNode(finaltext);
    tagText.appendChild(textDueVal);

    const dueDate = due;
    var tagDueDate = document.createElement("li");
    var textDueDate = document.createTextNode(dueDate);
    tagDueDate.appendChild(textDueDate);



    var element = document.getElementById("List");
    element.appendChild(tagText);


    clearInput();
  
}

function clearInput() {
    document.getElementById("AddItem").value = "";
    document.getElementById("DueDate").value = "";
  }

