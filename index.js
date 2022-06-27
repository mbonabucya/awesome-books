const title = document.getElementById("title-id").value;
const author = document.getElementById("author-id").value;
var container = document.querySelector(".collection ");
var myli = document.createElement("div");
const addbtn = document.getElementById("add-btn");
const formel = document.querySelector('form');


function addItem(e) {
    e.preventDefault();
    
const title = document.getElementById("title-id").value;
const author = document.getElementById("author-id").value;
myli.innerHTML+=`        
<p>
${title} 
</p>
<p>
${author}
</p>
<button class="remove-btn"><strong>Remove</strong></button>
<hr>`
container.appendChild(myli);
}

formel.addEventListener('submit',addItem);