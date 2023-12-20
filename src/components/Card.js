import React from 'react';
const Card=()=>{
    return(
        <div className="carddiv">
        <img  class='image' src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='home' height='700px' width='680px'></img>
        <div className='textcard'>
            <div className='textgrey'>
            <h2>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit. Tempore,<br></br> debitis.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!<br></br> Quidem est esse numquam odio deleniti, beatae, magni dolores provident <br></br>quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
            <button className='textbutton'>Get in Touch</button>
            </div>
        </div>
        </div>
    )
}
export default Card;