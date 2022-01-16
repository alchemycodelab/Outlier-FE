import { client } from './createClient';

const URL = process.send.REACT_APP_DATABASE_URL;

export async function getMissingData() {
  const url = `http://localhost:3000/api/v1/missingData`;
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
