
var filters = [{name: 'title'}, {name: 'language'}];

function Project (opts) {
  this.title = opts.title;
  this.github = opts.github;
  this.description = opts.description;
  this.screenshot = opts.screenshot;
}

Project.all = [];

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};


function toFilterHtml(f) {
  var template = Handlebars.compile($('#filter-template').html());
  var html = template(f);
  return html;
};


Project.loadProjects = function(data) {
  data.sort(function(curElem, nextElem) {
    return (new Date(nextElem.published)) - (new Date(curElem.published));
  }).forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};



Project.fetchProjects = function(next) {
  $.ajax({
    method: 'GET',
    url: '/data/projects.json',
    error: function() {
      console.log('There was an error getting the data');
    },
    success: function(data) {
      // var parsedProjects = JSON.parse(data);
      next(data);
      pageNavigation.renderPage();
    }
  });
};

Project.listProjects = function() {
  console.log(filters.map(
    function(filterObj) {
      var filter = filterObj.name;
      return Project.all.map(function(ProjectObj){
        return filter;
        //return { ProjectObj.filter};
      }).reduce(function(){},{});
    })
  );
};


filters.forEach(function(b) {
  $('#filters').append(toFilterHtml(b));
});
