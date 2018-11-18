import React from 'react'
import { render } from 'react-dom'
import createReactClass from 'create-react-class';

class App4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { message: 'something' }
  }

  onChange(e) {
     this.setState( { message: e.target.value } )
  }

  render() {
    return (
      <div>
          <p>This is APP4.</p>
        <input type="text" onChange = { this.onChange.bind(this) } />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

class App5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { message: 'something' }
    }

    onChange(e) {
        this.setState( { message: e.target.value } )
    }

    render() {
        return (
            <div>
                <p>This is APP5.</p>
                <input type="text" onChange = { this.onChange.bind(this) } />
                <p>{ this.state.message }</p>
            </div>
        )
    }
}

const Contacts2 = createReactClass({
    render: function(){
        return (
            <div>
                <p>This is APP6.</p>
                <p>1234567890</p>
            </div>
        )
    }
});
export {App4, App5, Contacts2}
