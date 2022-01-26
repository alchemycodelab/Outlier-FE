import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResources } from '../../services/resources';
import Resource from './Resource';
import css from '../../styles/layout.css';


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

  function sortStateHeader(resourceList) {
    let currentState = '';
    let newSort = resourceList.map((resource) => {
      if (resource.resourceState === currentState) return resource;
      else {
        currentState = resource.resourceState;
        resource.stateHeader = resource.resourceState;
        return resource;
      }
    });
    return newSort;
  }

  useEffect(() => {
    async function getList() {
      const resourceList = await getResources();
      let sortedList = resourceList.sort(sortArr('resourceState'));
      sortedList = sortStateHeader(sortedList);
      setResources(sortedList);
      console.log('SORTED', sortedList);
      setLoading(false);
    }
    getList();
  }, []);

  if (loading) return <h1>Loading resources...</h1>;

  return (
    <ul className={css.resources} aria-label="resource list">
      {resources.map((resource) => {
        if (resource.stateHeader) {
          return (
            <div className={css.state} key={resource.id}>
              <h2 key={resource.stateHeader}> {resource.stateHeader} </h2>
              <hr/>
              <li className={css.resource} key={resource.resourceName}>
                <Resource resource={resource} />
              </li>
            </div>
          );
        } else {
          return (
            <div>
              <li key={resource.id} className={css.resource}>
                <Resource resource={resource} />
              </li>
            </div>
          );
        }
      })}
    </ul>
  );
}
export default ResourceList;
