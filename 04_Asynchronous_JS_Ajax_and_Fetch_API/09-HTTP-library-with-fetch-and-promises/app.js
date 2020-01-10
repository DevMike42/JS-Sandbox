const http = new EasyHTTP;

// User Data
const data = {
  name: 'Rick Sanchez',
  username: 'picklerick',
  email: 'wubbalubbadubdub@examles.com'
}

// FUNCTIONS
const getUsers = () => {
  // Get Users
  http.get('http://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const postUser = () => {
  // Create User
  http.post('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const updateUser = () => {
  // Update User
  http.put('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


const deleteUser = () => {
  // Delete User
  http.delete('http://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


// EVENT LISTENERS
document.getElementById('get-users').addEventListener('click', getUsers)
document.getElementById('post-user').addEventListener('click', postUser)
document.getElementById('update-user').addEventListener('click', updateUser)
document.getElementById('delete-user').addEventListener('click', deleteUser)



