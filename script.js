const input=document.querySelector('#input')
const btn=document.querySelector('#btn')
const result=document.querySelector('#result')

btn.addEventListener('click', ()=>{
    if(input.value === ' ') return
    createDeleteElements(input.value)
    input.value=' '
    
})

function createDeleteElements(value){
    const btn=document.createElement('button')
    const li=document.createElement('li')
    li.className='li'
    li.textContent=value


    btn.className='btn'
    btn.textContent='delete'
    li.appendChild(btn)

    btn.addEventListener('click', (e)=>{
    result.removeChild(li)
    })

    li.addEventListener('click', (e)=>{
        li.classList.toggle('li-active')
        })

    result.appendChild(li)
    }
