import React from 'react'
import Header from './Header'
import './Index.css'
import Content from './Content'

const Index = () => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Content />
            </div>
        </>
    )
}

export default Index