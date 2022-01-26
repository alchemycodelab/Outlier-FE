
const URL = process.env.REACT_APP_DATABASE_URL;

export async function getResources() {
  const url = `${URL}/resources`;

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
