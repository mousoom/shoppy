import React from 'react';
import "./Footer.css";

// material-ui icons
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function Footer() {
    const handleClick = () => {
        // smooth scroll to top
        window['scrollTo']({ top:0, behavior: 'smooth'})  
    }
    
    return (
        <div className="main_footer">

            {/* Footer-1 */}
            <div className="footer1" onClick={handleClick}>
                Back to top
            </div>


            {/* Footer-2 START*/}
            <div className="footer2">

                {/* Column-1 of Footer-2*/}
                <div className="column1">
                    Get to Know Us
                    <br/>
                    <span>
                        About Us
                        <br/>
                        Careers
                        <br/>
                        Press Releases
                        <br/>
                        Amazon Cares
                        <br/>
                        Gift a Smile
                    </span>
                </div>

                {/* Column-2 of Footer-2 */}
                <div className="column2">
                 Connect with Us
                    <br/>
                    <span>
                        Facebook
                        <br/>
                        Twitter
                        <br/>
                        Instagram
                    </span>
                </div>

                {/* Column-3 of Footer-2 */}
                <div className="column3">  	
                    Make Money with Us
                    <br/>
                    <span>
                        Sell on Amazon
                        <br/>
                        Sell under Amazon Accelerator
                        <br/>
                        Become an Affiliate
                        <br/>
                        Fulfilment by Amazon
                        <br/>
                        Advertise Your Products
                        <br/>
                        Amazon Pay on Merchants
                    </span>
                </div>

                {/* Column-4 of Footer-2 */}
                <div className="column4">
                     Let Us Help You
                    <br/>
                    <span>
                        COVID-19 and Amazon
                        <br/>
                        Your Account
                        <br/>
                        Return Centre
                        <br/>
                        100% Purchase Protection
                        <br/>
                        Amazon App Download
                        <br/>
                        Amazon Assistant Download
                        <br/>
                        Help
                    </span>
                </div>
            </div>
            {/* Footer-2 ENDS */}


            {/* Footer-3 STARTS ( for horizontal line ) */}
            <div className="footer3"></div>
            {/* Footer-3 ENDS */}


            {/* Footer-4 STARTS */}
            <div className="footer4">

                {/*  Amazon Logo  */}
                <img className="footer_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
                
                {/* Language Box */}
                <div className="global">
                    <LanguageIcon className="language"/>
                    <span>English</span>
                    <div className="top-bottom">
                    <ArrowDropUpIcon className="top"/>
                    <ArrowDropDownIcon className="bottom"/>
                    </div>
                </div>
            </div>
            {/* Footer-4 ENDS */}


            {/* Footer-5 START */}
            <div className="footer5">
                   <span>Australia</span>
                   <span>Brazil</span>
                   <span>Canada</span>
                   <span>China</span>
                   <span>Germany</span>
                   <span>Italy</span>
                   <span>France</span>
                   <span>Japan</span>
                   <span>Mexico</span>
                   <span>Netherlands</span>
                   <span>Singapore</span>
                   <span>Spain</span>
                   <span>United Arab Emirates</span>
                   <span>United Kingdom</span>
                   <span>United States</span>
            </div>
            {/* Footer-5 ENDS */}


            {/* Footer-6 STARTS */}
            <div className="footer6">
                {/* Footer-6 Container */}
                <div className="footer6_container">
                    
                    <div className="column1">
                        <div className="top">
                            AbeBooks
                            <span>
                                Books, art 
                                <br/>
                                & collectibles
                            </span>
                        </div>
                        <div className="bottom">
                            Shopbop
                            <span>
                                Designer 
                                <br/>
                                Fashions Brands
                            </span>
                        </div>
                    </div>

                    <div className="column2">
                        <div className="top">
                            Amazon Web Services
                            <span>
                                Scalable Cloud 
                                <br/>
                                Computing Services 
                            </span>
                        </div>
                        <div className="bottom">
                            Amazon Business
                            <span>
                                Everything For 
                                <br/>
                                Your Business
                            </span>
                        </div>
                        </div>

                    <div className="column3">
                        <div className="top">
                            Audible
                            <span>
                                Download
                                <br/>
                                Audio Books
                            </span>
                        </div>
                        <div className="bottom">
                            Prime Now
                            <span>
                                2-Hour Delivery
                                <br/>
                                on Everyday Items
                            </span>
                        </div>
                    </div>
                    
                    <div className="column4">
                        <div className="top">
                            DPReview
                            <span>
                                Digital
                                <br/>
                                Photography
                            </span>
                        </div>
                        <div className="bottom">
                            Amazon Prime Music
                            <span>
                                60 millions songs
                            </span>
                            </div>
                        </div>

                    <div className="column5">
                    <div className="top">
                            IMDb
                            <span>
                                Movies, TV
                                <br/>
                                & Celebrities
                            </span>
                        </div>
                    </div>

                </div>
            </div>


            <div className="footer7">
                <div className="footer7_container">
                    <span className="partA">Conditions of Use & Sale</span>
                    <span className="partB">Privacy Notice</span>
                    <span className="partC">Interest-Based Ads</span>
                    <span className="partD">© 1996-2020, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
