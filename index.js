document.addEventListener('DOMContentLoaded', ()=>{
  const baseUrl = "http://localhost:3000/phones"

     function renderList(phone){
        //console.log(phone)
        const output = document.getElementById('output')
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="card" style="width: 18rem;">
            <img src="${phone.img}" class="card-img-top" alt="...">  
            <div class="card-body">
              <h5 class="card-title">${phone.name}</h5>
              <p class="card-text">${phone.description}</p>
              <button id="purchase" class="btn btn-primary">${phone.price}</button>
              <button id="delete">Sold out</button>
            </div>
          </div>
        `
        div.querySelector('#purchase').addEventListener('click', ()=>{
            console.log('clicked')
        });
        div.querySelector('#delete').addEventListener('click', ()=>{
            div.remove()
           deletePhone(phone.id) 
        })
        output.appendChild(div)  

     };
// //Add event listner
 //const purchase = document.getElementById('purchase')
// console.log(purchase)

//   purchase.addEventListener('click', ()=>{
//     alert ('Purchase item')})     


//Make a get request to obtain data
function getPhones(){
        fetch(baseUrl)
        .then(response =>response.json())
        .then((data)=> data.forEach((phone)=>renderList(phone)))
    };
    getPhones()

//Make a patch request
// function updateData(){
//     fetch(baseUrl, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json' 
//         },
//         body:JSON.stringify()
//     })
//     .then(response=>response.json())
//     .then(data=>data)
// }




//Delete an item once its out of stock   
function deletePhone(id){
    fetch(`http://localhost:3000/phones/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response=>response.json())
    .then(phone=>console.log(phone))
}
deletePhone()



//Add event listners
const login = document.querySelector('.open-button')
//console.log(login)
login.addEventListener('click',()=>{
    document.getElementById('myForm').innerHTML=""
})


})












