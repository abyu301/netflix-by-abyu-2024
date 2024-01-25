import React from 'react'
import Header from '../../Components/Header/Header'
import Fotter from '../../Components/Fotter/Fotter'
import Baner from '../../Components/Baner/Baner'
import RowList from '../../Components/Rows/RowList/RowList'
function Home() {
    return (
        <>
            <Header />
            <Baner />
            <RowList />
            <Fotter />
        </>
    )
}

export default Home