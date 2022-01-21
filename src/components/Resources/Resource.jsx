import css from '../../styles/layout.css'

function Resource({ resource: { resourceName, resourceURL, resourceState } }) {
  return (
    <div>
      <a href={'http://' + resourceURL}>{resourceName}</a>
    </div>
  );
}

export default Resource;
