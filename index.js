function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/chipsaboy/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => showForkedRepo(res));
}

function showForkedRepo(res) {
  document.getElementById("results").innerHTML = `<a href="${res.url}">${res.url}</a>`
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'be316db742286210dc5a9255f11a20b6ad7607c4'
}
