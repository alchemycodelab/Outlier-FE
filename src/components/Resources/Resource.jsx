import css from '../../styles/resources.css'

function Resource({
  resource: {
    resourceName,
    resourceURL,
    resourceState,
  },
}) {
  return (
    <div className={css.resource_container}>
      <h3>{resourceName}</h3>
      <a href={'http://' + resourceURL}>{resourceURL}</a>
      <p>{resourceState}</p>
    </div>
  );
}

export default Resource;
