// var sentence="My name 11 word word"
// var reg=/ is |\.is/ig;
// var reg1=/[a-z]/g;
// var reg1=/[A-Z]/g;
// var on="3/18/2022";
// |-or logic;
// .-durtai temdegtiig orlono
// g- taarch bui buh massiv bolgono
// reg.test(string)-boolean
// string.match(reg)- obj | array
// i-ignore the case
// ^-haaltan dotorh temdegtuudiig algasna [^a-z]
// \W - [^a-zA-Z0-9]special char haih pattern
// \w - [^a-zA-Z0-9]special char busad temdegtiig haina
// \S - [^]white spac-s busad temdegtiig
// \s - [^]white spac-g haina
// \d - [0-9]toog haina
// \D - [0-9]toonoos busad temdegtiig haina
// {,10} - 
// ^ - temdegt moriin ehleliig zaana
// % - temdegt moriin togsgoliig zaana
// + - 
// ?
// *
// 

//  var reg3=/a(?=[0-9])/
//  var reg2=/a(?=b)/ 
//  var reg=/a+/
//  var reg1=/^.{10}$/;
 
// // buh toog aguulsan massiv butsaa 
// function countCasa(sentence, word){
//      const regEx = new RegExp(word);
//     console.log(sentence.match(regEx));
// }

// хэрэглэгч бүртгэх форм хийх: овог нэр, утас, имайл, нууц үг.



const form=document.getElementById('form')
const username=document.getElementById('username')
const phoneNumber=document.getElementById('phone-number')
const eMail=document.getElementById('email')
const password=document.getElementById('password')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})
function checkInputs(){
    const usernameValue=username.value.trim();
    const phoneNumberValue=phoneNumber.value.trim();
    const eMailValue=eMail.value.trim();
    const passwordValue=password.value.trim();
    const usern=/\W/g;
    const numb=/[\d]/g;

   usernameValue === '' || usernameValue !== usern ? setErorFor(username, "username hooson baina.")
                                                   : setSuccessFor(username);
   phoneNumberValue === '' || phoneNumberValue !== numb ? setErorFor(phoneNumber)
                                                        : setSuccessFor(phoneNumber)            
   eMailValue === '' ? setErorFor(eMail)
                     : setSuccessFor(eMail)
   passwordValue === '' ? setErorFor(password)
                        : setSuccessFor(password)                                   
}

function setErorFor(input, massege){
   const formControl=input.parentElement;
   const small=formControl.querySelector('small')
   small.innerText=massege;
   formControl.className='account error'
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='account success'
}    
