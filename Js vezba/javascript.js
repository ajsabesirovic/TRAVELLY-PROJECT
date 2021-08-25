// var a=10;
// let b=5;
// const c=1;
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const form = document.querySelector(".form");
// console.log(form)

// form.onsubmit = function(e){
//     e.preventDefault();
//     if (password.value.length === 5){
//         alert("password je 5")
//     }
//     alert(`email: ${email.value} password: ${password.value}`)
//     console.log(email.value)
// }

// function changeRange() {
//     document.getElementById("rangeVal").innerHTML ="range je:" + document.getElementById("range").value
// }


// const a = ["google",1];
// console.log(a[0]);

// formDiv.innerHTML= button${a[0]}button

const a = ["wake up","teach","code"]
const list = document.querySelector(".lista");

function  showList(){

    let newList = ''
    
    for(let i=0; i<list.clientHeight; i++){
    
        newList += <li class='list-item'>${a[i]}</li>
    }
    list.innerHTML = newList;
}
showList();