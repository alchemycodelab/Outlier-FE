const URL = process.env.REACT_APP_DATABASE_URL;

export async function getHateCrimes(statesArr) {
  const url = `${URL}/api/v1/stats/create`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statesArr),
  });
  await res.json();
  //second fetch
  const BEurl = `${URL}/api/v1/stats/${statesArr}`;
  const response = await fetch(BEurl);
  const data = await response.json();
  return data;
}
