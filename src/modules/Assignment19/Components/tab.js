import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 42px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 7%;
  position: relative;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "#264e71" : "#e4ecf7")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  color: ${props => (props.active ? "white" : "black")};

  :hover {
    background-color: gray;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
