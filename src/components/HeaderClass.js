import react from 'react'

class HeaderClass extends react.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}

HeaderClass.defaultProps = {
  title: "Header Class"
}

export default HeaderClass