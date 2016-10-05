var githubData = {};

githubData.repoData = [];
githubData.repoNames = [];
githubData.languageBytes = [];

githubData.getData = function(callback) {
  $.ajax({
    url: 'https://api.github.com/users/elhendricks/repos',
    type: 'GET',
    success: function(data) {
      data.forEach(function(a) {
        githubData.repoData.push(a);
        githubData.repoNames = githubData.repoData.map(function(item) {
          return item.name;
        });
      });
      callback( );
      console.log(githubData.languageBytes);
    },
    error: function() {
      console.log('Error inside githubData ajax call');
    },
    headers: {Authorization: 'token ' + token}
  });
};

githubData.getMyLanguages = function(b) {
  $.ajax({
    url: 'https://api.github.com/repos/elhendricks/'+ b +'/languages',
    type: 'GET',
    success: function(data) {
      githubData.languageBytes.push(data);
      console.log('getMyLanguages data: ', data);
    },
    error: function() {
      console.log('Error inside githubData ajax call');
    },
    headers: {Authorization: 'token ' + token}
  });
};

githubData.getData(temp);

function temp() {
  githubData.repoNames.forEach(function(repoName) {
    githubData.getMyLanguages(repoName);

  });
}

// var temp = githubData.repoNames[0];
// githubData.getMyLanguages(temp);
// githubData.getMyLanguages();
