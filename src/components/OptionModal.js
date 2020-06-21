import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.onButtonClick}
    contentLabel="Selected Option"  
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.onButtonClick}>Okay</button>
  </Modal>
)

export default OptionModal
