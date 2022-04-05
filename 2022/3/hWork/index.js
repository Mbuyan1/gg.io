const image= document.getElementById("image_input");
var upload_image='';
image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        upload_image= reader.result;
        document.querySelector("#display-image").style.backgroundImage= `url(${upload_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    
})