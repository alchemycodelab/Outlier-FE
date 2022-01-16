
const URL = process.env.REACT_APP_DATABASE_URL;

export async function getStates() {
  const url = `${URL}/api/v1/state`;
  const res = await fetch(url);
  const data = await res.json();
  console.log('STATES FETCH', data);
  return data;
}

export async function getStateByName(name) {
  const url = (`${URL}/api/v1/state/${name}`)
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  console.log('STATE BY ABRV FETCH', data);
  return data;
}