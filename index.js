let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let flag = true

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = ' - ' + count
    if (flag) {
        countStr = count
        flag = false
    }
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
