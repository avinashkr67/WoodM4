$(document).ready(function () {
    $('.custom-toggle').hover(function () {
        $('.dropdown1').toggle();
    })
    
    $('.custom-toggle2').hover(function () {
        $('.dropdown2').toggle();
    })

    
    $('.toggle1').click(function () {
        $('.toggle_para1').toggle();
    })
    
    $('.toggle2').click(function () {
        $('.toggle_para2').toggle();
    })
    
    $('.toggle3').click(function () {
        $('.toggle_para3').toggle();
    })

    $('.menu-bar').click(function () {
        $('.nav-right').toggle();
    })



})