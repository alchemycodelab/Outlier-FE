import css from '../../styles/layout.css'

function Resource({ resource: { resourceName, resourceURL, resourceState } }) {
  return (
    <div>
      <a href={'https://' + resourceURL}>{resourceName}</a>
    </div>
  );
}

export default Resource;
