function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>displayUsers2(data))
}

function displayUsers2(data){
   const ul =  document.getElementById('users-list');
   for (const user of data) {
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li);
   }
}


function deletePost(){
  fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'DELETE',
})
}

function patchPost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'PATCH',
body: JSON.stringify({
  title: 'foo',
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));
}

function createAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));
}