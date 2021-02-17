import PropTypes from 'prop-types'

const Button = ({ text, color, backgroundColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='btn'
      style={{ color, backgroundColor }}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'Button',
  color: 'black',
  backgroundColor: 'silver',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  //{/*onClick: PropTypes.func*/ }
}

export default Button