const toggleBtn = document.querySelector('.toggleBtn');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', ()=>{
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
    }
});