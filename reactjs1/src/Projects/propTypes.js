import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css"
function App(props) {
  return (
    <>
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">{props.productName} - {props.colors} </h5>
   
           <p className="card-text">Price:
            {props.price}
          </p>
          {props.availability ? null: <p className="text-danger">Product out of stock</p>}
          <p>Rating: {props.feedback.rating}</p>
          <button onClick={props.addToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
App.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number,
  colors: PropTypes.array,
  availability: PropTypes.bool,
  feedback: PropTypes.object,
  addToCart: PropTypes.func
};
App.defaultProps = {
  productName: "iPhone",
  price: 36000,
  colors: ["Black"],
  availability: true,
  feedback: {
    rating: 4,
    comments: "good",
  },
  addToCart: function (e) {
   
  }
};
export default App;
