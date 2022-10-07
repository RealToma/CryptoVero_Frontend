import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgMark01 from "../../Assets/Images/mark/logo_white_01.png";

const Sidebar = () => {
  return (
    <StyledComponent>
      <ImageMark01>
        <img src={imgMark01} width={"100%"} alt="" />
      </ImageMark01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 350px;
  min-width: 350px;
  height: 100vh;
  position: fixed;
  flex-direction: column;
  align-items: center;
  padding: 35px 20px;
  box-sizing: border-box;
  background-color: #005e95;
`;

const ImageMark01 = styled(Box)`
  width: 233px;
`;
export default Sidebar;
