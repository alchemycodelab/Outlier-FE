const URL = process.env.REACT_APP_DATABASE_URL;

export async function getStates() {
  const url = `${URL}/state`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export async function getStateByName(name) {
  const url = (`${URL}/state/${name}`)
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}