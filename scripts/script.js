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
  $newProject.find('a').attr('href', this.github);
  $newProject.find('img').attr('alt', this.title);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('p').html(this.description);

  $newProject.removeClass('template');

  return $newProject;
};

selectedProjects.forEach(function(ele){
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
