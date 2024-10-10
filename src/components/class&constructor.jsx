import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: "kigali", Name: "Alice", Age: 50};
    }

    change = () => {
        alert("updating......");
        this.setState({city: "kampala"});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Contact us on: {this.state.Name}!</h1>
                <p>And the city is: {this.state.city}</p>
                <p>The age is: {this.state.Age}</p>
                <button onClick={this.change}>Update information</button>
            </div>
        );
    }
}

export default About;