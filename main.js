let display = document.querySelector('.display')

function showInDisplay(x){
    console.log(x)
    display.value += x
}
function clearDisplay(){
    display.value = ''
}

function calculate(){
    if(display.value == ''){
        alert("expression empty")
    }
    else{
        display.value = eval(display.value)
    }
}