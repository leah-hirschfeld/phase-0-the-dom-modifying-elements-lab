main.remove();

const newHeader = document.createElement('h1'); 
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);

const newContent = document.createTextNode("Leah is the champion");
newHeader.appendChild(newContent);