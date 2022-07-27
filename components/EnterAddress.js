import React from 'react'

const EnterAddress = () => {
  return (
    <>
    <div className="container " >
                <div className="search_location ">
                    <input placeholder="Enter Your Address"  />
                    <i className= "bx bx-x fs-2 icon_home "  ></i>
                    
                        <button
                            className="find_food_btn"
                            
                        >
                            {" "}
                         Add Location
                        </button>
                  
                     
                    
                </div>
            </div>
    
    </>
  )
}

export default EnterAddress