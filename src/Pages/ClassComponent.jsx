import React from "react";

// LifeCycle Methos -
// - Mounted
// - Unmounted
// - Update
// - Only can be used with ClassComponents


// 'extends' keyword is used to allow current component i.e. ClassComponent to use properties of all other components 
class ClassComponent extends React.Component {

    // Mounted LifeCycle Method 'constructor()'
    constructor(props) {
        // 'super' is one of the constructor i.e. top level constructor whenever the component is invoked for first time
        // 'super' constructor is present in React.component
        super(props);

        this.state = {
            name: "Henry",
            age: 42,
        };
        console.log("The constructor has been invoked");
    };

    // Mounted LifeCycle Method 'componentDidMount()'
    componentDidMount() {
        console.log("The component Mounted Successfully");
    };

    // Unmounted LifeCycle Method 'componentWillUnmount()'
    componentWillUnmount(){
        console.log("The component Unmounted Successfully");
    };

    // Updated LifeCycle Method 'componentDidUpdate()'
    componentDidUpdate() {
        console.log("The component was updated");
    };

    // Mounted LifeCycle Method 'render()'
    render() {
        console.log("The component is being rendered");
        return (
            <div>
                <p>This is Class Component</p>
                <button onClick={() => this.setState(
                    {
                        ...this.state,
                        age: this.state.age + 1,
                    }
                )}>Click to inc. Age</button>
                <button onClick={() => this.setState(
                    {
                        ...this.state,
                        age: this.state.age - 1,
                    }
                )}>Click to dec. Age</button>
                <h4>{this.state.age}</h4>
            </div>
        );
    }
}

export default ClassComponent;