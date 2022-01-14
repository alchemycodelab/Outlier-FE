import { client } from './createClient';

const URL = process.env.REACT_APP_DATABASE_URL;

export async function getProfile() {
  const url = `http://localhost:3000/api/v1/users`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  console.log('RES', data);
  return data;
}

export async function createProfile(user) {
  const response = await fetch(`${URL}/api/v1/users`,
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(user)
    }
  );
  return response.json();
}
