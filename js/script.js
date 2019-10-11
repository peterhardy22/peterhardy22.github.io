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
  
});