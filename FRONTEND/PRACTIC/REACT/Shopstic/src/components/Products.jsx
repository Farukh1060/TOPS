import x from "../assets/card_img.jpg"


const Products = ()=>{
    return(
        <>
            <div className="products_container">
                <div className="container">
                    <div className="products">
                        <div className="product_card">
                            <div className="img">
                                <img src={x} alt="" />
                            </div>
                            <div className="catagory">
                                <p>fashion</p>
                            </div>
                            <div className="product_title">
                                <p>gilto black jacket</p>
                            </div>
                            <div className="rating">
                                
                            </div>
                            <div className="brand"></div>
                            <div className="price"></div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Products