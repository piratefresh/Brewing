import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  margin: -2% auto;
  padding: 0 2%;
  max-width: 65vw;
  position: relative;
  padding-bottom: 5%;
  font-family: 'Open Sans', sans-serif;
`
const Hero = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 70vh;
  img {
    position: absolute;
    top: 25%;
    left: 0%;
    margin-right: 10%;
    height: 600px;
    z-index: 2;
  }
  h1 {
    color: #fff;
  }
  h3 {
    color: #4d3d0a;
  }
`
const Details = styled.div`
  p {
    width: 30vw;
    color: #4d3d0a;
    height: 30vh;
    overflow: hidden;
  }
  span {
    color: #4d3d0a;
  }
  ::after {
    content: '';
    background-image: url('https://res.cloudinary.com/da91pbpmj/image/upload/v1547113998/border-torn-top.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    position: absolute;
    top: 95%;
    left: 0;
    height: 60px;
    z-index: 1;
  }
`
const Content = styled.div`
  margin-top: 15%;
  h2 {
    text-align: center;
    color: #6e580e;
  }
  .ingredients {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    p {
      padding: 0;
      margin-bottom: 2%;
    }
    span {
      justify-self: flex-end;
      color: #6e580e;
      text-transform: uppercase;
    }
  }
`
const Gallery = styled.div`
  display: grid;
  background: #3b9089;
  padding: 5%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
  margin-top: 5%;
`

class BeerTemplate extends Component {
  render() {
    const beer = this.props.data.wordpressWpBeers
    console.log(beer)

    return (
      <Layout>
        <Container>
          <Hero style={{ backgroundImage: `url(${beer.acf.backgroundImg})` }}>
            <img src={beer.acf.bottleImg} alt="test" />
            <Details>
              <h1 dangerouslySetInnerHTML={{ __html: beer.title }} />
              <h3>
                <span>Abv:</span> {beer.acf.abv}%
              </h3>
              <h3>
                <span>Type:</span> {beer.acf.type}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: beer.content }} />
            </Details>
          </Hero>
          <Content>
            <h2>Beer Stats</h2>
            <div className="ingredients">
              <span>Malts:</span>
              <p>{beer.acf.malts}</p>
            </div>
            <div className="ingredients">
              <span>Hops:</span>
              <p>{beer.acf.hops}</p>
            </div>
            <div className="ingredients">
              <span>Gravity:</span>
              <p>{beer.acf.gravity}</p>
            </div>
            <div className="ingredients">
              <span>Gravity:</span>
              <p>{beer.acf.gravity}</p>
            </div>
          </Content>
          <Gallery>
            <img
              src="https://scontent.cdninstagram.com/vp/8b558948d5a9c848529e92b30d0ad752/5CCDAA0B/t51.2885-15/e35/p320x320/47584158_129348691425788_9175667492470162562_n.jpg?_nc_ht=scontent.cdninstagram.com"
              alt=""
            />
            <img
              src="https://scontent.cdninstagram.com/vp/8b558948d5a9c848529e92b30d0ad752/5CCDAA0B/t51.2885-15/e35/p320x320/47584158_129348691425788_9175667492470162562_n.jpg?_nc_ht=scontent.cdninstagram.com"
              alt=""
            />
            <img
              src="https://scontent.cdninstagram.com/vp/8b558948d5a9c848529e92b30d0ad752/5CCDAA0B/t51.2885-15/e35/p320x320/47584158_129348691425788_9175667492470162562_n.jpg?_nc_ht=scontent.cdninstagram.com"
              alt=""
            />
            <img
              src="https://scontent.cdninstagram.com/vp/8b558948d5a9c848529e92b30d0ad752/5CCDAA0B/t51.2885-15/e35/p320x320/47584158_129348691425788_9175667492470162562_n.jpg?_nc_ht=scontent.cdninstagram.com"
              alt=""
            />
          </Gallery>
        </Container>
      </Layout>
    )
  }
}

BeerTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BeerTemplate

export const beerQuery = graphql`
  query currentBeerQuery($id: String!) {
    wordpressWpBeers(id: { eq: $id }) {
      title
      content
      acf {
        cloudinary
        abv
        backgroundImg
        bottleImg
        type
        description
        malts
        hops
        yeast
        gravity
      }
    }
  }
`
