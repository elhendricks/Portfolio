(function(module){
  var pageNavigation = {};


  pageNavigation.handleTabs = function() {
    //on click of
    //tab $('.tab')
    //get the value of data-section attr
    //hide all the other content on the page
    //display only the tab with an id === data section attr
    //when page loads .click() first tab
    $('#main-nav').on('click', '.tab', function(event){
      event.preventDefault();
      var $tabName = $(this).attr('data-section');
      $('.tab-section').hide();
      $('#' + $tabName).show();

    });

    $('#main-nav .tab:first').click();
  };

  pageNavigation.handleFilters = function() {

  };

  pageNavigation.toggleProjectLength = function() {
    $('.project-description *:nth-of-type(n+2)').hide();

    var descriptionShown = false;
    $('#projects').on('click', '.read-toggle', function(event) {
      event.preventDefault();
      if (!descriptionShown) {
        $(this).siblings('.project-description').find('*').show();
        $(this).text('<< Show Less');
        descriptionShown = true;
      } else {
        $('.project-description *:nth-of-type(n+2)').hide();
        $(this).text('Read More >>');
        descriptionShown = false;
      }
    });

  };

  pageNavigation.handleProjects = function() { Project.all.forEach(function(a)
    {
    $('#projects').append(a.toHtml());
  });
  };

  pageNavigation.handleCodeLines = function () {
    $('#projects').append('<h3>Erica has written '+ Project.countLines() +' lines of code--which is in no way a fabricated number.');
  };

  //invoke the functions
  pageNavigation.renderPage = function() {

    pageNavigation.handleTabs();
    pageNavigation.handleProjects();
    pageNavigation.toggleProjectLength();
    pageNavigation.handleCodeLines();
  };

  Project.fetchProjects(pageNavigation.renderPage);
  // Project.fetchProjects(getThings);
  module.pageNavigation = pageNavigation;
}(window));
