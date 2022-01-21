import ResourceList from "../../components/Resources/ResourceList";
import { useActiveStates } from "../../context/State/StateCtx";

export default function Resources() {
  const { activeStates } = useActiveStates();
  return (
    <>
      <h1> Resources Page </h1>
      <h2>{activeStates[0]}</h2>
      <h2>{activeStates[1]}</h2>
      <ResourceList />
      <footer>
        <li>
          Citations:
          <a
            href={
              'https://crime-data-explorer.fr.cloud.gov/pages/explorer/crime/hate-crime'
            }
          >
            FBI Crime Data: Hate Crimes
          </a>
          <a
            href={
              'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
            }
          >
            Data USA: Population Stats
          </a>
          <a
            href={
              'https://williamsinstitute.law.ucla.edu/wp-content/uploads/LGBT-Adult-US-Pop-Jul-2020.pdf'
            }
          >
            {' '}
            UCLA School of Law: LGBT Populations
          </a>
          <a
            href={
              'https://datausa.io/api/data?drilldowns=Race,Ethnicity,State&measures=Hispanic%20Population'
            }
          >
            Data USA: Black & Latinx Populations
          </a>
        </li>
      </footer>
    </>
  );
}