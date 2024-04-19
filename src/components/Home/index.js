import { Component } from "react";
import "./index.css"
import Food from "../Food";
import Instamart from "../Instamart";
class Home extends Component{
    getHome=()=>{
        return(
            <Food/>
        )
    }
    getInstaMart=()=>{
        return(
            <Instamart/>
        )
    }
    render(){
        return(
            <div className="home1">
                <div className="one">
                    <h1>Swiggy</h1>
                    <input type="search" placeholder="Search for pizza" className="search"/>

                </div>
                <div className="two">
                    <h1>Get Instant Food</h1>
                    <p>get declious food.win prizes.get food very fast</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFYkEIdo-HfLD0zJwhus_4aNcyQYk-JAveQ&s" className="panner"/>
                </div>
                
                <div className="three">
                    <div className="three12">
                    <div className="food_delivery">
                        <h1>Food Delivery</h1>
                        <p>FROM Resturants</p>
                        <p className="span">UP To 60% OFF</p>
                        <div className="food1">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" className="image2" />
                        </div>
                    </div>
                    <div className="food_delivery">
                        <h1>INSTAMART</h1>
                        <p>Instant Grocery</p>
                        <p className="span">UP To 60% OFF</p>
                        <div className="food1">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" className="image2" />
                        </div>
                    </div>
                </div>    
                <div className="three12">
                <div className="food_delivery">
                        <h1>DINEOUT</h1>
                        <p>EAT OUT & SAVE MORE</p>
                        <p className="span">UP To 60% OFF</p>
                        <div className="food1">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" className="image2" />
                        </div>
                    </div>
                    <div className="food_delivery">
                        <h1>MALL</h1>
                        <p>ONLINE SHOPPING</p>
                        <p className="span">UP To 50% OFF</p>
                        <div className="food1">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" className="image2" />
                        </div>
                    </div>
                    </div>
                        
                    
                    
                    
                
                </div>
                <div className="footer">
                    <div className="oneTwo">
                   <button >
                    Swiggy
                   </button>
                
               
              
                    </div>
                    <div className="oneTwo">
                   <button onClick={this.getHome}>
                    Home
                   </button>
                
               
              
                    </div>
                    <div className="oneTwo">
                   <button onClick={this.getInstaMart}>
                    Instamart
                   </button>
                
               
              
                    </div>
                  
                    
                </div>
            </div>
        )
    }
}
export default Home;