## What is JSX, and why is it used?
Ans: JSX (JavaScript XML) is a syntax used in React that lets you write HTML-like code inside JavaScript.
Why it is used:
JSX makes it easier to create and understand UI because the HTML structure and JavaScript logic can be written together in one place.


## What is the difference between State and Props?
Ans:Props: Props are data passed from a parent component to a child component, and they cannot be changed by the child component.Props = data from parent (read-only).
State: State is data inside a component that can change over time, usually when a user interacts with the app. State = data inside the component (can change).


## What is the useState hook, and how does it work?
Ans: The useState hook is used in React to store and update data inside a component.
It works by creating a state variable and a function to update that variable. When the state changes, the component re-renders (updates the UI).


## How can you share state between components in React?
Ans: In React, you can share state between components by lifting the state up to a common parent component.
The parent component keeps the state and then passes the data to child components using props.



## How is event handling done in React?
Ans: In React, event handling is done by adding an event function to an element (like a button) using camelCase events such as onClick, onChange, or onSubmit.
When the event happens (for example, a button click), the function runs.



