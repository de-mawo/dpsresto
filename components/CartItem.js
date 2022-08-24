import React from 'react'
import { DeleteAlert } from '../utils/Alert';

       

const CartItem = ({ item }) => {


    return (
        <>
           
            <div className="row" key={item.id}>
                <div className="col-4">
                    <ul className="list-unstyled list-inline ">
                        <li className="list-inline-item">                           
                            <i className="ri-add-line"></i>                           
                        </li>
                        <li className="list-inline-item">
                        <p>{item.quantity} </p>
                        </li>
                        <li className="list-inline-item">
                            <i className="ri-subtract-fill"></i>                            
                        </li>
                    </ul>
                </div>

                <div className="col-5">
                    <p>{item.title}</p>
                </div>
                <div className="col-2">
                    <p>${item.price}</p>
                </div>
                <div className="col-1 delete_btn">
                    <i
                    onClick={() => DeleteAlert("Item")}
                        className="ri-delete-bin-5-line "                       
                    ></i>
                </div>
                
            </div>

            <style jsx>
                {`
                    .changeQty {
                        border-radius: 8px;
                        border: none;
                        background-color: #ffe162;
                    }
                    .changeQty {
                        color: white;
                    }
                `}
            </style>
        </>
    );
};

export default CartItem;