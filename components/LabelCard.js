  import React from 'react';
  import classNames from 'classnames';
  
  const LabelCard = (props)=>{
    return (
        <div className={classNames('px-2 mb-2 font-sans text-sm font-medium text-gray-600 bg-white border-2 border-white rounded shadow-sm hover:shadow-lg hover:text-gray-900 hover:border-gray-100',{'border-gray-100  shadow-lg text-gray-900':props.activate})}  onClick={props.onClick} >
                {props.text}
                </div>
    ); 
}

export default LabelCard;