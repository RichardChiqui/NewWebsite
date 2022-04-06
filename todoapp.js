const item = document.querySelector("button")

item.addEventListener('click',e=>{
    const val = document.querySelector("input").value
    whatbutton = item.id
    document.getElementById("item").innerText = val;

})
