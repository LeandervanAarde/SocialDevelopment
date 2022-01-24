$(function(){
    console.log('Main JQuery is linked and ready');
    //  Delay before function runs (the set timeout )
    setTimeout(() => {
        // prelaoder to fade out after the delay
        $('.preloader-container').delay(650).fadeOut(3000);
        // $('.login-container').fadeIn(4000)
    }, 7000);

  

});

