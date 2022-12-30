import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 40, color: "#ffff" }} spin />
);
export const Loading = ({ loading }) => {
  console.log("calllslslsl")
  return (
    <div className="cover-spin">
      <Space size="middle">
        <Spin size="large" indicator={antIcon} />
        {loading}
      </Space>
    </div>
  );
};
  
// export default Loading ;