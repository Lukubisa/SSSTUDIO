//smooth animation
$("#work").on('click', function(){
const img =$('#landing-images').position().top;

$('html, body').animate({
 scrollTop: img
}, 900)
});