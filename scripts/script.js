
var filters = [{name: 'title'}, {name: 'language'}];

function Project (opts) {
  this.title = opts.title;
  this.github = opts.github;
  this.description = opts.description;
  this.screenshot = opts.screenshot;
  this.language = opts.language;
  this.linesJS = opts.linesJS;
  this.linesCSS = opts.linesCSS;
  this.linesHTML = opts.linesHTML;
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


function toPopulateFilterHtml() {
  var template = Handlebars.compile($('#category-template')).html();
  var html = template ();
  return html;
};

// function getThings() {
//   var filterArray = filters.map(function(ele) {
//     return ele.name;
//   });
//
// console.log("filterArray: " + filterArray);
//   var categoryArray = filterArray.map(function(item) {
//     console.log("item: " + item);
//     return Project.all.map(function(thing) {
//       console.log("thing[item]: "+ thing[item]);
//       return {category: thing[item]};
//     });
//   });
// console.log("categoryArray: " + categoryArray);
//
// filterArray.forEach(function(){
//   categoryArray.forEach(function(junk){
//     console.log("junk.category " + junk.title);
//     toPopulateFilterHtml(junk);
//   });
//
// })
// };
//
//
//
//
// // console.log(categoryArray);
//
//
//
//

Project.loadProjects = function(data) {
  Project.all = data.map(function(ele) {
    return new Project(ele);
  });
};




Project.countLines = function() {
  return Project.all.map(function(obj) {
    return obj.linesCSS + obj.linesJS + obj.linesHTML;
  }).reduce(function(acc, curr){
    return acc + curr;
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
      Project.loadProjects(data);
      next();
    }
  });
};

// Project.listProjects = function() {
//   filters.map(
//     function(filterObj) {
//       var filter = filterObj.name;
//       return Project.all.map(function(ProjectObj){
//         return ProjectObj.filter;
//         // return {filter: };
//       });
//     });
// };


filters.forEach(function(b) {
  $('#filters').append(toFilterHtml(b));
});
