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
    strings: ["Software Developer.", "Database Administrator.", "Programmer."],
    typeSpeed: 65,
    loop: true,
    // wait before it starts typing again
    startDelay: 500,
    showCursor: false
  });
  
});