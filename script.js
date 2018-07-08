
var Component = React.createClass({
    render: function() {
        return <div>
            <h1>Hello world!</h1>
            <p>Lorem ipsum dolorem sit ament.</p>
        </div>;
    }
});

ReactDOM.render(<Component></Component>, document.getElementById('app'));
