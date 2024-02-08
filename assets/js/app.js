const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');/*se cambiaron por puntos */
/*const $l = document.querySelector('.location');*//*se comentó location para que no arruinara nada */

async function displayUser(username) {/*se agregó async*/
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  /*$l.textContent = `${data.location}`;*/
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);