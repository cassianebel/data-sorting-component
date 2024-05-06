import Item from './Item';
import PropTypes from 'prop-types';

export default function List({ items }) {
  return (
    <ul className="list" id="list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

// Props validation
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};