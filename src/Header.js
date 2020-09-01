import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';


function Header() {
   
//    come here later to see
   const [{basket,user}] = useStateValue();
   console.log(basket)

   const login = () =>{
       if(user){
        auth.signOut();
       }
    }

    return (
        <nav className='header'>
            {/* logo at top left corner */}
            <Link to='/'>
            <img className='header_logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="logo of amazon">
            </img>
            </Link>
            {/* search box */}
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon' />
             </div>
            {/* 3 links */}
            <div className='header_nav'>
                {/* 1 link */}
                <Link to={!user && './login'} className='header_link'>
                    <div onClick={login} className='header_option' >
                        <span className='header_optionLineone'>Hello {user?.email} </span>
                        <span className='header_optionLinetwo'>{user?"Sign Out":"Sign in"} </span>
                    </div>
                </Link>
                {/* 2 link */}
                <Link to='./' className='header_link'>
                    <div className='header_option' >
                        <span className='header_optionLineone'>Returns</span>
                        <span className='header_optionLinetwo'>& orders</span>
                    </div>
                </Link>
                {/* 3 link */}
                <Link to='./' className='header_link'>
                    <div className='header_option' >
                        <span className='header_optionLineone'>Your</span>
                        <span className='header_optionLinetwo'>Prime</span>
                    </div> 
                </Link>
                {/* link 4 shoppping basket */}
                <Link to='./checkout' className='header_link'>
                    <div className='header_optionBasket' >
                        <ShoppingBasketIcon />
                        <span className='header_optionLinetwo  header_basketcount'>{basket?.length}</span>
                    </div> 
                </Link>
                

            </div>
            {/* basket with numbers */}
            
        </nav>
    )
}

export default Header
