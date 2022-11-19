//function to create new items with specific positions

function newImage(url, left, bottom){
    let item = document.createElement('img')
    item.src = url
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}

//creating a function for newItem to create a new unit and add an event listener for each unit

function newItem(url, left, bottom){
    let unit = newImage(url, left, bottom)

    unit.addEventListener('dblclick', () => {
        unit.remove()
    })
}

//invoke the function for each of the 4) new images
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//invoke the function for each of the 3 items to be added
newItem('assets/sword.png', 500, 405)
newItem('assets/staff.png', 600, 100)
newItem('assets/sheild.png',165, 185)