$(document).ready(function() {

	$("#currentContext").toggle();
	$("#aboutContext").toggle();
	$("#reportContext").toggle();
	$("#helpContext").toggle();

	$(".trigger").click(function() {
        $(".menu").toggleClass("active"); 
    });

    $(".fa-github").parent().click(function() {
        window.location.href = 'https://github.com/mwinata94';
    });

    $(".fa-linkedin").parent().click(function() {
       window.location.href = 'https://www.linkedin.com/in/michael-winata/'; 
    });

    $(".fa-list").parent().click(function() {
    	$(".menu").toggleClass("active");
    	$(".menu .btn")[1].classList.toggle("shift-top-right");
    	$(".menu .btn .fa")[1].classList.toggle("fa-list");
    	$(".menu .btn .fa")[1].classList.toggle("fa-arrow-left");
    	$(".menu .btn.trigger").toggle();
    	$("#currentContext").toggle();
    });

    $(".fa-info").parent().click(function() {
    	$(".menu").toggleClass("active");
    	$(".menu .btn")[2].classList.toggle("shift-top-right");
    	$(".menu .btn .fa")[2].classList.toggle("fa-info");
    	$(".menu .btn .fa")[2].classList.toggle("fa-arrow-left");
    	$(".menu .btn.trigger").toggle();
    	$("#aboutContext").toggle();
    });

    $(".fa-bug").parent().click(function() {
        $(".menu").toggleClass("active");
    	$(".menu .btn")[3].classList.toggle("shift-top-right");
    	$(".menu .btn .fa")[3].classList.toggle("fa-bug");
    	$(".menu .btn .fa")[3].classList.toggle("fa-arrow-left");
    	$(".menu .btn.trigger").toggle();
        $("#reportContext").toggle();
    });

    $(".fa-question").parent().click(function() {
    	$(".menu").toggleClass("active");
    	$(".menu .btn")[4].classList.toggle("shift-top-right");
    	$(".menu .btn .fa")[4].classList.toggle("fa-question");
    	$(".menu .btn .fa")[4].classList.toggle("fa-arrow-left");
    	$(".menu .btn.trigger").toggle();
        $("#helpContext").toggle();
    });

});