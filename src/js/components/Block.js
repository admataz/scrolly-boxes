import React from 'react';
class Block  extends React.Component {
  render() {
    return (
      <g transform ={this.getTransform()} fill={this.props.fillColour} stroke={this.props.strokeColour} strokeWidth={this.props.strokeWidth} >
            <polygon points="2,2 0,1 2,0 4,1" fill={this.props.fillColourTop} className="cubeTop" > </polygon>
            <polygon points="2,2 2,4 0,3 0,1" fill={this.props.fillColourFrontLeft } className="cubeFrontLeft" > </polygon>
            <polygon points="2,2 4,1 4,3 2,4" fill={this.props.fillColourFrontRight} className="cubeFrontRight" > </polygon>
      </g>
      );
  }
  getTransform() {
    return 'matrix(' + this.props.scale + ' 0 0 ' + this.props.scale + ' ' + (this.props.xpos + this.props.xoffset * this.props.randomizer) + ' ' + (this.props.ypos + this.props.yoffset * this.props.randomizer) + ')';
  }
}
Block.defaultProps = {
  scale: 12,
  strokeColour :'#bbb',
  strokeWidth :0.05,
  fillColourFrontLeft : '#fff',
  fillColourFrontRight : '#efefef'
};

export default Block;
