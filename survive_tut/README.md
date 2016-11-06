# survive js react
http://survivejs.com/react

## React
- virtualdom uses DOM as render target
- universal rendering
- server renders the initial markup and passes the 
initial data to the client
- always good to start with data model
- components can be pure JS functions instead of react.createClass

## implicity declaring props
`export default (props) => <div>{props.task}</div>;`

OR

`export default (props) => <div>{props.task}</div>;`

## bound functions
- allows us to change `this` property

- Refs

- refs allow you to access the underlying DOM structure easily
