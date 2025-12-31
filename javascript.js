


const input = document.querySelector('input');
const btn = document.querySelectorAll('button');
const rez = document.querySelector('p');

//let expression = '';
let tempNum = '';

let problem = {
    prviBroj : 0,
    operater : '',
    drugiBroj : 0,
}

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
            case '.':
                input.value += b.textContent;
                tempNum += b.textContent;
                expression = input.value;
                break;
            case '/':
            case 'x':
            case '-':
            case '+':
                tempNum += b.textContent;
                //console.log(`tempnum je ${tempNum}`)
                problem.operater = tempNum.at(-1)
                //console.log(`operater je ${problem.operater}`)
                problem.prviBroj = Number(tempNum.slice(0,-1));
                //console.log(`prvi broj je ${problem.prviBroj}`)
                tempNum = '';
                input.value += b.textContent;
                //problem.operater = b.textContent;
                //expression = input.value
                break;
            case 'AC':
                input.value = '';
                //expression = input.value;
                rez.textContent = '';
                tempNum = '';
                problem.prviBroj = 0;
                problem.drugiBroj = 0;
                problem.operater = '';
                break;
            case '=':
                console.table(problem)
                problem.drugiBroj = Number(tempNum);
                tempNum = '';

                if (problem.operater == '/') {
                    let kalk = problem.prviBroj / problem.drugiBroj;
                    
                    rez.textContent = `solution : ${problem.prviBroj}/${problem.drugiBroj}=${kalk}`
                } else if (problem.operater == 'x') {
                    let kalk = problem.prviBroj * problem.drugiBroj;
                    
                    rez.textContent = `solution : ${problem.prviBroj}x${problem.drugiBroj}=${kalk}`
                } else if (problem.operater == '-') {
                    let kalk = problem.prviBroj - problem.drugiBroj;
                    
                    rez.textContent = `solution : ${problem.prviBroj}-${problem.drugiBroj}=${kalk}`
                } else {
                    let kalk = problem.prviBroj + problem.drugiBroj;
                    
                    rez.textContent = `solution : ${problem.prviBroj}+${problem.drugiBroj}=${kalk}`
                }
                input.value = ''
                


                break;
            
            default:
                input.value += 'invalid value bro'
                break;

        }}
    )
}



