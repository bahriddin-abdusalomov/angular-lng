function generateRandomValue() {
    return Math.floor(Math.random() * 100) + 1; 
}

function random(){
    var h4Element1 = document.getElementById('randomValue1');
    var h4Element2 = document.getElementById('randomValue2');
    
    h4Element1.innerText = generateRandomValue();
    h4Element2.innerText = generateRandomValue();
}

function check(){
    var h4Element1 = document.getElementById('randomValue1');
    var h4Element2 = document.getElementById('randomValue2');
    var inputElement = document.getElementById('result');

    var result = parseInt(h4Element1) + parseInt(h4Element2);
    var inputResult = parseInt(inputElement);

    if(result === inputResult){
            
    }
}