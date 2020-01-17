const makeFlexItems = (num) => {
    for(let i = 0; i < num; i++) {
        let container = document.querySelector('.container')
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList.add('flex-item');
        div.appendChild(p);
        container.appendChild(div);
    }
}

const initBoxes = (num) => {
    // remove old boxes first
    if(document.querySelector('flex-item')) {
        removeBoxes();
    }
    makeFlexItems(num);
    const flexBoxes = document.querySelectorAll('.flex-item');
    return Array.prototype.slice.call(flexBoxes);

}

boxArray = initBoxes(4);


const makeRandomColor = () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
}


const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const randomSize = (element, min, max) => {
    element.style.width = `${randRange(min, max)}px`;
    element.style.height = `${randRange(min, max)}px`;
}



const changeColor = (element, color) => {
    element.style.backgroundColor = color;
}


boxArray.forEach((box, i) => {

    changeColor(box, makeRandomColor());


    const colourArray = box.style.backgroundColor.split("(")[1].split(")")[0].split(",")
    const nums = colourArray.map(num => parseInt(num, 10));
    const colouravg = nums.reduce((lastnum, num) => lastnum + num, 0);
    if(colouravg > 450) {
        box.firstElementChild.style.color = "black";
    } else {
        box.firstElementChild.style.color = "white";
    }
    box.firstElementChild.innerHTML = i + 1;
})


const removeBoxes = () => {
    boxArray.forEach((box) => {
        console.log(box)
        cnt.removeChild(box)
    })
}