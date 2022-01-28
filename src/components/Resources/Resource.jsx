import css from '../../styles/layout.css'

//nice use of destructuring here
function Resource({ resource: { resourceName, resourceURL } }) {
  return (
    <div>
      <a href={`https://${resourceURL}`}>{resourceName}</a>
    </div>
  );
}

export default Resource;
