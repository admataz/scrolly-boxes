import React from 'react';
import Block from './Block';


var colours = [
  '#E86C4E',
  '#666',
  '#FFE074',
  '#71A166',
  '#667FCC'
];

var ylimit = 12,
  scale = 12,
  blocks = [];


function getContainerWidth() {
  return window.innerWidth;
}

function getContainerHeight() {
  return window.innerHeight;
}

function getDocHeight() {
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  return height;
}

function xlimit() {
  var limit = Math.ceil(getContainerWidth() / scale);
  return limit * 4;
}





function makeBlocks(yoffset) {
  var xpos;
  var ypos;
  var xoffset = 0;
  var yoffset = 0;




  if (!blocks.length) {
    for (let y = 1; y < ylimit; y++) {
      for (let x = 0; x < (xlimit() / 4); x++) {
        if (y && Math.random() < 0.7) {
          continue;
        }
        if (y % 2) {
          xoffset = scale * 2;
        } else {
          xoffset = 0;
        }
        xpos = 4 * x * scale - xoffset;
        ypos = (y * scale - scale);
        blocks.push({
          x: x,
          y: y,
          xpos: xpos,
          ypos: ypos,
          xoffset: xoffset,
          yoffset: yoffset,
          fillColour: colours[Math.floor(Math.random() * colours.length)],
          randomizer: Math.ceil(Math.random() * 100),
          key: 'block-' + x + '-' + y
        }

        );
      }
    }
  }

  return blocks;
}



class BlockContainer  extends React.Component {
  

  getViewBox() {
    return "0 0 " + xlimit() * 4 + " " + ylimit;
  };
  
  
  

  render() {
    var y = 0;
    var x = 0;
    var ylimit = ylimit;
    var yoffset = this.props.yoffset;

    return ( <div style={
      {
        position: 'absolute',
        top: '0',
        height: getDocHeight() +'px',
        width: '100%'
      }
      } >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="blocks-svg" viewBox={this.getViewBox()} preserveAspectRatio="xMinYMin meet" >
          {
      _.map(this.props.blocksList, function(itm) {
        return (
          <Block  x={itm.x} y={itm.y} xpos={itm.xpos} ypos={itm.ypos} xoffset={itm.xoffset} yoffset={yoffset} fillColour={itm.fillColour} randomizer={itm.randomizer} key={itm.key} />
        )
      })
      }
      </svg>
      </div>
    )
  }

};


BlockContainer.defaultProps = {
  yoffset:0,
  blocksList: makeBlocks(0)
};


export default BlockContainer;