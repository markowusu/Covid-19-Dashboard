import React from 'react';

const HeaderSection = ({children})=>{
    return (
        <div className='flex items-center justify-between '>
      {children}
    </div>
    );

};


export default HeaderSection;