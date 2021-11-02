import React from "react";
import { Image } from "antd";

import logo from "../../assets/logo.png";
import Watch from "../Watch";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Image src={logo} preview={false} />
        <Watch />
      </div>
    </Container>
  );
};

export default Header;
