import React,{useState} from 'react'
import Image from 'next/image'

const MenuModal = ({menu}) => {
    const [extraPrice, setExtraPrice] = useState(0);


    const changePrice = (number) => {
        setExtraPrice(extraPrice + number);
    };

    const handleExtraChange = (e, option) => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(option.extraOptionPrice);
        } else {
            changePrice(-option.extraOptionPrice);
        }
    };


  return (
    <>
   
    {menu.map((item) => (
        <div className="menuModal modal fade" id={item.title.replace(/ +/g, "")} tabIndex="-1" aria-labelledby="fooditemLabel" aria-hidden="true" key={item.id}>
            <div className="modal-dialog ">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-header food-modal-header"></div>
                    <h5 className="modal-title food-card-title py-3 text-center" id="fooditemLabel">
                        {item.title}
                    </h5>
                    <div className="modal-body">
                        <div className="card">
                        <Image src={item.image} width={460} height={330} alt={item.title} />

                            <p className="py-4">{item.description}</p>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5>Choice of {item.title}</h5>
                                                </li>
                                                <li>
                                                    <small>Required </small>
                                                </li>
                                            </ul>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            {item.menu_choice?.map((choice, index) => {
                                                return (
                                                    <div className="form-check py-2" key={index}>
                                                        <input className="form-check-input                                                                 "
                                                          type="checkbox"
                                                           value={choice}
                                                            id={index}
                                                            />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            {choice}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo"
                                        >
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5>Choice of {item.title} Preparation</h5>
                                                </li>
                                                <li>
                                                    <small>Required </small>
                                                </li>
                                            </ul>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            {item.preparation?.map((preparation, index) => {
                                                return (
                                                    <div className="form-check py-2" key={index}>
                                                        <input className="form-check-input"
                                                         type="checkbox"
                                                         value={preparation}
                                                         name={preparation}
                                                         id={index} />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault5">
                                                            {preparation}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree"
                                        >
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5>Extras</h5>
                                                </li>
                                            </ul>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            {item.extraOptions?.map((option) => (
                                                <div className="form-check py-2" key={option._id}>
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={option.extraTitle} 
                                                                name={option.extraTitle}
                                                                value={option.extraTitle}
                                                                onChange={(e) => handleExtraChange(e, option)}
                                                            />
                                                            <label className="form-check-label" htmlFor={option.extraTitle}>
                                                                {option.extraTitle}{" "}
                                                            </label>
                                                        </div>
                                                        <div className="col-2"></div>
                                                        <div className="col-2">
                                                            <label className="form-check-label" htmlFor={option.extraTitle}>
                                                                <p>+${option.extraOptionPrice}</p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h5 className="text-center">Special Instructions</h5>
                                    <form>
                                        <div className="form-floating mt-2 mb-3">
                                            <input type="text" className="form-control" id="floatingInput"  />
                                            <label htmlFor="floatingInput">Add note(eg. add extra veggies)</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                        <button type="button" className="main_btn" data-bs-dismiss="modal" >
                            Add to Cart : ${item.price + extraPrice}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ))}

</>
  )
}

export default MenuModal