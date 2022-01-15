import { client } from './createClient';

const URL = process.env.REACT_APP_DATABASE_URL;

// export async function auth(user) {
//   const url = `${URL}/api/v1/auth/login`;
//   const res = await fetch(url, 
//     {
//       method: 'POST',
//       mode: 'cors',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       },
//       body: JSON.stringify(user)
//     });
//   const data = await res.json();
  // console.log('oAuth', data);
//   return data;
// }

export async function getProfiles() {
  const url = `${URL}/api/v1/users`;
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

export async function getProfileEmail(email) {
  const url = `${URL}/api/v1/users/${email}`
  // const res = await fetch(url);
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    },
  });
  const data = await res.json();
  console.log('RES ID', data);
  return data;
}

export async function updateProfile(token, id) {
  const url = `${URL}/api/v1/users/${id}`;
  const res = await fetch (url,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    const data = await res.json();
    return data;
}

export async function deleteProfile(token, id) {
  const url = `${URL}/api/v1/users/${id}`;
  const res = await fetch (url, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      // body: JSON.stringify(user)
    });
    const data = await res.json();
    return data.token
}
