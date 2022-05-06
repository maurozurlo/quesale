import {Layout, Typography} from "antd";

import styles from "./LayoutContainer.module.css";
const {Content} = Layout;

export default function LayoutContainer({children, title}) {
  return (
    <Content className={styles.siteContainer}>
      <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
        <Typography.Title level={1}>{title}</Typography.Title>
        {children}
      </div>
    </Content>
  );
}
