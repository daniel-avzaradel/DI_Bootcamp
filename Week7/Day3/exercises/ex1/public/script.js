const nameInp = document.getElementById('name')

const getData = () => {
    fetch('http://localhost:5000/add', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user:nameInp.value})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    })
}

const showData = () => {
    fetch('http://localhost:5000/showUsers')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        if(err) {
            console.log(err)
        }
    })
}