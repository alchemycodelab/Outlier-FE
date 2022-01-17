const URL = process.env.REACT_APP_DATABASE_URL

export async function findAuthEmail(email) {
  const url = `${URL}/api/v1/auth/${email}`
  const res = await fetch(url);
  // const data = await res.json();
  console.log('EMAIL RES', res)
  return res;
}

export async function signUp(credentials) {
  const url = `${URL}/api/v1/auth/signup`;
  const res = await fetch (url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const data = await res.json();
  console.log('AUTH POST', data);
  return data;
}

export async function signIn(credentials) {
  const url = `${URL}/api/v1/auth/login`;
  const res = await fetch (url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const data = await res.json();
  console.log('AUTH LOGIN', data);
  return data;
}