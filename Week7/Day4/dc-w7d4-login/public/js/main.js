function login() {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    let userLogin

    fetch('http://localhost:3000/logged', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(userData)
    })
}

function fetchData() {
    const fetched = document.querySelector('#fetched')

    fetch('http://localhost:3000/logged', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(userData)
    })
}