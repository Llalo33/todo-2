const charge = [
    {
        text : 'first rule',
        keep : false
    },
    {
        text : 'second rule',
        keep : false
    },
    {
        text : 'third rule',
        keep : false
    }
]
const ol = document.querySelector('ol')
const input = document.querySelector('.input')


const render = (arr) => {
    ol.innerHTML = ''
    for (let trueCharge of arr) {
        const li = document.createElement('li')
        li.textContent = trueCharge.text.toUpperCase()
        const button = document.createElement('button')
        button.textContent = 'DELETE'
        li.appendChild(button)
        button.addEventListener('click', (e) => {
           const back = li.innerText
           remove(arr.findIndex(item => item.text === back)) 
        })
        ol.appendChild(li) 
    }
}


const remove = (index) => {
    charge.splice(index, 1)
    render(charge)
}

const addToo = message => {
    charge.push({text: message, keep: false})
    render(charge)
}
const block = document.querySelector('.block')

block.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value.trim() === '') {
        return false
    }else{
        addToo(input.value)
        input.value = ''
    }
})

render(charge)
