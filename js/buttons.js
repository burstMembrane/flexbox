const cnt = document.querySelector('.container');

const flexDirection = document.querySelector('.flexdirection')
const justifyContent = document.querySelector('.justifycontent')
const alignItems = document.querySelector('.alignitems');
const flexWrap = document.querySelector('.flexwrap');
const alignContent = document.querySelector('.aligncontent');
const randomSizes = document.querySelector('.randomsizes');
const addBox = document.querySelector('.addbox');
const removeBox = document.querySelector('.removebox');

let i = 0;


const stepThroughOpts = (button, property, opts) => {
    i = (i + 1) % opts.length;
    cnt.style[property] = opts[i];
    button.innerHTML = `${property}: ${opts[i]}`;
}


flexDirection.addEventListener('click', () => {
    const directions = ["row", "column", "column-reverse", "row-reverse"];
    stepThroughOpts(flexDirection, 'flex-direction', directions)

})

justifyContent.addEventListener('click', () => {
    const options = ["start", "center", "space-between", "space-around", "space-evenly", "flex-start", "flex-end", "left", "right", "normal"];
    stepThroughOpts(justifyContent, 'justify-content', options)

});

alignItems.addEventListener('click', () => {
    const options = ["stretch", "center", "start", "end", "flex-start", "flex-end", "baseline"];
    stepThroughOpts(alignItems, 'align-items', options)

});

flexWrap.addEventListener('click', () => {
    const options = ["nowrap", "wrap", "wrap-reverse"];
    stepThroughOpts(flexWrap, 'flex-wrap', options);
});

alignContent.addEventListener('click', () => {
    const options = ["start", "center", "space-between", "space-around"];
    stepThroughOpts(alignContent, 'align-content', options);
});


randomSizes.addEventListener('click', () => {
    boxArray.forEach((box) => {
        randomSize(box, 100, 200);
    })
});

addBox.addEventListener('click', () => {
    makeNewBox();
    console.log('added box')
})
removeBox.addEventListener('click', () => {
    removeLastBox();
    console.log('removed box')
})