import styled from "styled-components";

export const StyledTecsContainer = styled.div`
width: 100%;
height: 100%;
`

export const StyledSection = styled.section`
  max-width: 1080px;
  width: 96%;
  margin: 0 auto;
  border-radius: var(--border-radius);
  background-color: var(--gray-8);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 160px;
  gap: 40px;

  .tec__name {
    padding-top: 90px;

    h2 {
      font-size: var(--font-size-28);
      color: var(--gray-1);
      font-family: var(--font-family-Raleway);
      text-align: center;
      font-weight: var(--font-weigth-600);
      letter-spacing: 1px;
    }
  }

  .tecs__div {
    display: flex;
    height: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 44px;
      gap: 34px;
      margin: 0 auto;
      margin-bottom:80px;
      justify-content: center;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 4px;
    }

    p {
      font-size: var(--font-size-14);
      font-family: var(--font-family-OpenSans);
      font-weight: var(--font-weigth-500);
      color: var(--gray-1);
    }
  }

  .tecs__image {
    background-color: var(--gray-8);
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    border-radius: var(--border-radius);
    border: 1px solid var(--gray-0);
    padding: 2px;
    align-items: center;

    &:hover {
      border: 2px solid var(--gray-8);
    }

    div {
      width: 94%;
      height: 90%;
      background-color: var(--gray-0);
      display: flex;
      justify-content: center;
      border-radius: var(--border-radius);
      padding: 12px;
    }

    img {
      border-radius: var(--border-radius);
      width: 68px;
      transition: transform 0.3s ease-in-out;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
`;
