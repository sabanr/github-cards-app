import React from 'react';

class Form extends React.Component {
    handleSubmit = () => {

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub username"/>
                <button>Add card</button>
            </form>
        );
    }
};

export default Form;