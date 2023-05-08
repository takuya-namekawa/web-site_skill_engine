$('.accodion__question').on('click', function(){
  $(this).toggleClass('active')
  $(this).next().slideToggle(200);
});




const about__item = document.querySelectorAll('.about__item')
about__item.forEach(el => {
  gsap.from(el, .5, {
    opacity: 0,
    y: 20,
    // scale: .8,
    // ease: 'back',
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      // markers: true
    }
  })
})

const engineer__imgAria = document.querySelectorAll('.engineer__imgAria')
engineer__imgAria.forEach(el => {
  gsap.from(el, .5, {
    opacity: 0,
    y: 20,
    // scale: .8,
    // ease: 'back',
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      // markers: true
    }
  })
})

const circle__item = document.querySelectorAll('.circle__item')
circle__item.forEach(el => {
  gsap.from(el, .5, {
    opacity: 0,
    y: 20,
    // scale: .8,
    // ease: 'back',
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      // markers: true
    }
  })
})


var $pageTop = $('.page-top');
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on('click', function() {
  $('body,html').animate({
    scrollTop: 0
  }, 600);
  return false;
});

