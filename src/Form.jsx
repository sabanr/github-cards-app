import React from 'react';

class Form extends React.Component {
    state = {
        userName: ''
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="GitHub username" 
                    value={this.state.userName}
                    onChange={event => this.setState({userName: event.target.value})}
                    required/>
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;