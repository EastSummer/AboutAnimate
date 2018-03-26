import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  state = {
    focused: false,
    disabled: false
  }

  componentDidMount() {
    this._input.addEventListener('focus', this.focus);
    this._input.addEventListener('blur', this.focus);
  }

  focus = () => {
    this.setState(prevState => ({
      focused: !prevState.focused
    }));
  }

  onChange = () => {
    this.setState(prevStatea => ({
      disabled: !prevStatea.disabled
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <input
            ref={input => this._input = input}
            className={['input', this.state.focused && 'input-focused'].join(' ')}
          />
          <br/><br/><br/>
          <input
            onFocus={this.onChange}
            onBlur={this.onChange}
            style={Object.assign({},
              styles.input,
              this.state.disabled && styles.inputFocused
            )}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  input: {
    width: 150,
    padding: 10,
    fontSize: 20,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#dddddd',
    transition: 'width .35s linear',
    outline: 'none'
  },
  inputFocused: {
    width: 240
  }
}

render(<App />, document.getElementById('root'));
