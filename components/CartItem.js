import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Delete this item from Cart',
        text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1d1d1d",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'The item has been deleted',
                'success'
              )
            }
          })
}
       
       

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
                    onClick={alertContent}
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