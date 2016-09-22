var pageNaviation = {};

pageNaviation.handleTabs = function() {
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

//invoke the functions
pageNaviation.handleTabs();
