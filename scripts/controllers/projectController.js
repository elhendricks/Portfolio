(function(module){
  var projectController = {};
  
  projectController.reveal = function() {
    $('.tab-section').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
