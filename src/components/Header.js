import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (event) => {
    console.log(`Some button was clicked!`)
    console.log(event)
  }

  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button color='white' backgroundColor='blue' text='Add' onClick={onClick} />
      <Button color='black' backgroundColor='orange' text='Edit' onClick={onClick} />
      <Button color='white' backgroundColor='red' text='Delete' onClick={onClick} />
      <Button />
    </header>
  )
}

Header.defaultProps = {
  title: 'Header'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {
  color: '#224488'
}

export default Header