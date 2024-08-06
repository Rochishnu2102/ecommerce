$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".nav-items").toggleClass("hamMenu");
    })
    $(".nav-item-dropdown").click(function(){
        $(".dropdown-content").toggleClass("dropdown-content-toggle");
    })

    $(".nav-item-dropdown-reg").click(function(){
        $(".sign-up-dropdown").toggleClass("sign-up-toggle");
    })
})