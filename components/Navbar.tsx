import {Layout, Button, Input} from "antd";
import Image from "next/image";

const {Search} = Input;
const {Header} = Layout;

import logo from "../public/logo.svg";

function Navbar() {
  const onSearch = (value) => console.log(value);

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
      }}
    >
      <Image alt={logo} src={logo} style={{float: "left"}} width={150} />

      <Search
        enterButton
        placeholder="Buscar eventos..."
        style={{maxWidth: "350px"}}
        onSearch={onSearch}
      />
      <div className="nav-right-menu">
        <Button type="primary">Ingresar</Button>
      </div>
    </Header>
  );
}

export default Navbar;
