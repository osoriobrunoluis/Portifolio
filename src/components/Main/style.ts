import styled from "styled-components";

export const MainStyled = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>props.theme.isDarkMode ? "#212529" : "#f1f3f5"};
  color: ${(props) => (props.theme.isDarkMode ? "#f1f3f5" : "#212529")};
`;
