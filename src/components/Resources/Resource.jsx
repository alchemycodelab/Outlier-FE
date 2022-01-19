import { Link } from 'react-router-dom';

function Resource({
  resource: {
    resourceName,
    resourceURL,
    state,
  },
}) {
  return (
    <div className="resource">
      <h3>{resourceName}</h3>
      {/* <Link to={{pathname: resourceURL}}>{resourceURL}</Link> */}
      <a href={'http://' + resourceURL}>{resourceURL}</a>
      <p>{state.resourceState}</p>
    </div>
  );
}

export default Resource;
