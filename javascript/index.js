(function () {
    document.getElementById('obtainData').addEventListener('click', function() {
        getData();
    })

    function getData() {
        document.getElementById('users').innerHTML = "";
        let e = document.getElementById('pageUsers');
        fetch(`https://reqres.in/api/users?page=${e.value}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            const html = data.data.map(user => {
                return `<div class="user">
                <h2>${user.first_name}</h2>
                <p>${user.email}</p>
            </div>`
            }).join('')
        
            document.querySelector("#users").insertAdjacentHTML('afterbegin', html)
        })
        .catch((err) => console.info(err))
    }
})()
