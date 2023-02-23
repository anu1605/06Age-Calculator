var container;
var error;

document.getElementById('dob').addEventListener('blur',calcAge);


function calcAge(){ 

    var dateOfBirth = new Date(document.getElementById('dob').value);
    var today = new Date();

    var ty = today.getFullYear();


    if(today.getDate() < dateOfBirth.getDate()){
        document.getElementById('days').innerHTML = (today.getDate() - dateOfBirth.getDate() + 30);
    }
    else 
    document.getElementById('days').innerHTML = today.getDate() - dateOfBirth.getDate();


    if(today.getMonth() < dateOfBirth.getMonth()){
        document.getElementById('months').innerHTML = today.getMonth() - dateOfBirth.getMonth() +12 
        ty -= 1;

    }

    else document.getElementById('months').innerHTML = today.getMonth() - dateOfBirth.getMonth();

    document.getElementById('years').innerHTML = ty-dateOfBirth.getFullYear();

    return age
    
}

