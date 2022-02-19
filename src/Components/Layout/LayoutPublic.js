import React from 'react'
import PublicFooter from '../Footer/PublicFooter'
import Header from '../Header/Header'

const LayoutPublic = (props) => {
    return (
        <div className='app_container'>
            <Header />
            {props.children}
            <PublicFooter />
        </div>
    )
}

export default LayoutPublic