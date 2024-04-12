document.addEventListener('DOMContentLoaded', ()=>{
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
            </div>
          </div>
        `
        output.appendChild(div)
     };
//Add event listner
// const btn = documento.getElementsByTagName(button)
// console.log(btn)
//   btn.addEventListener('click', ()=>{
//     alert ('Purchase item')})     

    function getPhones(){
        fetch("http://localhost:3000/phones")
        .then(response =>response.json())
        .then((data)=> data.forEach((phone)=>renderList(phone)))
    };
    getPhones()
})
