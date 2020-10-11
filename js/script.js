
$(document).ready(function () {
    $('.services-grid-container .services-items').click(function () {
        switchTabs(this, 'active', 'services-content');
    });
    function switchTabs(elem, switchClass, contentClass) {
        $(elem).addClass(switchClass).siblings().removeClass(switchClass);
        const tabsIndex = $(elem).index();
        $(`.${contentClass}`).removeClass(switchClass).eq(tabsIndex).addClass(switchClass);
    }
});

$(document).ready(function() {

    $(".our-work-images").hide();
    $(".our-work-images").slice(0,12).show();

  $('.btn-load-more').on('click', function(e) {
    e.preventDefault();
    $(e.currentTarget).attr('disabled', true);
    $('.loader').toggleClass('hide');

    setTimeout(function() {
      $('.loader').toggleClass('hide');
      $(e.currentTarget).attr('disabled', false);

    }, 700)
  });
});

    

    $(".btn-load-more").click(function(event){
        event.preventDefault();
        const imageType = $(".our-work-items.active").data("filter");
        setTimeout(function() {
        $(`.our-work-images${imageType}:hidden`).slice(0,12).show();
    }, 800)

    });



    $('.our-work-items').click(function() {
        $(this).addClass('active').siblings().removeClass("active");
        const imageType = $(this).data("filter");
        $(".our-work-images").hide();

        $(`.our-work-images${imageType}`).slice(0,12).show();

    });


   $('.our-work-images.on-hover').mouseover(function () {
       showToolTip(this, 'here')
   });

$('.our-work-images.on-hover').mouseout(function () {
   hideToolTip(this, 'here')
});


   function showToolTip(elem, className) {
       $(elem).addClass(className);
   }

   function hideToolTip(elem, className) {
   $(elem).removeClass(className);
   }



$('.slider-fb').hide();
$('.slider-fb.first:hidden').show();
$('.person').hide();
$('.person.first:hidden').show();
$('.logo').hide();
$('.logo.first:hidden').show();

$('.little-logo').click(switchPers);

function switchPers() {
    $('.little-logo').removeClass('little-logo-active');
    $(this).addClass('little-logo-active');
    let type = $(this).data('type');
    $('.slider-fb').hide();
    $(`.slider-fb.${type}:hidden`).show();
    $('.person').hide();
    $(`.person.${type}:hidden`).show()
    $('.logo').hide();
    $(`.logo.${type}:hidden`).show()
}

$('.right-arrow').click(function () {
    if ($('.little-logo.little-logo-active').next().hasClass("little-logo")) {
        let type = $('.little-logo.little-logo-active').next('.little-logo').data('type');
        $('.little-logo').removeClass('little-logo-active');
        $('.slider-fb').hide();
        $(`.slider-fb.${type}:hidden`).show();
        $('.person').hide();
        $(`.person.${type}:hidden`).show()
        $('.logo').hide();
        $(`.logo.${type}:hidden`).show()
        let elem = $(`[data-type = ${type}`);
        $(elem).addClass('little-logo-active');
    }
    else {
        $('.little-logo').removeClass('little-logo-active');
        $('.little-logo').first().addClass("little-logo-active");
        let type = $('.little-logo.little-logo-active').data('type');
        $('.slider-fb').hide();
        $(`.slider-fb.${type}:hidden`).show();
        $('.person').hide();
        $(`.person.${type}:hidden`).show()
        $('.logo').hide();
        $(`.logo.${type}:hidden`).show()
    }
});


var count=0;
btn.onclick=function(){
    count++;
    if(count>1)
        document.getElementById('btn').style.display='none';
};