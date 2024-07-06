import React from 'react'
import LoaderImg from '/src/assets/loaderimage.gif'
import module1 from './loader.module.css'
import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={module1.wrapper}>
        <div className={module1.loader}>
            <img src={LoaderImg}/>
        </div>
    </div>,document.getElementById('loader')
  )
}

export default Loader
