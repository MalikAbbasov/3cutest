import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import "./slider.scss"

function Slider() {

    const data = [
        {
            image: "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg",
            caption: "<h6>Floral</h6> <h2>Excellent bouquets for you</h2>"
        },
        {
            image: "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg",
            caption: "<h4>Fixed-Height Slider</h4> <h2>Excellent bouquets for you</h2>"
        },
        {
            image: "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg",
            caption: "<h4>Floral</h4> <h2>Excellent bouquets for you</h2>"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        color:"#1b745e",
        textShadow: "none"
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
        <div>
            <Carousel
                data={data}
                time={4000}
                width="100vw"
                height="80vh"
                captionStyle={captionStyle}
                slideNumberStyle={slideNumberStyle}
                captionPosition="center"
                automatic={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                style={{
                    textAlign: "center",
                    maxWidth: "100vw",
                    minHeight: "80vh",
                }}
            />

        </div>
    )
}

export default Slider