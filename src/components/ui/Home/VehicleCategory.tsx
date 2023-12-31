import { Col, Row } from "antd";
import Image from "next/image";
import a from '../../../assets/1c.png';
import b from '../../../assets/2c.png';
import c from '../../../assets/3c.png';
import d from '../../../assets/4c.png';
import e from '../../../assets/5c.png';
import f from '../../../assets/7c.png';

export default function VehicleCategory() {
    const data = [
        {
          // img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:a,
          title: "Fully Secured",
          details:
            "Felis platea ipsum volutpat orci nec iaculis lorem viverra elitphasellus praesent sodales sagittis vehicula posuere ut magna facilisis congue laoreet maximus  facilisis dignissim  facilisis dignissim  ",
        },
        {
          // img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:b,
          title: "Multiple Language",
          details:
            "Taciti integer dolor dis risus erat lectus condimentum urna facilisi augue id mauris curabitur sem praesent sollicitudin molestie egestas consequat  facilisis dignissim  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:c,
          title: "Refueling System",
          details:
            "Pellentesque turpis dictumst dictum rutrum suspendisse velit taciti pretium neque placerat tempor netus sit dui posuere blandit quisque libero sagittis accumsan consequat  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:d,
          title: "Performance Evaluation",
          details:
            "Sapien magnis donec quis consequat massa amet est penatibus nisi egestas laoreet euismod ligula luctus nibh taciti sollicitudin id facilisis nec lobortis arcu conubia rutrum  facilisis dignissim  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:e,
          title: "100% Responsive",
          details:
            "TMagna massa mattis turpis finibus eleifend donec dapibus rhoncus libero tincidunt phasellus porta natoque integer aliquet nostra semper velit parturient magnis nibh enim feugiat diam a quam",
        },
        {
          // img: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:f,
          title: "Notification System",
          details:
            "Felis platea ipsum volutpat orci nec iaculis lorem viverra elitphasellus praesent sodales sagittis vehicula posuere ut magna facilisis congue laoreet maximus  facilisis dignissim  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:a,
          title: "Fully Secured",
          details:
            "Felis platea ipsum volutpat orci nec iaculis lorem viverra elitphasellus praesent sodales sagittis vehicula posuere ut magna facilisis congue laoreet maximus  facilisis dignissim  facilisis dignissim  ",
        },
        {
          // img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:b,
          title: "Multiple Language",
          details:
            "Taciti integer dolor dis risus erat lectus condimentum urna facilisi augue id mauris curabitur sem praesent sollicitudin molestie egestas consequat  facilisis dignissim  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:c,
          title: "Refueling System",
          details:
            "Pellentesque turpis dictumst dictum rutrum suspendisse velit taciti pretium neque placerat tempor netus sit dui posuere blandit quisque libero sagittis accumsan consequat  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:c,
          title: "Refueling System",
          details:
            "Pellentesque turpis dictumst dictum rutrum suspendisse velit taciti pretium neque placerat tempor netus sit dui posuere blandit quisque libero sagittis accumsan consequat  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:d,
          title: "Performance Evaluation",
          details:
            "Sapien magnis donec quis consequat massa amet est penatibus nisi egestas laoreet euismod ligula luctus nibh taciti sollicitudin id facilisis nec lobortis arcu conubia rutrum  facilisis dignissim  facilisis dignissim ",
        },
        {
          // img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:e,
          title: "100% Responsive",
          details:
            "TMagna massa mattis turpis finibus eleifend donec dapibus rhoncus libero tincidunt phasellus porta natoque integer aliquet nostra semper velit parturient magnis nibh enim feugiat diam a quam",
        },
        
        
      ];
  return (
    <section>
      <p className="text-3xl text-center font-bold my-4 border-2 px-3 py-2 rounded-xl">Vehicle category</p>
      
          <Row gutter={[16,16]}>
          {data.map((data, key) => (
            <Col key={key} sm={8} md={6}>
            <div  className="gutter-row transition  items-center  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <div className=" rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
                <Image
                  className="w-[7.5rem] h-[6.25rem]"
                  src={data.img}
                  alt="Sunset in the mountains"
                  width={300}
                  height={300}
                />
                <div className="px-3 py-2">
                  <div className="font-bold text-[1rem] mb-2 text-center">{data.title}</div>
                  <p className="text-lg text-center">Total:{Math.ceil(Math.random()*99)}</p>
                </div>
              </div>
            </div>
            </Col>
          ))}
        </Row>
       
    </section>
  );
}
