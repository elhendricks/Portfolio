var githubData = {};

githubData.repoData = [];
githubData.repoNames = [];
githubData.languageBytes = [];

githubData.getData = function(callback) {
  $.ajax({
    url: '/github/users/elhendricks/repos',
    type: 'GET',
    success: function(data) {
      data.forEach(function(a) {
        githubData.repoData.push(a);
        githubData.repoNames = githubData.repoData.map(function(item) {
          return item.name;
        });
      });
      callback( );
      languageReduce();
    },
    error: function() {
      console.log('Error inside githubData ajax call');
    }
  });
};

githubData.getMyLanguages = function(b) {
  $.ajax({
    url: '/github/repos/elhendricks/'+ b +'/languages',
    type: 'GET',
    success: function(data) {
      githubData.languageBytes.push(data);
      console.log('getMyLanguages data: ', data);
    },
    error: function() {
      console.log('Error inside githubData ajax call');
    }
  });
};

githubData.getData(temp);

function temp() {
  githubData.repoNames.forEach(function(repoName) {
    githubData.getMyLanguages(repoName);

  });
}

function languageReduce() {
  return githubData.languageBytes.reduce(function(acc, curr){
    for (var key in curr) {
      acc[key] = acc[key] + curr[key];
    }
    return acc;
  }, {JavaScript: 0, HTML: 0, CSS: 0});
}

// var temp = githubData.repoNames[0];
// githubData.getMyLanguages(temp);
// githubData.getMyLanguages();
