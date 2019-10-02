//When window load
document.addEventListener('DOMContentLoaded', () => {
    let regexp = document.querySelector('#regexp');
    
    regexp.addEventListener('input', (event) => {
        console.log(event.target.value);
    })

    document.querySelector('.samples').oninput = event => {
        console.log(event.target.value);        
    }
});

