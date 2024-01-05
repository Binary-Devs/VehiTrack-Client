import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export default function ChatItem({
  avatar,
  name,
  lastMessage,
  lastTime,
}: {
  avatar?: any;
  name?: any;
  lastMessage?: any;
  lastTime?: any;
}) {
  return (
    <div className="flex items-center px-3 py-2 text-sm border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
      {avatar ? (
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={avatar}
          alt={name}
        />
      ) : (
        <Avatar size="large" icon={<UserOutlined />} />
      )}
      <div className="w-full pb-2 hidden md:block">
        <div className="flex justify-between">
          <span className="block ml-2 font-semibold text-gray-600">{name}</span>
          <span className="block ml-2 text-sm text-gray-600">{lastTime}</span>
        </div>
        <span className="block ml-2 text-sm text-gray-600">{lastMessage}</span>
      </div>
    </div>
  );
}
