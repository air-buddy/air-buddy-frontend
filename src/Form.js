import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flight: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            flight: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        alert('submitted!');
    }

    render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
                <label>
                    Flight #:
                    <input onChange={this.onChange} value={this.state.flight}/>
                </label>
                <button>
                    Look up
                </button>
            </form>
          </div>
        );
    }
}

export default Form;
