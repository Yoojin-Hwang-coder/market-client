import './index.css';
import axios from 'axios'


function Mainpage(){
    axios.get('https://cedbadfd-d874-42f2-af16-fa3afa683a8b.mock.pstmn.io/product')
    .then(function(result){
        console.log(result);
    }).catch(function(error){
        console.error(error);
    })

    return (
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
            <div className="product-card">
                <div>
                    <img className="product-img" src="img/png-clipart-orange-basketball-basketball-ball-sports-basketball.png"/>
                </div>
                <div className="product-contents">
                    <span className="product-name">농구공</span>
                    <span className="product-price">50000원</span> 
                    <div className="product-seller">
                        <img className="product-avatar" src="img/580b57fcd9996e24bc43c53e.png" />
                        <span>트위터</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <footer>
        </footer>
    </div>
    );
}


export default Mainpage;