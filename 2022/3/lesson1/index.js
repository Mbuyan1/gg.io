//document.querySelector(".w").nextElementSibling
// const paragraph=document.querySelector('.paragraph');
// paragraph.innerHTML = "this is <em id=\"i\">text</em>from JS";
// paragraph.innerText = "this is <em id=\"i\">text</em>from JS";
// paragraph.textContent = "this is <em id=\"i\">text</em>from JS";

const textInput = document.querySelector("#text");
const color = document.querySelector("#color");
const container = document.querySelector(".container");


function insertTextValue(){
  
    container.innerHTML += `<p style="color: ${color.value}">${textInput.value}</p>`;
    textInput.value = '';
}


// let name='Naraa', age=19;
// age>18 ? console.log(name + " ta bol nasan hursen hun")
//        : console.log(name + " ta bol huuhed")

// var avgDun=77;
// switch(true){
//     case avgDun>=90 : console.log("ta bol onts surlagatan"); break;
//     case avgDun<90 && avgDun>=80 : console.log("ta bol sain surlagatan"); break;
//     case avgDun>=70 : console.log("ta bol dund surlagatan"); break;
//     default : console.log("Ta bol muu surlagatan")
// }