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
           if (input === '') {
            button === false
           }
        })
        ol.appendChild(li) 
    }
}