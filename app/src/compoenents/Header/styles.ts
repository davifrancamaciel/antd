import { Layout } from "antd";
import styled from "styled-components";
const { Header } = Layout;
export const Container = styled(Header)`
  padding: 0;
  background: #26c281;
  color: #fff;

  div {
    margin: 0 15px;
    display: flex;
    justify-content: space-between;

    img {
      margin: 15px 0px;
      max-height: 40px;
    }
  }
`;
