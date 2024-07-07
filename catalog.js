const h3 = document.querySelectorAll('h3')
for (let i = 0; i < h3.length; i++) { 
    h3[i].addEventListener('click', () => { 
        for (let j = 0; j < h3.length; j++) { 
            h3[j].classList.remove('active')
        } 
        h3[i].classList.add('active') 
        isActiveSort.innerHTML = h3[i].innerHTML
    }) 
}

const h3Comp = document.querySelector('.comp')
h3Comp.addEventListener('click', ()=>{
    
})

