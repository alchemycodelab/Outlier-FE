const URL = process.env.REACT_APP_DATABASE_URL;

export async function getPopulations() {
  const url = `${URL}/api/v1/populations`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getPopsByState(abrv) {
  const url = `${URL}/api/v1/populations/${abrv}`;
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
