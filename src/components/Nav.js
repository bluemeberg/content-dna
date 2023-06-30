import React from "react";
import styled from "styled-components";
import { serverInstance } from "../api/axios";

const Nav = (props) => {
  const handleClick = async () => {
    const result = await serverInstance.get("/feed/get", {
      params: {
        agentID: 32,
      },
    });
    console.log(result);
  };

  return (
    <NavWrapper>
      <Logo>
        {props.color !== "white" ? (
          <div className="logo__title">RUC.P</div>
        ) : (
          <div className="logo__title-white">RUC.P</div>
        )}
      </Logo>
      <button onClick={handleClick}>클릭</button>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  inset: 0;
  height: 70px;
  background-color: "transparent";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  .logo__title {
    font-size: 32px;
    color: black;
    font-weight: 700;
    padding: 20px;
  }
  .logo__title-white {
    font-size: 32px;
    color: white;
    font-weight: 700;
    padding: 20px;
  }
`;
