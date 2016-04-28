export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function parseJSON(response) {
     return response.json();
}

export function getHeaders() {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const token = localStorage.getItem('token');
  if(token) {
    headers.authorization = 'Bearer ' + token;
  }

  return headers;
}


export function request(url, method='GET', body=undefined) {
  return fetch('/api' + url, {
    method: method,
    headers: getHeaders(),
    body: JSON.stringify(body)
  })
  .then(checkHttpStatus)
  .then(parseJSON);
}
