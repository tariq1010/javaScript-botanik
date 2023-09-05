import { notification } from "antd";
import { NotificationInstance } from "antd/lib/notification";

const openNotification = (title, message, type) => {
  notification[type]({
    message: title,
    description: message,
    duration: 5.2,
  });
};

export default openNotification;
