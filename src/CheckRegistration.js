import { employees, loggedIn$ } from './firebase.js';
let success;
function mult(x){
    return true;
}

function checkReg(uid) {     
    employees.forEach(emp => {
        emp.forEach(e =>{
            if (e.pos == uid) {
                success = true;
                console.log(success);
            } else {
                success = false;
                console.log(success);
            }
        })
    });    
}

export {checkReg, mult, success};