 import React from 'react';
 
 
 
 class About extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              count: props.initialCount || 10,
              name: ''
          };
      }

      decrement = () => {
          this.setState(prevState => ({
              count: prevState.count - 1
          }));
      };

      increase = () => {
          this.setState(prevState => ({
              count: prevState.count + 1
          }));
      };

      render() {
          return (
              <div>
                  <p>Counter: {this.state.count}</p>
                  <button onClick={this.decrement}>Decrease</button>
                  <button onClick={this.increase}>Increase</button>
              </div>
          );
      }
  }
  export default About;