import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './demo1_props';
// import App from './demo2_refs不推荐';
import App from './demo3 on_off_trigger方式 掌握思想';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// a 删除
// b,c 更新
// d 创建
