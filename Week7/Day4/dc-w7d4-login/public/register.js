function sendData() {

    const name = document.querySelector('#name').value
    const lname = document.querySelector('#lname').value
    const email = document.querySelector('#email').value
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const welcome = document.querySelector('#welcome')

    let userData = {
        name, 
        lname, 
        email, 
        username, 
        password
    }

    console.log(userData)
    // lines 19-25: sending the data to the server
    fetch('http://localhost:3000/registered',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(userData)
    })

    // getting a response back from the server to the client
	.then(res => res.json())
	.then(data => {
		console.log(`data: `, data)
	})

}



