import { List } from "antd";

interface IData {
  title: string;
  description: string;
}

const MyList = ({ data }: { data: IData[] }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta title={item.title} description={item.description} />
      </List.Item>
    )}
  />
);

export default MyList;
