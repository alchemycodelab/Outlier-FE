const URL = process.env.REACT_APP_DATABASE_URL;

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
      // 'Authorization' : `${token}`
    },
    body: JSON.stringify(user)
  });

  const data = await res.json();
  console.log('RES POST', data);
  return data
}

export async function getProfileEmail(email) {
  const url = `${URL}/api/v1/users/${email}`
  const res = await fetch(url);
  // const data = await res.json();
  console.log('RES ID', res);
  // return data;
}

export async function updateProfile(obj) {
  try {
    const url = `${URL}/api/v1/users/4`;
    const res = await fetch (url,
      {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `${token}`,
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
      console.log('RES PUT', data);
      return data;
  } catch (err) {
    console.log(err)
  }
}

export async function deleteProfile(id) {
  const url = `${URL}/api/v1/users/${id}`;
  const res = await fetch (url, 
    {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data
}