describe('GET', () => {
  it('response code should be 200', () => {
    cy.request('https://httpbin.org/get').then(response => {
      assert.equal(200, response.status);
    })
  })
});

describe('POST', () => {
  const request = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
});

describe('DELETE', () => {
  const request = {
    method: 'DELETE',
    url: 'https://httpbin.org/delete',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
});

describe('PATCH', () => {
  const request = {
    method: 'PATCH',
    url: 'https://httpbin.org/patch',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
});

describe('PUT', () => {
  const request = {
    method: 'PUT',
    url: 'https://httpbin.org/put',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
});

describe('HEADERS', () => {
  const request = {
    method: 'PUT',
    url: 'https://httpbin.org/put',
    headers: {
      'customHeader': 'myHeader'
    },
    failOnStatusCode: false
  };

  it('my header set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.equal('myHeader', response.requestHeaders.customHeader);
    })
  })
});

describe('USER-AGENT', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/user-agent',
    headers: {
      'user-agent': 'My test user-agent'
    },
    failOnStatusCode: false
  };

  it('user-agent set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.equal('My test user-agent', response.requestHeaders['user-agent']);
    })
  })
});

describe('RESPONSE TIMEOUT', () => {
  it('response timeout test', () => {
    cy.request('https://httpbin.org').then(response => {
    assert.isFalse(response.duration <= 100);
    })
  })
});

describe('RESPONSE FORMATS', () => {
  it('an HTML page', () => {
    cy.request('https://httpbin.org/html').then(response => {
      assert.equal(200, response.status);
      assert.equal(response.html)
    })
  })
});

describe('RESPONSE ANYTHING', () => {
  const request = {
    method: 'DELETE',
    url: 'https://httpbin.org/anything'
  };

  it('response anything DELETE method version', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status),
      assert.equal(response.json)
    })
  })
});

describe('RANDOM PARAMETERS', () => {
  it('GET some random params', () => {
    const randomParam = Math.floor(Math.random() * 5);
    cy.request('https://httpbin.org').then(response => {
      assert.equal(200, response.status),
      assert.equal(response.randomParam)
    })
  })
});

describe('DELAYED', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/delay/10',
  };

  it('A DELAYED RESPONSE', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status)
    })
  })
});
