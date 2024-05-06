import PropTypes from 'prop-types';

export default function Button({ active, icon, label, onClick }) {
  let id = label.replace(/\s/g, '-');
  return (
    <button id={id} className={active} aria-label={label} title={label} onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
}

// Props validation
Button.propTypes = {
  active: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};