import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import $ from 'jquery';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA



// $(window).scroll(function() {
//   var top = $(window).scrollTop();
//   if(top===0){
//  $('#logo-text').css({
//    'color':'#495057',
//    'background':'none',
//    'border':'none',
//                      });
//  $('#darkblue').css('visibility','hidden');
//  $('#blue').css('visibility','hidden');
//  $('#lightblue').css('visibility','hidden');
//  $('#purple').css('visibility','hidden');
//  $('#lightred').css('visibility','hidden');
//  $('#red').css('visibility','hidden');
//  $('#darkred').css('visibility','hidden');
//   }
//   if (top > 1) {
//  $('#darkblue').css('visibility','visible');
//  $('#blue').css('visibility','hidden');
//  $('#lightblue').css('visibility','hidden');
//  $('#purple').css('visibility','hidden');
//  $('#lightred').css('visibility','hidden');
//  $('#red').css('visibility','hidden');
//  $('#darkred').css('visibility','hidden');
//   }
//   if(top>41){
//  $('#blue').css('visibility','visible');
//   }
//   if(top>81){
//  $('#lightblue').css('visibility','visible');
//  $('#logo-text').css({
//    'color':'#495057',
//    'background':'#FFEFEA',
//    'border':'1px solid #495057',
//    });
//  $('.logo-text-mobile').css({
//    'border':'none',
//    });
//   }
//   if(top>121){
//  $('#purple').css('visibility','visible');
//   }
//   if(top>161){
//  $('#lightred').css('visibility','visible');
//   }
//   if(top>201){
//  $('#lightred').css('visibility','visible');
//   }
//   if(top>241){
//  $('#red').css('visibility','visible');
//   }
//   if(top>281){
//  $('#darkred').css('visibility','visible');
//   }
// });
