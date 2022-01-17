const URL = process.env.REACT_APP_DATABASE_URL;

export async function getFavorites() {
  const url = `${URL}/api/v1/favorite`;
  const res = await fetch(url);
  const data = await res.json();
  console.log('GET ALL FAVORITES', data);
  return data;
};

export async function addFavorite() {
  const res = await fetch(`${URL}/api/v1/favorite/create`, 
  {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  console.log('FAVORITES POST', data);
  return data;
};

export async function getFavoriteId(id) {
  const url = `${URL}/api/v1/favorite/${id}`
  const res = await fetch(url)
  const data = await res.json();
  console.log('FAVORITES BY TOPIC', data);
  return data;
}

export async function deleteFavoriteById(id) {
  const res = await fetch(`${URL}/api/v1/favorite/${id}`,
  {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type' : 'application/json',
    },
  });
  const data = await res.json();
  return data
}