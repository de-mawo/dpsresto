import React, { useState } from 'react'
import DashHeader from '../components/Dashboard/DashHeader'
import CustomerSideBar from '../components/User/CustomerSideBar'
import GeneralInfo from '../components/User/GeneralInfo'
import PastOrders from '../components/User/PastOrders'
import MetaSeo from '../utils/MetaSeo'

const MyAccount = () => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
      setShow(!show);
  };
  return (
   <>
   <MetaSeo title={`My Account`} />
   <DashHeader show={show} showSideBar={showSideBar} />
   <CustomerSideBar show={show} />
   <main className={`dash_container  ${show ? "add_body_padding" : " "} `}> 
   
   <GeneralInfo/>
    <PastOrders/> 
             
  
            </main>
    

   
   </>
  )
}

export default MyAccount