import React from "react";

const Pagination = () => {
    return (
        <>
            <div className="container">
                <div className="pagination_area text-center pb-70">
                    <a href="#" className="prev pg_arrow">
                        <i className="ri-arrow-left-s-line"></i>
                        Previous
                    </a>

                    <a href="#" className="pg_number">
                        1
                    </a>
                    <span className="pg_number current" aria-current="page">
                        2
                    </span>
                    <a href="#" className="pg_number">
                        3
                    </a>

                    <a href="#" className="next pg_arrow">
                        Next
                        <i className="ri-arrow-right-s-line"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Pagination;
