"use client"
import { Thasadith } from 'next/font/google';
import { useRouter } from 'next/navigation';
import React from 'react'
const cars = [
    {id : 1 , name : "BMW 100" , price : "$85.003"},
    {id : 2 , name : "BMW 900" , price : "$80.003"},
    {id : 3 , name : "BMW 800" , price : "$75.003"},
    {id : 4 , name : "BMW 700" , price : "$78.003"},
    {id : 5 , name : "BMW 600" , price : "$70.003"},
    {id : 6 , name : "BMW 500" , price : "$60.003"},
    {id : 7 , name : "BMW 400" , price : "$89.003"},
    {id : 8 , name : "BMW 300" , price : "$50.003"},

]

const Cars = () => {
    const router = useRouter() ;
   
  
    return ( 
        <div className="featured-cars-content">
        <div className="row">
           {
            cars.map(c => (
                <div onClick={()=> router.push(`/cars/${c.id}`) } key={c.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                    <div className="featured-img-box">
                        <div className="featured-cars-img">
                            <img src={`assets/images/featured-cars/fc${c.id}.png`} alt="cars"/>
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
                    <div class="featured-cars-txt">
                        <h2><a href="#">{c.name}</a></h2>
                        <h3>{c.price}</h3>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
                        </p>
                    </div>
                </div>
            </div>
            ))
           }
            
    </div>
    </div>
     );
}
 
export default Cars;