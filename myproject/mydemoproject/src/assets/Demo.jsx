import React from "react";
import bmwm3 from "../assets/bmwm3.jpg";
import bugatti from "../assets/bugatti.jpg";
import lamb from "../assets/lamb.jpg";
import porshe from "../assets/porshe.jpg";

function Demo() {
  return (
    <div className="demo1">
      <div>
        <img className="bmw" src={bmwm3} alt="BMW M3" />
        <h1>BMW M3</h1>
        <p>
          The BMW M3 is a high-performance sports sedan known for its sporty
          design and powerful engine.
        </p>
      </div>

      <div>
        <img className="bugatti" src={bugatti} alt="Bugatti Chiron" />
        <h1>Bugatti Chiron</h1>
        <p>
          A hypercar successor to the Veyron, known for its W16
          quad-turbocharged engine producing around 1,500 PS and 1,600 Nm of
          torque.
        </p>
      </div>

      <div>
        <img className="lamborghini" src={lamb} alt="Lamborghini Huracan" />
        <h1>Lamborghini Huracán</h1>
        <p>
          The Lamborghini Huracán is a V10-powered, two-seater sports car
          known for its striking design, exceptional performance, and advanced
          technology.
        </p>
      </div>

      <div>
        <img className="porsche" src={porshe} alt="Porsche 718" />
        <h1>Porsche 718</h1>
        <p>
          The Porsche 718 Cayman is a high-performance sports car known for
          its sleek design, powerful engine, and advanced technology.
        </p>
      </div>
    </div>
  );
}

export default Demo;
