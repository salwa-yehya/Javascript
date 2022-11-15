
// let array1 ={()}
let objectN={};

let rows =[]
index =0;
let username ,phonetype
let form_mobile =document.getElementById("mobForm")
form_mobile.addEventListener("submit", form_input)

function form_input(e){
    e.preventDefault()
    username = document.getElementById("a").value;
    // console.log(username )
    phonetype= document.getElementById("typeName").value;
    // console.log(phonetype)
    objectname(username , phonetype)
console.log(objectname(username , phonetype),"line18" )

}


function objectname (u , p){
objectN ={UserName:u,Phonetype:p } ;
rows.push(objectN)
console.log(rows,"rows");
return objectN

}
// console.log(rows,"rows");
// console.log(objectname(username , phonetype) )