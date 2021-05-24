const sendData = () => {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    console.log(user, pass);
    let data = {
        u:username,
        p:password
    }
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}