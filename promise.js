


// let tbody=document.getElementById('tbody')
// let User = ""
// async function getdata() {
//     let a=await axios('https://jsonplaceholder.typicode.com/users')
//     console.log(User);
//     render(a)
//     tbody.innerHTML = User   
// }
// function render(a) {
//     a.data.forEach(element => {
//         User+=`<tr><td>${element.id}</td><td>${element.username}</td><td> ${element.name}</td><td>${element.email}</td></tr>`
//     });
// }
// getdata()

let p=document.getElementById('p');
let stop=document.getElementById('stop');
let start=document.getElementById('start');
let count=0;
let hasinterval=false
let intervalID

let myinterval=setInterval(hello, 1000)
function hello() {
   p.textContent=count++
}

start.addEventListener('click',()=>{
    if (hasinterval) {
        return
    }
    intervalID=setInterval(()=>{
        count++
        p.innerHTML=count
    },1000);
    hasinterval=true

})
stop.addEventListener('click',()=>{
    clearInterval(myinterval)
    hasinterval=false
    
})
hello()








// .then(resp=>resp.json())
// .then(data=>{
//     data.forEach(element => {
//         console.log(element);
//         user.innerHTML+=`
//         <tbody>
//         <tr>
//         <td>${element.id}</td>
//         <td>
//         ${element.username}
//         </td>
//        <td> ${element.name}</td>
//        <td>${element.email}</td>
       
//        </tr>
// </tbody>
//         `
//     });

// })

    // .then(function (table) {
    //     let b=data.json()
    //     table.append(b)
    // }).catch(function () {
        
    // })





