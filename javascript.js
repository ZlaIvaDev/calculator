


const input = document.querySelector('input');
const btn = document.querySelectorAll('button');
let expression = ''

for(let b of btn) {
    b.addEventListener(
        'click', 
        (e) => 
            
            {

            console.log('clicked', b.textContent)
            switch(b.textContent) {
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '/':
            case 'x':
            case '-':
            case '+':
                input.value += b.textContent
                expression = input.value
                break;
            case 'AC':
                input.value = ''
                expression = input.value
                break;
            case '=':
                console.log(expression.split(''))
                console.log(expression)
                break;
            
            default:
                input.value += 'unknown'
                break;

        }}
    )
}

