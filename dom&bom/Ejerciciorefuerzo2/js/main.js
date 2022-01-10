// 1- Add new List Item
let liNode = document.createElement('li');
let liTextNode = document.createTextNode('item 4');
liNode.appendChild(liTextNode);
document.getElementById('listToManage').appendChild(liNode);


console.log("Hello");
setTimeout(removeElement(), 2000);
console.log("Goodbye");

function removeElement() {
    let childNodesLength = document.getElementById('listToManage').children.length;
    itemsToDelete = []
    for (let i = 0; i < childNodesLength; i++) {
        if( i % 2 !== 0){
            itemsToDelete.push(document.getElementById('listToManage').children[i]);
        }
    }

    for (let i = 0; i < itemsToDelete.length; i++) {
        document.getElementById('listToManage').removeChild(itemsToDelete[i]);
        console.log(`Element LI ${i} (with text ${itemsToDelete[i].textContent}) deleted`);        
    }

    //let nodeToRemove = document.getElementById('listToManage').children[i];
    //document.getElementById('listToManage').removeChild(nodeToRemove);
    //console.log(`Element LI ${i} (with text ${nodeToRemove.textContent}) deleted`);
}