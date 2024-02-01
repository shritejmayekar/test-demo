import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Home = () => {

    return (
        <>
            <Header/>
            <div className='main-content'>
                <h1>Home</h1>
            </div>
           <Footer/>
        </>
    )
}
export default Home;