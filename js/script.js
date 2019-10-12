// $(document).ready method
$(document).ready(function() {

// activates superslides code with jQuery
    $('#slides').superslides({
        // fade quality when switching images
        animation: "fade",
        // determines time before switching to next image
        play: 5000,
        // takes away user manually changing images
        pagination: false
    });
    // Creates typed effect in supersliders section
    var typed = new Typed(".typed", {
        strings: ["Software Developer", "Database Administrator", "Data Analyst"],
        typeSpeed: 65,
        loop: true,
        // wait before it starts typing again
        startDelay: 500,
        showCursor: false
    });

// activates owl carousel in technical skills section
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        // specifices how many items to show when a screen is a certain size
        responsive:{
            // refers to screen size
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    // begin pie chart animation when user scrolls window down to skills section charts
    // jQuery object that refers to skills section
    var skillsTopOffset = $(".skillsSection").offset().top;
    // when window is scrolled
    $(window).scroll(function() {
        // begins animation when skills section is scrolled within view
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            // activates easypiechart in technical skills section
            $('.chart').easyPieChart({
                // creates smooth transition
                easing: 'easeInOut', 
                barColor: '#fff',
                // gets rid of remainder of percentage for pie chart
                trackColor: false,
                // hides tick marks on pie chart
                scaleColor: false,
                lineWidth: 4,
                // matches height and width from canvas tag in index.html
                size: 152,
                // onStep makes number on pie chart increase as pie chart fills up
                onStep: function(from, to, percent) {
                    // referring to this element, find the class percent from index.html
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

// fancybox for portfolio section
    $("[data-fancybox]").fancybox();
    // call isotope plugin
    $(".items").isotope({
        // filter applied from the start is all
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false        
        }
    });
    // isotope filtering of portfolio images
    $("#filters a").click(function() {
        // remove current class so when filtering all is not automatically choosen
        $("#filters .current").removeClass("current");
        // this refers to whichever button you click, and when clicked gives it class current for display
        $(this).addClass("current");
        // selector chooses class of data-filter, i.e .apps, .projects, etc.
        var selector = $(this).attr("data-filter");
        // call isoptope with new value
        $(".items").isotope({
            // filter applied from the start is all
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false        
            }
        });
        // don't do anything else after click because we don't want to go to a link
        return false;
    });

});