import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        
            <div className="home-container">
                { isLoading ? (
                <p>Loading...</p> 
                ) : error ? (
                <p>An error occured...</p> 
                ) : (
                <>
                <h2 className="product-title-name">Products</h2>
                <div className="products">
                    {data?.map((product) => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <div className="details">
                            <span className="price">£{product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>
                            Add To Basket
                            </button>
                    </div> ))}
                </div>
                </>
                )}
            </div>
    );
}
 
export default Home;