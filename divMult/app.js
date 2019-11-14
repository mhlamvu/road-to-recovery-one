const button = document.getElementById('button-id')

button.addEventListener('click', addDiv)

function addDiv() {

    const newDiv = document.createElement('div')
    const newDivH3 = document.createElement('h3')
    const newDivH3Text = document.createTextNode('Secondary Display')

    // Reference nodes
    const parentDiv = document.querySelector('div .secondary-display')
    const childDiv = document.querySelector('div .secondary')


    newDivH3.appendChild(newDivH3Text)
    newDiv.appendChild(newDivH3)

    newDiv.className = "div-class secondary";

    // console.log(parentDiv)
    // console.log(childDiv)

    parentDiv.insertBefore(newDiv, childDiv)
}

addDiv()
