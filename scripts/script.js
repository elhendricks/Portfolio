
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

// This one works with
function toFilterHtml(f) {
  var template = Handlebars.compile($('#filter-template').html());
  var html = template(f);
  return html;
};

//   This does NOT work
//   function toFilter(f) {
//   var source = $('#filter-template').html();
//   var template = Handlebars.compile(source);
//   var html = template();
//   return html;
// };

Project.loadProjects = function(data) {
  data.sort(function(curElem, nextElem) {
    return (new Date(nextElem.published)) - (new Date(curElem.published));
  }).forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};

Project.fetchProjects = function() {
  $.ajax({
    method: 'GET',
    url: '/data/projects.json',
    error: function() {
      console.log('There was an error getting the data');
    },
    success: function(data) {
      // var parsedProjects = JSON.parse(data);
      Project.loadProjects(data);
      pageNavigation.renderPage();
      console.log(data);
    }
  });
};


//This works with toFilterHtml
filters.forEach(function(b) {
  $('#filters').append(toFilterHtml(b));
});



// This does not work
// $('#filters').append(toFilter())
