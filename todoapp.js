const item = document.querySelector("button")
const item2 = document.getElementById("1")

item.addEventListener('click',e=>{
    const val = document.getElementById("1").value
    const due = document.getElementById("2").value
    whatbutton = item.id
    alert(val)
    document.getElementById("item").innerText = val;

})
item2.addEventListener('keydown',e=>{
    if(e.code === "Enter"){
        const val = document.getElementById("1").value
    const due = document.getElementById("2").value
    whatbutton = item.id
    alert(val)
    document.getElementById("item").innerText = val;
    }


})
