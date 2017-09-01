function validaScroll(){
  $(document).ready(function () {
    var posTopNew = $(window).scrollTop();
    var windH = $(window).height();
    var docuH = $(document).height();
    var flagScroll = ''//;

    if(parseInt(windH) === docuH) {
      nonScrollActive();
    } else {
      scrollActive();
    }

    function scrollActive() {
      if (flagScroll != 'ns') {
        $("#footer-scroll").slideDown("fast");
        $("#footer").slideUp("fast");
        flagScroll = 'ns';
      }
    }

    function nonScrollActive() {
      if (flagScroll != 's') {
        $("#footer-scroll").slideUp("fast");
        $("#footer").slideDown("fast");
        flagScroll = 's';
      }
    }

    $(window).scroll(function() {
      posTopNew = $(this).scrollTop();
      if(parseInt(windH) + parseInt(posTopNew) + 150 < docuH) {
        scrollActive();
      } else {
        nonScrollActive();
      }
    });

    $(window).resize(function() {
      windH = $(window).height();
      docuH = $(document).height();
    });

  });
}
