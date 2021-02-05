import React,{ }from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Inicio() {

  return (

  <div>
      <h1>BIENVENIDO A "ShoesTour"</h1>
      <h3>La página más segura de Mexico en venta de tenis</h3>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../image/n.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>"Precio Cálidad y Confianza"</h2>
              <p>Conoce toda nuestra variedad de tenis exclusivos, solo aquí.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="../image/no.jpg"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
              <h2>"Precio Cálidad y Confianza"</h2>
              <p>Conoce toda nuestra variedad de tenis exclusivos, solo aquí.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../image/si.jpeg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h2>"Precio Cálidad y Confianza"</h2>
              <p>Conoce toda nuestra variedad de tenis exclusivos, solo aquí.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

    </div>
  );
}


export default Inicio;