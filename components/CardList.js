import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const CardList = (props)=>{
return (<div className="flex flex-row ">
    <FontAwesomeIcon icon={props.iconName}/>
    <div className='flex flex-col '>
    
        <div className='mb-1'>
           { props.title}
        </div>
        <div className='grey-400'>
            {props.value}
        </div>
    </div>
</div>
);

}

export default CardList;