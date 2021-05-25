const sendData = () => {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    let data = {
      u:username,
      p:password
    }
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
}
