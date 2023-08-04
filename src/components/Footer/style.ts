import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100vw;
  height: 80px;
  background-color: var(--gray-8);
  color: var(--gray-0);
  width: 100%;
  margin: 0 auto;
  position: relative;

  .footer__container {
    max-width: 1400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 40px 0px 30px;
  }

  .links {
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
    
    p{
      font-size: var(--font-size-12);
      font-family: var(--font-family-OpenSans);
      font-weight: var(--font-weigth-400);
      margin-left: -14px;
    }

    a {
      width: 22px;
      height: 22px;
      font-size: var(--font-size-20);
      text-align: center;
      color: var(--gray-7);
      border-radius: 100%;
      transition: background-color 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 8px 1px var(--gray-4);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: var(--gray-8);
        box-shadow: 0 0 8px 1px var(--gray-5);
        color: var(--gray-0);
      }
    }
  }

  .header__logo__name {
    display: flex;
    height: 40px;
    align-items: center;
    margin-right: 4px;

    h1 {
      font-family: var(--font-family-OpenSans);
      font-size: var(--font-size-26);
      color: var(--gray-1);
      width: 100px;
    }
  }
`;
