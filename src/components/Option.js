import React from 'react';

const Option = (props) => (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => props.handleDeleteOption(props.optionText)}
      >
        Remove
      </button>
    </div>
)

export default Option;