const title = document.getElementById('title-id');
const author = document.getElementById('author-id');
var collection = document.querySelector('.collection');
var myli = document.createElement('div');
const addbtn =document.getElementById('add-btn');



function addItem() {

    myli.innerHTML = `
<p>
${title.value}
</p>
<p">
 ${author.value}
</p>
<button id="remove-btn"><strong>Remove</strong></button>
<hr><br/><br/>`

collection.appendChild(myli);
console.log(myli);
}

addbtn.addEventListener('click',addItem)


