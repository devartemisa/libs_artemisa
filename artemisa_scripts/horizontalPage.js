jQuery(document).ready(function($){
    var allSections = $('.horizontal-section');
    allSections.wrapAll('<div class="horizontal-container"/>');
  
   $(document).ready(function() {
        $('.horizontal-container').pagepiling({
            menu: null,
            direction: 'horizontal',
            verticalCentered: true,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#000',
                'position': 'bottom',
                'tooltips': ['Diseño Grafico', 'Marketing Digital', 'Social Media', 'Diseño Web']
            },
               normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.horizontal-section',
            animateAnchor: false,
    
            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
        });
    });

});