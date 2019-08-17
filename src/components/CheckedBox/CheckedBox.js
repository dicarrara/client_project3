import React from "react";


const Checkbox = props => (
    <input type="checkbox" {...props} />
  )


class CheckedBox extends React.Component {
    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    render() {
      return (
        
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
           present
          </label>
           
      ) 
    }
  }

  export default CheckedBox