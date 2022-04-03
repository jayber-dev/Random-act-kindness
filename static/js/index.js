const heading = document.getElementById('main-head');
const paragraph = document.getElementById("paragraph")
const phrase = "Random act of kindness";
let i = 0;

function writer() {
    const timer = setTimeout(writer, 90)

    if (i < phrase.length) {
        heading.innerHTML += phrase[i];

    } else {
        clearTimeout(timer)
        setTimeout(() => {
            if (i > phrase.length) {
                heading.classList = "fade-out head-font w3-cell-middle w3-display-middle"
            }
        }, 0);
        setTimeout(() => {
            heading.classList = "w3-hide"
            i = "done"
        }, 2500);
        setTimeout(() => {
            if (i == "done")
                paragraph.classList = "w3-show w3-display-middle fade-in"
        }, 2500);
    }


    i++

    console.log(i)
}