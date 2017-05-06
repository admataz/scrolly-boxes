import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';

import style from './style/main.scss';
import Block from './js/components/Block';
import BlockContainer from './js/components/BlockContainer';






function getYOffset() {
  var doc = document.documentElement;
  // var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  return top/10;
}




window.addEventListener('scroll', function(evt) {
  ReactDom.render(<BlockContainer  yoffset={getYOffset()} />, d);
});

var d = document.getElementById('blocks');
if (d) {
  ReactDom.render(<BlockContainer yoffset={getYOffset()} />, d);
}
