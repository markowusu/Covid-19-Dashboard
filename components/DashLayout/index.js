import React from 'react';
import Head from 'next/head';
import react from 'react';
import DashFooter from '../DashFooter';
import Sidebar from "../Sidebar";

import DashHeader from "../DashHeader";
import {render} from "react-dom";

function DashLayout({children,title="Dashboard",footer=false,header=true}){

        return ( 
        <div className="flex flex-row w-full h-full overflow-hidden ">
                <Head>
                    <title> {title} </title>
                    <meta name="description" content="covid-19 dashboard"/>
                </Head>
        {/* <div className="fixed inset-0 flex items-center justify-center opacity-100 bg-[#00000080] backdrop-opacity-100 z-[-1] " ></div> */}

                <Sidebar/>
                <main className={"flex flex-col mx-auto "}>
                {header && <DashHeader/>}

                 <div className="mt-4 ">
                 {children}
                 </div>
                      
                  


                </main>


                {/*{footer && <DashFooter/>}*/}
            </div>
        );


}
export default DashLayout;