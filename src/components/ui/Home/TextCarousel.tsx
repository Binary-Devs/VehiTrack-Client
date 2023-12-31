import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function TextCarousel() {
    const data =[
        {
            details:"",
            
        }
    ]
  return (
    <div className="my-5">
      <Carousel autoplay>
        <div>
          <h3 >1</h3>
        </div>
        <div>
          <h3 >2</h3>
        </div>
        <div>
          <h3 >3</h3>
        </div>
        <div>
          <h3 >4</h3>
        </div>
      </Carousel>
    </div>
  );
}
