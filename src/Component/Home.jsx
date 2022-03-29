import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
        <div className='container'>
            <div className='title'>
                <h1>
YOU DESERV  THE BEST LAWYERS 
                </h1>
                <h4>...WITH OVER 30 YEARS OF LAW PRACTICE!</h4>
                <button>CONTACT US</button>
            </div>
        
        <div className='forms'> 
            <form>
                <h2> Need A Lawyer? </h2>
                <h5>Request Your Fast Quote </h5>
                <input type="text" placeholder='Full Name' /><br /><br />

                <input type="text" placeholder='Email Id' /><br /><br />
                <input type="text" placeholder='Phone Number' /><br /><br />
                <input type="text" placeholder='Zip Code' /><br /><br />
                <button>SEND MESSAGE</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Home