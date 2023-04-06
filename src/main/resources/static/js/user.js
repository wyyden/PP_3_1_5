const data = document.getElementById("user-info");
const url = 'http://localhost:8080/api/user/authentication';
const panel = document.getElementById("user-panel1");

function userAuthInfo() {
    fetch(url)
        .then((res) => res.json())
        .then((u) => {
            let temp = '';
            temp += `<tr>
            <td>${u.id}</td>
            <td>${u.firstName}</td>
            <td>${u.lastName}</td>
            <td>${u.age}</td>
            <td>${u.email}</td>
            <td>${u.roles.map(role => role.name).join(' ')}</td> 
            </tr>`;
            data.innerHTML = temp;
            panel.innerHTML = `<h5>${u.email} with roles: ${u.roles.map(role => role.name).join(' ')}</h5>`
        });
}

userAuthInfo()