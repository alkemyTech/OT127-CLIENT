import React from 'react'
import PublicFooter from '../Footer/PublicFooter'
import Header from '../Header/Header'

const LayoutPublic = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <PublicFooter />
        </>
    )
}

export default LayoutPublic