import React from 'react'
import { render } from 'react-dom'
import createReactClass from 'create-react-class';
import {App4, App5, Contacts2} from './index2.jsx';

class App extends React.Component {

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
          <p>This is APP1.</p>
        <input type="text" onChange = { this.onChange.bind(this) } />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}
render(<App/>, document.getElementById('app'));


class App2 extends React.Component {

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
                <p>This is APP2.</p>
                <input type="text" onChange = { this.onChange.bind(this) } />
                <p>{ this.state.message }</p>
            </div>
        )
    }
}
render(<App2/>, document.getElementById('app2'));

const Contacts = createReactClass({
    render: function(){
        return (
            <div>
                <p>This is APP3.</p>
                <p>1234567890</p>
            </div>
        )
    }
});
render(<Contacts/>, document.getElementById('app3'));
render(<App4/>, document.getElementById('app4'));
render(<App5/>, document.getElementById('app5'));
render(<Contacts2/>, document.getElementById('app6'));
