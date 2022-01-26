const URL = process.env.REACT_APP_DATABASE_URL

export async function findAuthEmail(email) {
  const url = `${URL}/auth/${email}`
  const res = await fetch(url);
  const data = await res.json();
  console.log('EMAIL RES', data);
  return data;
}

export async function signUp(auth) {
  const url = `${URL}/auth/signup`;
  const res = await fetch (url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(auth)
  });

  const data = await res.json();
  console.log('AUTH CREATE', data);
  return data;
}

export async function signIn(auth) {
  const url = `${URL}/auth/login`;
  const res = await fetch (url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(auth)
  });

  const data = await res.json();
  console.log('AUTH LOGIN', data);
  return data;
}