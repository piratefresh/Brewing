import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

import './styles/styles.css'

const Item = styled(Link)`
  display: flex;
  box-sizing: border-box;
  float: left;
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  h3 {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
  img {
    min-width: 100%;
    height: 330px;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }
`
const masonryOptions = {
  transitionDuration: 0,
  percentPosition: true,
  columnWidth: '.grid-sizer',
}

class Gallery extends Component {
  render() {
    const childElements = this.props.data.map((obj, index) => {
      return (
        <Item
          to={
            obj.node.type !== 'post' ? 'events/' + obj.node.slug : obj.node.slug
          }
          key={obj.node.id}
          style={index % 4 === 0 ? { width: '66.666%' } : { width: '33.333%' }}
        >
          <h3>{obj.node.title}</h3>
          <img src={obj.node.acf.cloudinary} alt={obj.node.title} />
        </Item>
      )
    })

    return (
      <Masonry
        className="Gallery"
        options={masonryOptions}
        updateOnEachImageLoad={true}
      >
        <div className="grid-sizer" />
        {childElements}
      </Masonry>
    )
  }
}

export default Gallery
