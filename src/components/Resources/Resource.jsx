import { Link } from 'react-router-dom';

function Resource({ resource: { resourceName, resourceURL, resourceState } }) {
  return (
    <div className="resource">
      <h3>{resourceName}</h3>
      <a href={'http://' + resourceURL}>{resourceURL}</a>
      <p>{resourceState}</p>
    </div>
  );
}

export default Resource;
