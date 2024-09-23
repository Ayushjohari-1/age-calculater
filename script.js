
// Start here //

function calculator(){
    let datebirth = document.querySelector(".datebirth").value;
    let today = new Date();
    let birth = new Date(datebirth);
    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();

    document.querySelector('.result').innerText = age;
   }
   
   // end here //