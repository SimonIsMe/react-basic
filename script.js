 // 1
ReactDOM.render(
    <h1>
        Hello Marta!
    </h1>,
    document.getElementById('app')
);



//  2
// var element = <h1>
//         Hello Marta
//     </h1>;
//
// ReactDOM.render(
//     element,
//     document.getElementById('app')
// );



// //  3
// var HelloComponent = React.createClass({
//     render: function() {
//         return <h1>
//             Hello Marta
//         </h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloComponent/>,
//     document.getElementById('app')
// );


// //  4
// var HelloComponent = React.createClass({
//     render: function() {
//         return <h1>
//             Hello {this.props.name}
//         </h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloComponent name="Marta"/>,
//     document.getElementById('app')
// );


// //  5
// var HelloComponent = React.createClass({
//     propTypes: {
//         // https://reactjs.org/docs/typechecking-with-proptypes.html
//         name: React.PropTypes.string.isRequired,
//     },
//
//     render: function() {
//         return <h1>
//             Hello {this.props.name}
//         </h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloComponent name="Marta"/>,
//     document.getElementById('app')
// );
