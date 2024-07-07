document.querySelector('.open').addEventListener('click', ()=> {
    if(document.querySelector('.open').className === 'open'){
        document.querySelector('.header').classList.add('active')
    } else{
    document.querySelector('.header').classList.remove('active')

    }
})
document.querySelector('.close').addEventListener('click', ()=> {
    document.querySelector('.header').classList.remove('active')
})

