import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResources } from '../../services/resources';
import Resource from './Resource';
import css from '../../styles/resources.css';


function ResourceList() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);   
  
  function sortArr(prop) {
    var sortOrder = 1;
    if(prop[0] === '-') {
      sortOrder = -1;
      prop = prop.substr(1);
    }
    return function (a, b) {
      if (sortOrder == -1) {
        return b[prop].localeCompare(a[prop]);
      } else {
        return a[prop].localeCompare(b[prop]);
      }
    };
  };

  useEffect(() => {
    async function getList() {
      const resourceList = await getResources();
      // console.log('R-LIST', resourceList);
      const sortedList = resourceList.sort(sortArr('resourceState'));
      setResources(sortedList);
      console.log('SORTED', sortedList);
      setLoading(false);
    }
    getList();
  }, []);

  if (loading) return <h1>Loading resources...</h1>;

  return (
    <ul className={css.resource_list} aria-label="resource list">
      {resources.map((resource) => (
        <li className={css.list_item} key={resource.id}>
          <Resource resource={resource} />
        </li>
      ))}
    </ul>
  );
}

export default ResourceList;
