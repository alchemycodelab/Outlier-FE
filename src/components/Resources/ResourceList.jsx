import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResources } from '../../services/resources';
import Resource from './Resource';


function ResourceList() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getIt() {
      const resourceList = await getResources();
      setResources(resourceList);
      setLoading(false);
      // console.log(resources);
    }
    getIt();
  }, []);

  if (loading) return <h1>Loading resources...</h1>;

  // const sortByState = 

  return (
    <ul className="resources" aria-label="resource list">
      {resources.map((resource) => (
        <li key={resources.id}>
          <Resource resource={resource} />
        </li>
      ))}
    </ul>
  );
}

export default ResourceList;
