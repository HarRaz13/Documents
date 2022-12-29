function App(props) {
    return(<>
            <h1> {props.element1} </h1>
            <h1> {props.element2} </h1>
           </>
    );
       
}
    App.defaultProps = {
        element1 : "Hello",
        element2 : "World",
}
export default App;
    