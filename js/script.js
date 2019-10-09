// $(document).ready method
$(document).ready(function() {
  // activates superslides code
  $('#slides').superslides({
    // fade quality when switching images
    animation: "fade",
    // determines time before switching to next image
    play: 5000,
    // takes away user manually changing images
    pagination: false
  });
  
});