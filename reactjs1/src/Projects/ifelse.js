function App(){
    let ele = null;
    let islog = true;

    if (islog){
        ele = <h2>Welcom admin</h2>;
    } else {
        ele = <h2>Please Login</h2>;
    }
    return <>{ele}</>
}
export default App;