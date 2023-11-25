console.log("hello World");
function postData() {
    const dataInput = document.getElementById('dataInput').value;

    fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: dataInput }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success, update UI, etc.
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
}

function login() {
    // const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success, redirect to another page, etc.
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
}


function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('cemail').value;
    const password = document.getElementById('cpass').value;

    fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success, redirect to another page, etc.
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
}