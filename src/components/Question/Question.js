import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <h2 className='question-title'>1. How does React work?</h2>

            <p>React is a JavaScript library for building user interfaces in a predictable and efficient way using declarative code. ReactJS is one of the most popular JavaScript libraries for mobile and web application development. It allows you to create DOM, from your JavaScript, that automatically updates to any state changes within your model. Finally, We can say that React is a JavaScript Ui library for dynamic websites.</p>

            <h2 className='question-title'>2. How useState works?</h2>

            <p>The useState is a React hook and hooks make possible to use state and mutability inside function components. If you pass the initial state to this function and it returns a variable with the current state value and another function to update this value. Two types of components in React: Class and Functional Components.

                <p>Syntax: the 1st element is the initial state and the 2nd one is a function that used ofr updating the state.</p>

                <p><strong>const [products, setProducts] = useState(initialstate);</strong></p>
            </p>
        </div>
    );
};

export default Question;