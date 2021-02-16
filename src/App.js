import 'antd/dist/antd.css';
import './App.css';
import Mainpage from "./main/index.js";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import UploadPage from './upload'
import ProductPage from './product'
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons'


function App() {
  const history = useHistory();
  return (
    <div>
        <header>
         <div id="header-area">
           <Link to="/">
             <img src="/img/1024px-Audi_logo_detail.svg.png" alt="logo" id="logo-img" />
            </Link>
            <Button size="large" onClick={function(){
                history.push("/upload")
            }} icon={<DownloadOutlined />}>상품 업로드</Button>
          </div>
        </header>
         <div id="body">
        
        <Switch>
      <Route exact={true} path="/">
        <Mainpage /> 
      </Route >
      <Route exact={true} path="/product/:id">
        <ProductPage />
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage />
      </Route>
     </Switch>
       </div>
     <footer>
     </footer>
    </div>
  );
}

export default App;
