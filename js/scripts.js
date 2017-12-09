var link=document.querySelector(".btn-write");
var popup=document.querySelector(".form-write-us");
var close=document.querySelector(".form-close");
var user=document.querySelector(".users-name");   
var form=document.querySelector(".form");
var password=document.querySelector(".users-email");
var storage=localStorage.getItem(".users-name");

        link.addEventListener("click", function(evt){
            evt.preventDefault();
            console.log("клик по ссылке");
            popup.classList.add("form-show");

            if (storage){
              user.value=storage;
              password.focus();
            }  else{                       
            user.focus();
            }
         });

        close.addEventListener("click", function(evt){
            evt.preventDefault();
          console.log("закрываем форму");
          form.classList.remove("form-show");
        });  

        form.addEventListener("submit", function(evt){
          if (!user.value || !password.value) {
           evt.preventDefault();
           console.log("нужно ввести логин и пароль");
         } else {
         localStorage.setItem("users-name", user.value);
         }
        });


