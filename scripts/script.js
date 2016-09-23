var projects = [];

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

selectedProjects.sort(function(curElem, nextElem) {
  return (new Date(nextElem.published)) - (new Date(curElem.published));
});

selectedProjects.forEach(function(ele){
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
