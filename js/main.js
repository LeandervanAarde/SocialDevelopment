$(function(){
    console.log('Main JQuery is linked and ready');
    //  Delay before function runs (the set timeout )
    setTimeout(() => {
        // prelaoder to fade out after the delay
        $('.preloader-container').delay(650).fadeOut(3000);
        $('.login-container').fadeIn(4000)
    }, 7000);
    // Sign up form function 

    $('#sign-up').on('click', () =>{
        console.log("sign up form clicked");
        $('.login-container').slideUp(800);
        setTimeout(() => {
           
            $('.reg-container').slideDown(800)
        }, 850);

    });

    $('#login-btn-2').on('click', () =>{
        console.log("login form clicked");
        $('.reg-container ').slideUp(800);
        setTimeout(() => {
           
        $('.login-container').slideUp(800);
            $('.login-container ').slideDown(800)
        }, 850);

    });
  

});

