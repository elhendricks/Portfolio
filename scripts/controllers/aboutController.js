(function(module){
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-section').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
