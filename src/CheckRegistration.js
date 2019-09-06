import { employees, loggedIn$ } from './firebase.js';

export function checkReg(uid) {
    employees.forEach(emp => {
        emp.forEach(e =>{
            if (e.pos == uid) {
                console.log('Success!');                
            }
        })

        
    });
}