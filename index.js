// 1

// const a = 7 ;
// const b = 8;
// alert(a+b);


// 2-3-4-5-6

// let userName = ''
// let userSecondName = ''
// let userWorkingDay = ''
// let userSalary = ''

// while (
//     userName === '' ||
//     userSecondName === '' ||
//     userWorkingDay === '' ||
//     userSalary === ''
// ) {
//     userName = prompt('enter your name: ')
//     if(userName === 'Андрей' || userName === 'Иван' || userName === 'Айдар'){
//             while(userName === 'Андрей' || userName === 'Иван' || userName === 'Айдар'){
//                 alert('YOU ARE NOT ALLOWED!')
//                 userName = prompt('enter your name: ') 
//             }
//     }
//     if(userName === ''){
//         alert('INCORRECT! PLEASE ENTER YOUR NAME!')
//         while(userName === ''){
//             userName = prompt('enter your name: ') 
//         }
//     }
//     userSecondName = prompt('enter your second name: ')
//     if(userSecondName === ''){
//         alert('INCORRECT! PLEASE ENTER YOUR SECOND NAME!')
//         while(userSecondName === ''){
//             userSecondName = prompt('enter your second name: ')
//         }
//     }
//     userWorkingDay = prompt('enter count of your working days: ')
//     if(userWorkingDay === ''){
//         alert('INCORRECT! PLEASE ENTER COUNT OF YOUR WORKING DAYS!')
//         while(userWorkingDay === ''){
//             userWorkingDay = prompt('enter count of your working days: ')  
//         }
//     }
//     userSalary = prompt('enter your salary')
//     if(userSalary === ''){
//         alert('INCORRECT! PLEASE ENTER YOUR SALARY!')
//         while(userSalary === ''){
//             userSalary = prompt('enter your salary')
//         }
//     }
// }
// const resultSalary = (userSalary/24)*userWorkingDay
// alert('Your salary: '+ resultSalary.toFixed(0)) 

// const worker = {
//     name: userName,
//     secondName: userSecondName,
//     workingDay: userWorkingDay,
//     salary: userSalary,
// }

// for (const [key, value] of Object.entries(worker)) {
//     console.log(key + ':' + value.toLowerCase());
// }

// console.table(worker)



// 7

// function myFunction(a,b){
//     return a+b
// }
// console.log(myFunction(15,52))



// 8 

// let a
// let b
//  function myFunction(a,b){
//     let result=1
//     for(let i=0; i<b; i++){
//         result = result*a
//     }
//     return result;
//  }
//  console.log(myFunction(4,3))




// 9 

// let a = prompt('enter first number: ')
// if(isNaN(Number(a))) {
//     alert('incorrect input! Shoud be number!')
// }
// let b = prompt('enter second number: ')
// if(isNaN(Number(b))) {
//     alert('incorrect input! Shoud be number!')
// }
// let operator = prompt('enter mathematic operator: ')
// if(operator === '+'){
//    alert(Number(a) + Number(b))
// }
// else if(operator === '-'){
//     alert(Number(a) - Number(b))
//  }
//  else if(operator === '*'){
//     alert(Number(a) * Number(b))
//  }
//  else if(operator === '/'){
//     alert(Number(a) / Number(b))
//  }
// else{
//     alert('INCORRECT OPERATOR! PLEASE TRY AGAIN!')
// }



