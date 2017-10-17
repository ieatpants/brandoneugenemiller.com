$('#control').animate({left: 0}, 1200);

          /* slide in */




    $("#accordion").accordion({collapsible: true, active:true,animate:{duration: 2000, easing: "easeOutBack"}, event:"click", heightStyle: "content", icons:
      {"header": "ui-icon-triangle-1-e","activeHeader": "ui-icon-triangle-1-s"
    },
  });

          /* scroll to top */

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-135
        }, 800, function(){
        window.location.hash = hash;
        });
       }
     });

           /*  smooth scroll */

     $(window).scroll(function() {
       var windscroll = $(window).scrollTop();
      if (windscroll >= 360) {
        $(".jump").css('display','block');
        } else {
          $(".jump").css('display','none');
        }
      });

           /*  nav active */

var aChildren = $("nav li").children();
var aArray = [];
for (var i=0; i < aChildren.length; i++) {
 var aChild = aChildren[i];
 var ahref = $(aChild).attr('href');
 aArray.push(ahref);
}

$(window).scroll(function(){
 var windowPos = $(window).scrollTop();

 var windowHeight = $(window).height();

 var docHeight = $(document).height();

 for (var i=0; i < aArray.length; i++) {
     var theID = aArray[i];
     var divPos = $(theID).offset().top-150;

     var divHeight = $(theID).height();

     if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
         $("a[href='" + theID + "']").addClass("nav-active");
     } else {
         $("a[href='" + theID + "']").removeClass("nav-active");
     }
 }

 if(windowPos + windowHeight == docHeight) {
     if (!$("nav li:last-child a").hasClass("nav-active")) {
         var navActiveCurrent = $(".nav-active").attr("href");
         $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
         $("nav li:last-child a").addClass("nav-active");
     }
 }
});

                    /* skills bar */

          var skillsDiv = $('#skills');

          $(window).on('load', function() {
          var winT = $(window).scrollTop(),
            winH = $(window).height(),
            skillsT = skillsDiv.offset().top;
          //if (winT + winH > skillsT) {
            $('.skills').each(function(){
              $(this).find('.bar').animate({
                width:$(this).attr('data-percent')
              },2200);
            });
          //}
          });

                    /* light box */


          lightbox.option({
            'resizeDuration': 700,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'fitImagesInViewport': true,
            'maxWidth': 1200,
            'maxHeight': 800,
            'imageFadeDuration': 600,
               });
