import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
           <nav className="navbar">
              <img className="navbar_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

              <div className="navbar_search">
                    <div className="navbar_searchList">
                        <p>All</p>
                        <ArrowDropDownIcon className="icon" fontSize="small"/>
                    </div>
                    <input type="text" className="navbar_searchBox"/>
                    <SearchIcon className="navbar_searchIcon"/>
                </div>

                <div className="header_nav">
                        <div className="header_option">
                            <span className="header_optionLine1">Hello,Mousoom</span>
                            <span className="header_optionLine2"      
                            >
                               Sign In
                            </span>
                        </div>

                    <div className="header_link">
                        <div className="header_option">
                            <span className="header_optionLine1">Returns</span>
                            <span className="header_optionLine2">& Order</span>
                        </div>
                    </div>

                    {/* link3 */}
                    <div className="header_link">
                        <div className="header_option">
                            <span className="header_optionLine1">Try</span>
                            <span className="header_optionLine2" id="2"
                            >
                                Prime
                                <ArrowDropDownIcon className="icon" fontSize="small"/>
                            </span>
                        </div>
                    </div>

                    <div className="header_link">
                        <div className="header_Cart">
                            <ShoppingCartIcon fontSize="large"/>
                            <span className="header_cartCount">0</span>
                            <span className="cart_Name">Cart</span>
                        </div>
                    </div>
                    </div>
           </nav>
        )
    }
}
