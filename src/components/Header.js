import { useContext } from "react";
import NavBar from "./NavBar";
import {Link}from "react-router-dom"
import products from "../json/products.json"
import { StoreContext } from "../store"
import { SET_PAGE_TITLE, SET_PAGE_CONTENT, SET_NAVBAR_ACTIVEITEM } from "../utils/constants"
export default function Header({title}) {
    
    const { dispatch } = useContext(StoreContext);
    const onClickHeader = () => {
        dispatch({ 
           type: SET_PAGE_TITLE, 
           payload: "NORDIC NEST Shopping Cart" 
        });
        dispatch({ 
           type: SET_PAGE_CONTENT, 
           payload: products, 
        });      
        dispatch({ 
            type: SET_NAVBAR_ACTIVEITEM, 
            payload: "/",
         }); 
     };
    return (
        <div className="header" onClick={onClickHeader}>
            <Link to="/">
            <h1 className="header-title">
                {title}
            </h1>
            </Link>

            <p
                className="header-slogan">
                An example made by Create-React-App.
            </p>
                <hr className="hr-header-line " />
                <NavBar/>
        </div>
    );
}