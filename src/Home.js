import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img className='home_image' 
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
            alt="banner"/>

            {/* product  id title price rating image */}
            <div className='home_row'>
            <Product 
             id ="0001"
             title ="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
             price= {37999}
             rating={5}
             image ="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SX679_.jpg" />
            <Product
            id="0002"
            title="Harry Potter and the Philosopher's Stone"
            price={300}
            rating={4}
            image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
            />
        </div>
        <div className='home_row'>
            <Product 
             id ="0003"
             title ="GoPro HERO7 Black — Waterproof Action Camera with Touch Screen 4K Ultra HD Video 12MP Photos 720p Live Streaming Stabilization"
             price= {27903}
             rating={5}
             image ="https://m.media-amazon.com/images/I/51CDZ2fymtL._AC_UY327_FMwebp_QL65_.jpg" />
            <Product 
             id ="0004"
             title ="boAt Rockerz 400 Bluetooth Headphone with Super Extra Bass, Up to 8H Playtime, Dual Connectivity Modes, Foldable Earcups and Lightweight Design (Black/Blue)"
             price= {1399}
             rating={4}
             image ="https://m.media-amazon.com/images/I/61TqvJ3mYPL._AC_UY218_.jpg" /> 
            <Product 
             id ="0005"
             title ="The Alchemist"
             price= {200}
             rating={5}
             image ="https://images-eu.ssl-images-amazon.com/images/I/410llGwMZGL._AC_SY200_.jpg" />
        </div>
        <div className='home_row'>
            <Product 
             id ="0006"
             title ="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
             price= {239999}
             rating={4}
             image ="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
            </div>
            <div className='home_row'>
            <Product 
             id ="0007"
             title =" Nike 25 Ltrs Medium Blue/Black/White School Backpack (BA5273-441)"
             price= {2544}
             rating={5}
             image ="https://m.media-amazon.com/images/I/91lMh0oODbL._AC_UL480_FMwebp_QL65_.jpg" />
            <Product
            id="0008"
            title="Steve Jobs: The Exclusive Biography Paperback – 11 February 2015"
            price={545}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41LcuCqSeJL._SX317_BO1,204,203,200_.jpg"
            />
             <Product 
             id ="0009"
             title ="Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black"
             price= {46990}
             rating={4}
             image ="https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg" />
             </div> 
            <div className='footer'>
              Created for education purpose using React by Prathmeh Jagtap
            </div>
        </div>
    )
}

export default Home;
