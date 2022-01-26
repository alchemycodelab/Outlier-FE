export async function getDrinkingData() {
  const res = await fetch('https://datausa.io/api/data?drilldowns=State&measures=Excessive%20Drinking&year=latest')
  const data = res.json();
  return data;
}