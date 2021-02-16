
import { useParams }from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css'

function ProductPage(){
    const { id } = useParams();
    const[product, setProduct] = useState(null);
    useEffect(function(){
        axios.get(`https://cedbadfd-d874-42f2-af16-fa3afa683a8b.mock.pstmn.io/product/${id}`)
    .then(function(result){
        setProduct(result.data);
        
    }).catch(function(error){
        console.log(error);
    })
    },[]);
    
    if(product===null){
        return <h1>상품 준비중 입니다.</h1>
    }
    
    return ( 
    <div>
      <div id="image-box">
        <img scr={product.imgUrl} />
      </div>
      <div id="profile-box">
        <img src="/img/580b57fcd9996e24bc43c53e.png" />
        <span>트위터</span>
      </div>
      <div id='contents-box'>
          <div id="name">{product.name}</div>
          <div id="price">{product.price}원</div>
          <div id='createdAt'>2021년 2월 1일</div>
          <div id="description">{product.description}</div>
      </div>
    </div>
    ) 
}

export default ProductPage;