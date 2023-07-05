const Card = () => {
    return ( 
        <>
        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top">
            <img
              className="w-[200px] h-[200px] object-cover  p-2"
              src="https://m.media-amazon.com/images/I/61imYpK33qL.jpg"
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-2 bg-">
            <div className="title font-semibold text-xs ">
            Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB, 512GB Storage)
            </div>
            <div className="category text-xs font-light my-1 mx-5">
              5.4 cm (6.1-inch) display1
            </div>
  
            <div className="pricing flex items-center mx-3">
              {" "}
              <div className="price "> ₹1,34,999</div>
              <div className="ml-4 text-xs">
                $<del>₹1,61,999</del>
              </div>
            </div>
            <div className="flex items-center my-2">
              <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                Buy Now
              </button>
              <button className="border px-3 py-1 text-xs rounded-lg ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
     );
}
 
export default Card;