import React from 'react';
export const  generateMetadata = ({ params, searchParams })=> {
    return {
        title: `cart on ${params.carId}`
    }
      
}
const CarId = ({params , searchParams}) => {
    return ( 
        <section style={{width: "100vw" , display : "flex" , flexDirection : "column" , justifyContent : "center"
            , alignItems : "center", marginTop : "100px"
         }} >
            <div class="col-lg-3 col-md-4 col-sm-6">
        <div className="single-featured-cars">
        <div className="featured-img-box">
            <div className="featured-cars-img">
                <img src={`/assets/images/featured-cars/fc${params.carId}.png` } alt="cars"/>
            </div>
            <div className="featured-model-info">
                <p>
                    model: 2017
                    <span className="featured-mi-span"> 3100 mi</span> 
                    <span className="featured-hp-span"> 240HP</span>
                     automatic
                </p>
            </div>
        </div>
        <div className="featured-cars-txt">
            <h2><a href="#">BMW 6-series gran coupe</a></h2>
            <h3>{searchParams.price}</h3>
            <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
            </p>
        </div>
    </div>
    </div>
    </section>
     );
}
 
export default CarId;