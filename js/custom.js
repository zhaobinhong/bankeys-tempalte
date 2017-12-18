// Initialisation for all page


$('#navigation').mobileMenu({
    triggerMenu:'#navigation-toggle',
    subMenuTrigger: ".sub-nav-toggle",
    animationSpeed:500  
});

$('.btn').click(function (e){
   	$(this).addClass('btn-activated');
    function second_passed() {
        $('.btn').removeClass('btn-activated');

    }
    setTimeout(second_passed, 500);
});

$('.btn-form').one('inview', function (event, visible) {
    if (visible == true) {
       	$(".btn-form").addClass('amin scale');
    }
});

//Modernizr touch detect
    Modernizr.load({
                  test: Modernizr.touch,
                  yep :['css/touch.css?v=1'],
                  nope: [] 
    });

// Scroll to top and fixed top nav
var $block =$('<div/>',{
    'class':'top-scroll'
    })
  .append('<a href="#"/>')
  .hide()
  .appendTo('body')
  .click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    
    
//initialization

var $window = $(window);

  
  if ($window.scrollTop() > 35) {
      showElem();
      
    } else {
      hideElem();
    }


//handlers    

  
  $window.scroll(function () {    
    
      if ($(this).scrollTop() > 35) {
        showElem();
        
      } else {
        hideElem();
      }
    
  });
//functions
function hideElem(){
  
    $('.navigation-front').removeClass('fixed-pos');
    $block.fadeOut();
  }
  
function showElem(){
  
    $('.navigation-front').addClass('fixed-pos');
    $block.fadeIn();
  }

var $head = $( '.navigation-front' );
      
      $( '.waypoint' ).each( function(i) {
        var $el = $( this ),
          animClassDown = $el.data( 'animateDown' ),
          animClassUp = $el.data( 'animateUp' );

        $el.waypoint( function( direction ) {
          if( direction === 'down' && animClassDown ) {
            $head.attr('class', 'navigation-front fixed-pos ' + animClassDown);
          }
          else if( direction === 'up' && animClassUp ){
            $head.attr('class', 'navigation-front fixed-pos ' + animClassUp);
          }
        });
      
      });


      //color pallet
      $('#control').click( function(e)
      {
        e.preventDefault();
        $("#style_panel").toggleClass("opens"); 
        })
        
        var $body = $('body');
        
        $('#color a').click( function(e)
        {
          e.preventDefault();
          $body.removeClass("pattern-one pattern-two pattern-three").addClass($(this).attr('class'));
          $("#style_panel").toggleClass("opens"); 
          $('#color a').removeClass('activ');
          $(this).addClass('activ'); 
        })
        
        $('#background a').click( function(e)
        {
          e.preventDefault();
          $body.removeClass("boxed").addClass($(this).attr('class'));
          $("#style_panel").toggleClass("opens");
          $('#background a').removeClass('activ');
          $(this).addClass('activ');          
        }) 

// <=== end all

// Initialisation for home page
if (Modernizr.touch){
    function initHome(){

        // Add click event for enable gallery popup
            $('#gallery').on( 'click', '.swipebox', function(){
                $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
            })

             $("#donutchart1").donutchart({'size': 160, 'fgColor': '#26455f', 'bgColor':'#93a2af','textsize': 28, 'donutwidth': 30 });
                  $("#donutchart1").donutchart("animate");

              $("#donutchart2").donutchart({'size': 160, 'fgColor': '#f25549', 'bgColor':'#f9aaa4', 'textsize': 28, 'donutwidth': 30 });
                  $("#donutchart2").donutchart("animate");
    }
}

else{

function initHome(){

			//Inview animation for promobox
            $('.promo').one('inview', function (event, visible) {
                if (visible == true) {
                  $(".promo").addClass('animate');
                  }
            });

             $('.promo-btn').one('inview', function (event, visible) {
                if (visible == true) {
                  $(".promo-btn").addClass('amin');
                  }
            });

            //Inview animation for service icon
            $('.icon-cog').one('inview', function (event, visible) {
                if (visible == true) {
                  $(".icon-cog").addClass('amin');
                  $(".icon-users").addClass('amin');
                  }
            });

            $('.icon-cloud').one('inview', function (event, visible) {
                if (visible == true) {
                  $(".icon-cloud").addClass('amin'); //animate bounceIn
                  $(".icon-brench").addClass('amin');
                  }
            });

            //Inview animation for client says
            $('.says-one').one('inview', function (event, visible) {
                if (visible == true) {
                  $(".says-one").addClass('animate');
                  $(".says-two").addClass('animate');
                  $(".says-three").addClass('animate');
                  }
            });

            //Inview animation for progress bar
			     $('#donutchart1').one('inview', function (event, visible) {    
                if (visible == true) {
                  $("#donutchart1").donutchart({'size': 160, 'fgColor': '#26455f', 'bgColor':'#93a2af','textsize': 28, 'donutwidth': 30 });
                  $("#donutchart1").donutchart("animate");
                  $(".progress-list").addClass('animate');
                  }
            });

            $('#donutchart2').one('inview', function (event, visible) {
                if (visible == true) {
                  $("#donutchart2").donutchart({'size': 160, 'fgColor': '#f25549', 'bgColor':'#f9aaa4', 'textsize': 28, 'donutwidth': 30 });
                  $("#donutchart2").donutchart("animate");
                  }
            });

            // Add click event for enable gallery popup
            $('#gallery').on( 'click', '.swipebox', function(){
                $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
            })

}
}

// <=== end home page


// Initialisation for banner revolution
function initSliderRev(){
			$('.banner').revolution({
                delay:9000,
                startwidth:1170,
                startheight:590,
                autoHeight:'off',
                navigationType:"none",

                soloArrowLeftHalign:"center",
                soloArrowLeftValign:"bottom",
                soloArrowLeftHOffset:-20,
                soloArrowLeftVOffset:15,
         
                soloArrowRightHalign:"center",
                soloArrowRightValign:"bottom",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:15,

                hideThumbs:'none'
            });
}



// <=== end banner revolution

// Initialisation for banner revolution
function initSliderRevFull(){
      $('.banner').revolution({
                delay:9000,
                startwidth:1170,
                startheight:830,
                autoHeight:'off',
                navigationType:"none",

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:0,
                soloArrowLeftVOffset:60,
         
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:0,
                soloArrowRightVOffset:60,

                hideThumbs:'none'
            });
}

// <=== end banner revolution

// Initialisation for banner onebyone
function initSliderOne(){
	   $('#banner').oneByOne({
              className: 'oneByOne1',
              sliderClassName: 'oneByOne_item',
              easeType: 'random',
              showArrow: true,
              autoHideButton: false,
              showButton: false
    });
}

// <=== end banner onebyone

// Initialisation for banner bxSlider
function initBxSlider(){
	$('.bxslider').bxSlider({
            pager:false,
            prevText:'',
            nextText:''
    });
}

// <=== end banner bxSlider

// Initialisation for banner flexslider
function initFlexSlider(){
	$('.flexslider').flexslider({
              controlNav: false,
              prevText: "",
              nextText: ""
    });
}

// <=== end banner flexslider

// Initialisation for about page
function initAbout(){

				//init employee sliders
				          var mySwiper = new Swiper('.swiper-container',{
                    loop:true,
                    slidesPerView:3
                  })
                  $('.arrow-left').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipePrev()
                  })
                  $('.arrow-right').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipeNext()
                  })

                  if ($(window).width() <  744 & $(window).width() >431){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();
                    
                    } else
                    if ($(window).width() < 430){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.reInit();
                    
                    }else{
                        mySwiper.params.slidesPerView=3;
                        mySwiper.reInit();
                    }

                    $(window).resize(function(){
                        if ($(window).width() <  744 & $(window).width() >431){
                             mySwiper.params.slidesPerView=2;
                             mySwiper.reInit();
                        
                        } else
                        if ($(window).width() < 430){
                             mySwiper.params.slidesPerView=1;
                             mySwiper.reInit();
                        
                        }else{
                        mySwiper.params.slidesPerView=3;
                        mySwiper.reInit();
                    }

                    });

                //init staff-say slider
                 $('.client-says').bxSlider({
                    pager:false,
                    prevText:'',
                    nextText:'',
                    minSlides:1,
                    maxSlides:1,
                    slideMargin: 0 
                });

                /* interactive dashbord */
                function countValue(value, result, target, duration) {
                    if(duration) {
                        var count = 0;
                        var speed = parseInt(duration / value);
                        var interval = setInterval(function(){
                            if(count - 1 < value) {
                                target.html(count);
                            }
                            else {
                                target.html(result);
                                clearInterval(interval);
                            }
                            count++;
                        }, speed);
                    }
                    else {
                        target.html(result);
                    }
                }

                $('.achievement-item').one('inview', function (event, visible) {
                    if (visible == true) {
                       $('.achievements').find('.achive-count').each(function() {
                            var container = $(this);
                            var value = container.attr('data-value');
                            var result = container.attr('data-result');
                            
                            countValue(value, result, container, 1500);
                        });
                      }
                });

                //Inview animation for staff slider
                $('.slider-wrapper').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".front-employee-first").addClass('animate');
                      $(".front-employee-second").addClass('animate');
                      $(".front-employee-third").addClass('animate');
                    }
                }); 

                //Inview animation for stuff says
                $('.client-testimonial .works-decript').one('inview', function (event, visible) {    
                  if (visible == true) {
                    $(".client-testimonial .works-decript").addClass('animate');
                    }
                });

                //Inview animation for achive stat
                $('.achievement-item').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".achievement-item").addClass('amin');
                      }
                });

                //Inview animation for promobox
                $('.promo').one('inview', function (event, visible) {
	                if (visible == true) {
	                  $(".promo").addClass('animate');
	                  }
	            });

                $('.promo-btn').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".promo-btn").addClass('amin');
                      }
                });   
}
// <=== end about page


// Initialisation for blog one page
function initBlog1(){
				$('#filters a').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault();
                /* destroy jpages */
                $(".pagination").jPages("destroy"); 
                    
                $('#filters a').removeClass('active-filter');
                $(this).addClass('active-filter');
                //get the id of the clicked link(which is equal to classes of our content
                
                var filter = $(this).attr('id');
                
                //show all the list items(this is needed to get the hidden ones shown)
                $(".blog-posts article").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                if ( filter.toLowerCase()!=='all'){
                    $('.blog-posts article:not(.' + filter + ')').hide();
                    }

                $(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:3,
                  animation: "scaleIn"
                });

                });

                $(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:3,
                  animation: "scaleIn"
                });
}
// <=== end blog one page

// Initialisation for blog two page
function initBlog2(){
				$(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:4,
                  animation: "scaleIn"
                });

                //Flikr

                $('#flickr').jflickrfeed({
                    limit:          12,
                    qstrings:       {id: '52617155@N08'},
                    itemTemplate:   '<li><a href="{{image_b}}" data-rel="colorbox"><img src="{{image_s}}" alt="{{title}}" /><span class="hover-effect"></span></a></li>'
                    },function(data){$('#flickr a').colorbox({'data-rel':'colorbox'});}
                );
}
// <=== end blog two page

// Initialisation for blog three page
function initBlog3(){
				$(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:8,
                  animation: "scaleIn"
                });

                $('#flickr').jflickrfeed({
                    limit:          12,
                    qstrings:       {id: '52617155@N08'},
                    itemTemplate:   '<li><a href="{{image_b}}" data-rel="colorbox"><img src="{{image_s}}" alt="{{title}}" /><span class="hover-effect"></span></a></li>'
                    },function(data){$('#flickr a').colorbox({'data-rel':'colorbox'});}
                );
}
// <=== end blog three page

function initBlogAudio(){
        $('#filters a').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault();
                /* destroy jpages */
                $(".pagination").jPages("destroy"); 
                    
                $('#filters a').removeClass('active-filter');
                $(this).addClass('active-filter');
                //get the id of the clicked link(which is equal to classes of our content
                
                var filter = $(this).attr('id');
                
                //show all the list items(this is needed to get the hidden ones shown)
                $(".blog-posts article").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                if ( filter.toLowerCase()!=='all'){
                    $('.blog-posts article:not(.' + filter + ')').hide();
                    }

                $(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:4,
                  animation: "scaleIn"
                });

                });

                $(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:4,
                  animation: "scaleIn"
                });
}
// <=== end blog one page

function initBlogVideo(){
        $('#filters a').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault();
                /* destroy jpages */
                $(".pagination").jPages("destroy"); 
                    
                $('#filters a').removeClass('active-filter');
                $(this).addClass('active-filter');
                //get the id of the clicked link(which is equal to classes of our content
                
                var filter = $(this).attr('id');
                
                //show all the list items(this is needed to get the hidden ones shown)
                $(".blog-posts article").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                if ( filter.toLowerCase()!=='all'){
                    $('.blog-posts article:not(.' + filter + ')').hide();
                    }

                $(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:6
                });

                });

                $(".pagination").jPages({
                  containerID: "blog-posts",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:6
                });
}
// <=== end blog one page

// Initialisation for contact page
function initMap(){
                    var mapOptions = {
                        scaleControl: true,
                        center: new google.maps.LatLng(40.717729,-74.006648),
                        zoom: 11,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: map.getCenter()
                    });

                    var markerB = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(40.772898,-73.936878)
                    });
                    var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent('<b>My Adress:</b><br> V101 West Street<br> New York 10019');
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

}
// <=== end contact page


// Initialisation for random gallery page
function initGalleryR(){

				// Add click event for enable gallery popup
				$('#gallery').on( 'click', '.swipebox', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                });


                $('#filters a').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault(); 
                    
                $('#filters a').removeClass('active-filter');
                $(this).addClass('active-filter');
                //get the id of the clicked link(which is equal to classes of our content
                
                var filter = $(this).attr('id');
                
                //show all the list items(this is needed to get the hidden ones shown)
                $("#gallery a").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                if ( filter.toLowerCase()!=='all')
                    $('#gallery a:not(.' + filter + ')').hide();
                });
}
// <=== end random gallery page

// Initialisation for col2 gallery page
function initGallery2Col(){

				//Button for social share
				        $('.share-btn').click(function (e){
                     e.preventDefault();
                     $(this).parent().find('.addthis_toolbox').show(300);
                })
                
				// Popup for image items
                $('.swipebox').swipebox();
                $('.gallery-item .image-title').swipebox();
               
                // Add click event for enable gallery popup
                $('.gallery-item').on( 'click', '.swipebox', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })

                $('.gallery-item').on( 'click', '.image-title', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })


                $('#filters a').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault();
                /* destroy jpages */
                $(".pagination").jPages("destroy"); 
                    
                $('#filters a').removeClass('active-filter');
                $(this).addClass('active-filter');
                //get the id of the clicked link(which is equal to classes of our content
                
                var filter = $(this).attr('id');
                
                //show all the list items(this is needed to get the hidden ones shown)
                $(".column-gallery li").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                if ( filter.toLowerCase()!=='all'){
                    $('.column-gallery li:not(.' + filter + ')').hide();
                    }
				
				//Re-init pagination
                $(".pagination").jPages({
                  containerID: "column-gallery",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:12,
                  animation: "scaleIn"
                });

                });
				
				//Init pagination
                $(".pagination").jPages({
                  containerID: "column-gallery",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:12,
                  animation: "scaleIn"
                });
}
// <=== end col2 gallery page

// Initialisation for col2 gallery page with Isotop
function initGallery2ColAnimated(){

        //Button for social share
                $('.share-btn').click(function (e){
                     e.preventDefault();
                     $(this).parent().find('.addthis_toolbox').show(300);
                })
                
        // Popup for image items
                $('.swipebox').swipebox();
                $('.gallery-item .image-title').swipebox();
               
                // Add click event for enable gallery popup
                $('.gallery-item').on( 'click', '.swipebox', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })

                $('.gallery-item').on( 'click', '.image-title', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })

                // filter items when filter link is clicked
                $('#filters a').click(function(){
                  $('#filters a').removeClass('active-filter');
                  $(this).addClass('active-filter');
                  var selector = $(this).attr('data-filter');
                  $container.isotope({ filter: selector });
                  return false;
                });

                var $container = $('#column-gallery');
                // initialize isotope
                $container.isotope({
                  // options
                  itemSelector : '.gallery-item',
                  layoutMode : 'masonry'
                });

                $(window).load( function () {
                  $("#all").trigger("click");
                });

                
}
// <=== end col2 gallery page

// Initialisation for col3 gallery page
function initGallery3Col(){
				// Popup for image items
				$('.swipebox').swipebox();
                $('.gallery-item .image-title').swipebox();
               
                // Add click event for enable gallery popup
                $('.gallery-item').on( 'click', '.swipebox', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })

                $('.gallery-item').on( 'click', '.image-title', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })


                $('#filters a').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault();
                /* destroy jpages */
                $(".pagination").jPages("destroy"); 
                    
                $('#filters a').removeClass('active-filter');
                $(this).addClass('active-filter');
                //get the id of the clicked link(which is equal to classes of our content
                
                var filter = $(this).attr('id');
                
                //show all the list items(this is needed to get the hidden ones shown)
                $(".column-gallery li").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                if ( filter.toLowerCase()!=='all')
                    $('.column-gallery li:not(.' + filter + ')').hide();

                //Re-init pagination
                $(".pagination").jPages({
                  containerID: "column-gallery",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:9,
                  animation: "scaleIn"
                });
                });

				//Init pagination
                $(".pagination").jPages({
                  containerID: "column-gallery",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:9,
                  animation: "scaleIn"
                });
}
// <=== end col3 gallery page

// Initialisation for col3 gallery page
function initGallery3ColAnimated(){
        // Popup for image items
        $('.swipebox').swipebox();
                $('.gallery-item .image-title').swipebox();
               
                // Add click event for enable gallery popup
                $('.gallery-item').on( 'click', '.swipebox', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })

                $('.gallery-item').on( 'click', '.image-title', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                })


                // filter items when filter link is clicked
                $('#filters a').click(function(){
                  $('#filters a').removeClass('active-filter');
                  $(this).addClass('active-filter');
                  var selector = $(this).attr('data-filter');
                  $container.isotope({ filter: selector });
                  return false;
                });

                var $container = $('#column-gallery');
                // initialize isotope
                $container.isotope({
                  // options
                  itemSelector : '.gallery-item',
                  layoutMode : 'fitRows'
                });

                // $( "#all" ).on( "click", function() {
                //   alert("kaka");
                // });

                $(window).load( function () {
                  $("#all").trigger("click");
                });
}
// <=== end col3 gallery page


// Initialisation for element page
function initElement(){
			$('#accordion').collapse();
            $('#accordion-two').collapse();
            $(".alert").alert();

            $('#firstTab a').click(function (e) {
              e.preventDefault()
              $(this).tab('show')
            })

            $('#secondTab a').click(function (e) {
              e.preventDefault()
              $(this).tab('show')
            })

            $('.details-link').tooltip();
}
// <=== end element page

// Initialisation for services page
function initService(){

                 //Inview animation for progress bar
                $('#donutchart1').one('inview', function (event, visible) {    
                    if (visible == true) {
                      $("#donutchart1").donutchart({'size': 160, 'fgColor': '#26455f', 'bgColor':'#93a2af','textsize': 28, 'donutwidth': 30 });
                      $("#donutchart1").donutchart("animate");
                      }
                });

                $('#donutchart2').one('inview', function (event, visible) {
                    if (visible == true) {
                      $("#donutchart2").donutchart({'size': 160, 'fgColor': '#f25549', 'bgColor':'#f9aaa4', 'textsize': 28, 'donutwidth': 30 });
                      $("#donutchart2").donutchart("animate");
                      }
                });

                // Add click event for enable gallery popup
                $('#gallery').on( 'click', '.swipebox', function(){
                    $('#swipebox-overlay').removeClass('anim-hide').addClass('anim-show');
                });


                //Create pie view diagram
                $("#wijpiechart").wijpiechart({
                    radius: 100,
                    hint: {
                        compass: "east",
                        offsetX : -10, 
                        offsetY : -35,
                        content: function () {
                            return this.data.label + " : " + Globalize.format(this.value / this.total, "p2");
                            
                        }
                    },
                    header: {
                        text: "Lorem ipsum dolor"
                    },
                    width: 320, 
                    height: 305, 
                    legend: { 
                            visible: true, 
                            compass: "south", 
                            orientation: "horizontal",
                            textMargin: {left: 15, top: 5, right: 15, bottom: 0 }
                        }, 
                    seriesList: [{
                        label: "feature 1",
                        data: 55,
                        offset: 2
                    }, {
                        label: "feature 2",
                        data: 25,
                        offset: 2
                    }, {
                        label: "feature 3",
                        data: 20,
                        offset: 2
                    }],
                    seriesStyles: [{
                        fill: "180-rgb(210,228,244)", 
                        stroke: "rgb(210,228,244)", 
                        "stroke-width": 1.5
                    }, {
                        fill: "90-rgb(158,180,199)", 
                        stroke: "rgb(158,180,199)", 
                        "stroke-width": 1.5
                    }, {
                        fill: "90-rgb(124,148,169)", 
                        stroke: "rgb(124,148,169)", 
                        "stroke-width": 1.5
                    }]
                }); 
}
// <=== end services page

// Initialisation for single employee page
function initSingleEmployee(){

				//Init stuff slider
				       var mySwiper = new Swiper('.swiper-container',{
                    loop:true,
                    slidesPerView:3
                  })
                  $('.arrow-left').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipePrev()
                  })
                  $('.arrow-right').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipeNext()
                  })

                  if ($(window).width() <  768 & $(window).width() >431){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();
                    
                    } else
                    if ($(window).width() < 430){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.reInit();
                    
                    }else{
                        mySwiper.params.slidesPerView=3;
                        mySwiper.reInit();
                    }

                    $(window).resize(function(){
                        if ($(window).width() <  768 & $(window).width() >431){
                             mySwiper.params.slidesPerView=2;
                             mySwiper.reInit();
                        
                        } else
                        if ($(window).width() < 430){
                             mySwiper.params.slidesPerView=1;
                             mySwiper.reInit();
                        
                        }else{
                        mySwiper.params.slidesPerView=3;
                        mySwiper.reInit();
                    }

                    });

				//counter for progress bar and achivemt
                function countValue(value, result, target, duration) {
                    if(duration) {
                        var count = 0;
                        var speed = parseInt(duration / value);
                        var interval = setInterval(function(){
                            if(count - 1 < value) {
                                target.html(count);
                            }
                            else {
                                target.html(result);
                                clearInterval(interval);
                            }
                            count++;
                        }, speed);
                    }
                    else {
                        target.html(result);
                    }
                }

                function init_progressBar(duration) {
                    $('.skill').each(function() {
                        var container = $(this).find('.skill-progress');
                        var value = $(this).find('.skill-bar').attr('data-level');
                        var result = value + '%';
                        if(duration) {
                            $(this).find('.skill-value').animate({width : value + '%'}, duration);
                        }
                        else {
                            $(this).find('.skill-value').css({'width' : value + '%'});
                        }
                        
                        countValue(value, result, container, duration);
                    });
                    }


                function init_statsCounter(duration) {
                    $('.employee-achive .achive-count').each(function() {
                        var container = $(this);
                        var value = container.attr('data-value');
                        var result = container.attr('data-result');
                        
                        countValue(value, result, container, duration);
                    });
                }

                $('.achievement-item').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".achievement-item").addClass('amin');
                      init_progressBar(2000);
                      init_statsCounter(2000);
                      }
                });

                 //Inview animation for stuff slider items
                $('.slider-wrapper').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".front-employee-first").addClass('animate');
                      $(".front-employee-second").addClass('animate');
                      $(".front-employee-third").addClass('animate');
                    }
                });                                                        

                // Initialize Advanced Galleriffic Gallery
                var gallery = $('#thumbs').galleriffic({
                    imageContainerSel:         '#slideshow'
                });
}
// <=== end single employee page


// Initialisation for sinle post page
function initSinglePost(){
				//init flickr
				$('#flickr').jflickrfeed({
                    limit:          12,
                    qstrings:       {id: '52617155@N08'},
                    itemTemplate:   '<li><a href="{{image_b}}" data-rel="colorbox"><img src="{{image_s}}" alt="{{title}}" /><span class="hover-effect"></span></a></li>'
                    },function(data){$('#flickr a').colorbox({'data-rel':'colorbox'});}
                );
}
// <=== end sinle post page


// Initialisation for single service page
function initSingleService(){

                //Inview animation for promobox
                $('.promo').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".promo").addClass('animate');
                      }
                });

                $('.promo-btn').one('inview', function (event, visible) {
                    if (visible == true) {
                      $(".promo-btn").addClass('amin');
                      }
                });

                // Init chart line
                $("#wijlinechart").wijlinechart({
                    showChartLabels: false,
                    marginTop:40,
                    marginBottom:40,
                    marginLeft:30,
                    hint: {
                        content: function () {
                            return this.y;
                        }
                    },
                    header: {
                        text: "Graph title goes here",
                        compass: "south"
                    },
                     axis: { 
                        y: { 
                            labels: { 
                                style: { 
                                    fill: "#58646e", "font-size": 12, x:25
                                },
                                textAlign:'center' 
                            }, 
                            gridMajor: { 
                                style: { stroke: "#dadee1", "stroke-width": 0.5 } 
                            },
                            autoMax: false, 
                            max: 900, 
                            autoMin: false, 
                            min: 0 ,
                            origin: 0  
                        }, 
                        x: { 
                            annoFormatString: "dd/MM",
                            labels: { 
                                style: { 
                                    fill: "#58646e", 
                                    "font-size": 12,
                                    y:295 
                                },


                            }

                        } 
                    }, 
                    legend: { 
                            visible: true, 
                            compass: "south", 
                            orientation: "horizontal",
                            textMargin: {left: 15, top: 5, right: 15, bottom: -20 },
                        },               
                    seriesList: [
                        {
                            label: "feature 1",
                            legendEntry: true,
                            data: {
                                x: [new Date("6/1/2014"), new Date("6/3/2014"), new Date("6/5/2014"), new Date("6/8/2014"), new Date("6/11/2014"), new Date("6/12/2014"), new Date("6/13/2014"), new Date("6/16/2014")],
                                y: [50, 198, 105, 610, 660, 870, 420]
                            },
                            markers: {visible: true, type: "circle"}
                        },
                        {
                             label: "feature 2",
                             legendEntry: true,
                             data: {
                                 x: [new Date("6/1/2014"), new Date("6/2/2014"), new Date("6/5/2014"),  new Date("6/8/2014"), new Date("6/9/2014"), new Date("6/12/2014"), new Date("6/16/2014")],
                                 y: [4, 50, 60, 5, 40, 125]
                             },
                             markers: {visible: true, type: "circle"}
                        }
                    ],
                    seriesStyles: [
                        {stroke: "#f25549", "stroke-width": 2, opacity: 1}, 
                        {stroke: "#26455f", "stroke-width": 2, opacity: 1}
                    ],
                });

                $(window).resize(function(){$("#wijlinechart").wijlinechart("redraw");});
}
// <=== end single service page

// Initialisation for support page
function initSupport(){

				//Init pagination
				        $(".pagination").jPages({
                  containerID: "accordion-two",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:10,
                  animation: "scaleIn"
                });
}
// <=== end support page


function initShop () {
    $("#sort-product").selectbox();

    $('body').click(function (e){
          $('.sbHolder').removeClass('open-select');

          if ($('.sbToggle').hasClass('sbToggleOpen')) {
             $('.sbHolder').addClass('open-select');
          };
    });

    $(".pagination").jPages({
                  containerID: "product-list",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:15,
                  animation: "scaleIn"
    });

     $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 120, 680 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
        
      });
        
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
}

function initShopFull() {
    $("#sort-product").selectbox();

    $('body').click(function (e){
          $('.sbHolder').removeClass('open-select');

          if ($('.sbToggle').hasClass('sbToggleOpen')) {
             $('.sbHolder').addClass('open-select');
          };
    });

    

    $(".pagination").jPages({
                  containerID: "product-list",
                  first:"first",
                  last:"last",
                  previous: "",
                  next : "",
                  perPage:12,
                  animation: "scaleIn"
    });
}


function initSingleProduct() {

  var productSlider = new Swiper('.slider-sw-container',{
    pagination: '.slider-pagination',
    paginationClickable: true,
    moveStartThreshold: 100
  });

  $('.score').raty({
        width:80, 
        score: 4,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

  $('.score-null').raty({
        width:80, 
        score: 0,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

  

    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

    //Init stuff slider
               var mySwiper = new Swiper('.swiper-container',{
                    loop:true,
                    slidesPerView:3
                  })
                  $('.arrow-left').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipePrev()
                  })
                  $('.arrow-right').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipeNext()
                  })

                  if ($(window).width() <  933 & $(window).width() >431){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();
                    
                    } else
                    if ($(window).width() < 430){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.reInit();
                    
                    }else{
                        mySwiper.params.slidesPerView=3;
                        mySwiper.reInit();
                    }

                    $(window).resize(function(){
                        if ($(window).width() <  933 & $(window).width() >431){
                             mySwiper.params.slidesPerView=2;
                             mySwiper.reInit();
                        
                        } else
                        if ($(window).width() < 430){
                             mySwiper.params.slidesPerView=1;
                             mySwiper.reInit();
                        
                        }else{
                        mySwiper.params.slidesPerView=3;
                        mySwiper.reInit();
                    }

                    });
  
}

function initSingleProductFull() {
    var productSlider = new Swiper('.slider-sw-container',{
    pagination: '.slider-pagination',
    paginationClickable: true,
    moveStartThreshold: 100
  });

  $('.score').raty({
        width:80, 
        score: 4,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

  $('.score-null').raty({
        width:80, 
        score: 0,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

    //Init stuff slider
               var mySwiper = new Swiper('.swiper-container',{
                    loop:true,
                    slidesPerView:4
                  })
                  $('.arrow-left').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipePrev()
                  })
                  $('.arrow-right').on('click', function(e){
                    e.preventDefault()
                    mySwiper.swipeNext()
                  })

                  if ($(window).width() <  973 & $(window).width() >769){
                         mySwiper.params.slidesPerView=3;
                         mySwiper.reInit();
                    
                    } else
                    if ($(window).width() <  768 & $(window).width() >431){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();
                    
                    }
                     else
                    if ($(window).width() < 430){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.reInit();
                    
                    }else{
                        mySwiper.params.slidesPerView=4;
                        mySwiper.reInit();
                    }

                    $(window).resize(function(){
                        if ($(window).width() <  973 & $(window).width() >769){
                             mySwiper.params.slidesPerView=3;
                             mySwiper.reInit();
                        
                        } else
                        if ($(window).width() <  768 & $(window).width() >431){
                             mySwiper.params.slidesPerView=2;
                             mySwiper.reInit();
                        
                        } else
                        if ($(window).width() < 430){
                             mySwiper.params.slidesPerView=1;
                             mySwiper.reInit();
                        
                        }else{
                        mySwiper.params.slidesPerView=4;
                        mySwiper.reInit();
                    }

                    });
}

function initCheckout() {
      $(".product-control__sort").selectbox();

      $(".checkout-next").click(function (e) {
        e.preventDefault();

        var next = $(this).attr('data-page');
        $('.' + next ).find('.collapsed').trigger('click');
      })
}

function initCart() {
      // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

    // This button will increment the value
    $('.qtyplus2').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus2").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

    // This button will increment the value
    $('.qtyplus3').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus3").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

      $(".product-control__sort").selectbox();
}
