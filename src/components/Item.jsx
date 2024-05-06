import PropTypes from 'prop-types';

export default function Item({ item }) {
  let progressClass = item.progress.replace(/\s/g, '-');

  return (
    <li>
      <div className="color" style={{ backgroundColor: item.color }}></div>
      <div className="content">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span className={progressClass}>{item.progress}</span>
      </div>
    </li>
  )
}

// Props validation
Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}