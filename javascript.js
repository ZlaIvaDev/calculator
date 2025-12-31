const input = document.querySelector('input');
const btn = document.querySelectorAll('button');

for(let b of btn) {
    b.addEventListener(
        'click',
        (e) => input.textContent = b.textContent
        
    )
}


