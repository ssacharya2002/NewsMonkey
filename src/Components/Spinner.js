import React  from 'react'
// import loading from "./loading.gif"
import loader from "./loader.gif"

const  Loading =()=> { 
    return (
      <div className='text-center'>
        {/* <img src={loading} alt="loading"style={{width:"80px"}} /> */}
        <img  src={loader} alt="loader"style={{width:"80px",marginBottom:"20-px",marginTop:"40px"}} />
      </div>
    )
}

export default Loading;