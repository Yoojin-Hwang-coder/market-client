import React from 'react';
import './index.css';
import axios from 'axios'
import { Link } from 'react-router-dom';


function Mainpage(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(function(){
        axios.get('https://cedbadfd-d874-42f2-af16-fa3afa683a8b.mock.pstmn.io/product')
        .then(function(result){
            const products = result.data.products;
            setProducts(products);
        }).catch(function(error){
            console.error(error);
        })
    },[]);
   

    return (
    <div> 
        <div> 
        <header>
         <div id="header-area">
            <img src="./img/1024px-Audi_logo_detail.svg.png" alt="logo" id="logo-img" />
          </div>
        </header>
         <div id="body">
        <div id="banner">
        </div>
        <h1>판매상품</h1>
        <div id="product-list">
            {products.map(function(product, index){
                    return (
                      
                     <div className="product-card">
                        <Link className="product-link" to={`/product/${index}`}>
                         <div>   
                         <img className="product-img" src={product.imgUrl}/>
                         </div>
                         <div className="product-contents">
                          <span className="product-name">{product.name}</span>
                          <span className="product-price">{product.price}원</span> 
                         <div className="product-seller">
                            <img className="product-avatar" src="img/580b57fcd9996e24bc43c53e.png" />
                            <span>트위터</span>
                         </div>
                         </div>
                        </Link>
                     </div>
                     
                    );    
               })
            }
        </div>     
         </div>
        </div>
        <footer>
        </footer>
    </div>
    );
}


export default Mainpage;
