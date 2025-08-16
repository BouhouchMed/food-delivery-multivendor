'use client'

// libraries
import React from "react";

//Componets
import Start from "../../screen-components/un-protected/Home/Start";
import Cities from "../../screen-components/un-protected/Home/Cities";
import Info from "../../screen-components/un-protected/Home/Info";
import EnategaInfo from "../../screen-components/un-protected/Home/LifeWithEnatega";
import GrowBussiness from "../../screen-components/un-protected/Home/GrowBussiness";
import MiniCards from "../../screen-components/un-protected/Home/MiniCards";
import Couriers from "../../screen-components/un-protected/Home/ForCouriers";
import { PaddingContainer } from "../../useable-components/containers";
const Main = () => {  
  
  return (
    <div className="w-screen">
      <Start />
      <PaddingContainer>
        <div className="w-full">
          <Cities />
          <Info />
          <EnategaInfo />
          <GrowBussiness />
          <MiniCards />
          <div className="grid grid-cols-1 md:grid-cols-2 my-[40px] gap-8">
           
          </div>

          <Couriers />
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Main;
