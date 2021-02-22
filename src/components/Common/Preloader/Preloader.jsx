import React from 'react'
import loader from '../../../assets/images/loading.gif'
import s from './Preloader.module.css'

const Preloader = (props) => {
    return(
        <div className={s.preloader__block}>
            <img src={loader} alt=""/>
        </div>
    )
}

export default Preloader