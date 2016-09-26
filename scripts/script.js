var projects = [];
var filters = [{name: 'title'}, {name: 'language'}];

function Project (opts) {
  this.title = opts.title;
  this.github = opts.github;
  this.description = opts.description;
  this.screenshot = opts.screenshot;
}

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);

  return html;
};
// This one works with
function toFilterHtml(f) {
  var source = $('#filter-template').html();
  var template = Handlebars.compile(source);
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

selectedProjects.sort(function(curElem, nextElem) {
  return (new Date(nextElem.published)) - (new Date(curElem.published));
});



selectedProjects.forEach(function(ele){
  projects.push(new Project(ele));
});


//This works with toFilterHtml
filters.forEach(function(b) {
  $('#filters').append(toFilterHtml(b));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});

// This does not work
// $('#filters').append(toFilter());
