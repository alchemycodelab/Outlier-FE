const URL = process.env.REACT_APP_DATABASE_URL;

export async function getHateCrimes(statesArr) {
  console.log('statesArr', statesArr);
  const url = `${URL}/api/v1/stats/create`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statesArr),
  });
  const data = await res.json();
  // console.log('res', res.json())
  console.log('data', data);
  return data;

  //second fetch
  // const BEurl = `${URL}/api/v1/stats/${statesArr}`;
  // const response = await fetch(BEurl);
  // const data = await response.json();
  // return data;
}
