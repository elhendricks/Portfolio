var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.github = opts.github;
  this.description = opts.description;
  this.screenshot = opts.screenshot;
}

Project.prototype.toHtml = function () {
  var $newProject = $('section.template').clone();

  $newProject.find('h2').html(this.title);
  $newProject.find('.source-link').attr('href', this.github);
  $newProject.find('img').attr('alt', this.title);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('.project-description').html(this.description);

  $newProject.removeClass('template');

  return $newProject;
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
