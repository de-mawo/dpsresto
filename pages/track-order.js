import React from 'react'
import MetaSeo from '../utils/MetaSeo'
import Image from 'next/image'
import Link from 'next/link'

const TrackOrder = () => {
  return (
    <>
    <MetaSeo title={`Track Order`} />
          <div className="container-fluid  track_order ">
              <div className="container container_box mt-5">
                  <p className="text-center">#ODPS251</p>

                  <div className="  progress-bar-2  text-center">
                      <ul className="list-unstyled ">
                          <li>
                              <Image src="/img/trackOrder/order.png" width={64} height={64} alt="img" />
                              Order Placed
                              <i className="ri-check-fill active"></i>
                          </li>
                          <li>
                              <Image src="/img/trackOrder/cooking.png" width={64} height={64} alt="img" />
                              Preparation
                              <i className="ri-refresh-line pending"></i>
                          </li>
                          <li>
                              <Image src="/img/trackOrder/delivery.png" width={64} height={64} alt="img" />
                              Out on Delivery
                              <i className="ri-refresh-line pending"></i>
                          </li>
                          <li>
                              <Image src="/img/trackOrder/double-tick.png" width={64} height={64} alt="img" />
                              Delivered
                              <i className="ri-refresh-line pending"></i>
                          </li>
                      </ul>
                      <Link href="/menu">
                      <a  className="ms-5 mb-3 main_btn">
                          {" "}
                          Order More
                      </a>
                      </Link>
                      
                  </div> 
              </div>
          </div>
    </>
  )
}

export default TrackOrder