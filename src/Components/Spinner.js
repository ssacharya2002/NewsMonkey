import React, { Component } from 'react'
import loading from "./loading.gif"
import loader from "./loader.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        {/* <img src={loading} alt="loading"style={{width:"80px"}} /> */}
        <img src={loader} alt="loader"style={{width:"80px"}} />
      </div>
    )
  }
}
