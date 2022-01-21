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
  return data;
}

export async function getKey(activePopulation, state) {
  let res ;
  if (activePopulation === 'black') {
      console.log('black is chosen')
    res = await fetch(`${URL}/api/v1/stats/key/Anti-Black%20or%20African%20American/state/${state}`);
  } else if (activePopulation === 'latinx') {
      console.log('latinx is chosen');
    res = await fetch(`${URL}/api/v1/stats/key/Anti-Hispanic%20or%20Latino/state/${state}`);
  } else if (activePopulation === 'lgbt') {
    console.log('lgbt is chosen');
    res = await fetch(`${URL}/api/v1/stats/key/Anti-Lesbian,%20Gay,%20Bisexual,%20or%20Transgender%20(Mixed%20Group)/state/${state}`); 
  }
  console.log('res', res);
  const data = await res.json();
  console.log('data', data);
  return data;
}