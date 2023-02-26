
// Toggle Playsegment //
let button1 = document.querySelector('.btn-gender');
let anim1 = bodymovin.loadAnimation({
		container: button1,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "img/toggle-gender.json"
});
anim1.goToAndStop(99, true);

$('.btn').on('click', function() {
  if( $('.btn-gender').hasClass('active')){
    $('.btn-gender').removeClass('active');
    anim1.playSegments([64,99], true);
  }
   else{
     $('.btn-gender').addClass('active');
     anim1.playSegments([30, 64], true);
   }
})






