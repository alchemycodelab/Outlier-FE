import { client } from './createClient';

const URL = process.env.REACT_APP_DATABASE_URL;

export async function getProfile() {
  const url = `http://localhost:3000/api/v1/users`;
  // const res = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  const res = await fetch(url);
  const data = await res.json();
  console.log('RES', data);
  return data;
}

export async function createProfile(user) {
  const res = await fetch(`${URL}/api/v1/users/create`,
  {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }
  );
  const data = res.json();
  console.log('RES POST', data);
  return data
}

export async function getProfileId(id) {
  const url = `http://localhost:3000/api/v1/users/${id}`
  const res = await fetch(url, 
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  const data = await res.json();
  console.log('RES ID', data);
  return data;
}
