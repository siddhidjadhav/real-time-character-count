const textAreaE1=document.getElementById("textarea");

const totalcounterE1=document.getElementById("total-counter");
const temp=document.getElementById("remaining");

textAreaE1.addEventListener("keyup",()=>{
updateCounter();
});
updateCounter()

function updateCounter()
{
    totalcounterE1.innerText=textAreaE1.value.length

    temp.innerText=textAreaE1.getAttribute("maxLength")-textAreaE1.value.length
}  