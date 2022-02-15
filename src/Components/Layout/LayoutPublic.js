import React from 'react'
import PublicFooter from '../Footer/PublicFooter'
import Header from '../Header/Header'

const LayoutPublic = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <PublicFooter />
        </>
    )
}

export default LayoutPublic