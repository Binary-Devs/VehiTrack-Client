import { CutText } from "@/utils/CutText";
import { Col, Row } from "antd";
import Image from "next/image";
export default function OurVehicle() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Felis platea ipsum volutpat orci nec iaculis lorem viverra elitphasellus praesent sodales sagittis vehicula posuere ut magna facilisis congue laoreet maximus",
    },
    {
      img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Taciti integer dolor dis risus erat lectus condimentum urna facilisi augue id mauris curabitur sem praesent sollicitudin molestie egestas consequat",
    },
    {
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Pellentesque turpis dictumst dictum rutrum suspendisse velit taciti pretium neque placerat tempor netus sit dui posuere blandit quisque libero sagittis accumsan consequat",
    },
    {
      img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Sapien magnis donec quis consequat massa amet est penatibus nisi egestas laoreet euismod ligula luctus nibh taciti sollicitudin id facilisis nec lobortis arcu conubia rutrum",
    },
    {
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "TMagna massa mattis turpis finibus eleifend donec dapibus rhoncus libero tincidunt phasellus porta natoque integer aliquet nostra semper velit parturient magnis nibh enim feugiat diam a quam",
    },
    {
      img: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Felis platea ipsum volutpat orci nec iaculis lorem viverra elitphasellus praesent sodales sagittis vehicula posuere ut magna facilisis congue laoreet maximus",
    },
    {
      img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Sollicitudin faucibus ornare convallis urna orci euismod eget ultricies scelerisque bibendum ridiculus a letius nulla blandit quis egestas ex facilisis",
    },
    {
      img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fast spreed bus",
      details:
        "Convallis vestibulum penatibus si tristique sit elementum accumsan consectetuer donec ultrices facilisis dignissim pulvinar gravida nunc massa",
    },
  ];
  return (
    <div>
      <p className="text-3xl text-center font-bold my-4 border-2 px-3 py-2 rounded-xl">Our Vehicle list</p>
      <Row gutter={[16, 24]}>
        {data.map((data, key) => (
          <Col key={key} className="gutter-row" xs={24} md={6} lg={4}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              <Image
                className="w-full h-[170px]"
                src={data.img}
                alt="Sunset in the mountains"
                width={300}
                height={300}
                
              />
              <div className="px-3 py-2">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-sm">{CutText(data.details,200)}</p>
              </div>
              <div className="flex justify-center items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
