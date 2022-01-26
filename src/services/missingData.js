const URL = process.env.REACT_APP_DATABASE_URL;

export async function getMissingData() {
  const url = `${URL}/data`;
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

export async function getDataByState(abrv) {
  const url = `${URL}/data/state/${abrv}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
