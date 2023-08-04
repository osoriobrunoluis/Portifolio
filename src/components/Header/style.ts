import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  min-height: 70px;
  padding: 10px 20px 10px 20px;
  position: fixed;
  top: 0;
  left: 50%;
  background-color: var(--gray-8);
  color: var(--gray-2);
  transform: translateX(-50%);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    min-height: 60px;
    margin: 0 auto;
  }

  .header__logo__name {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h1 {
      font-family: var(--font-family-OpenSans);
      font-size: var(--font-size-26);
    }

    p {
      font-family: var(--font-family-Raleway);
      font-size: var(--font-size-14);
    }
  }

  .times-icon {
    font-size: var(--font-size-14);
    color: var(--gray-5);

    &:hover {
      color: var(--gray-0);
    }
  }

  nav.open {
    width: 54%;

    ul {
      width: 154px;
      height: 200px;
      border-radius: 0px 0px 0px 10px;
      position: absolute;
      right: 0;
      top: 70px;
      background-color: var(--gray-8);
    }

    li {
      height: 80px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      color: var(--gray-1);
      cursor: pointer;

      a {
        font-family: var(--font-family-OpenSans);
        font-size: var(--font-size-16);
        color: var(--gray-2);
        text-decoration: none;

        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }
  nav.close {
    display: none;
  }

  @media (min-width: 964px) {
    padding-left: 40px;
    align-items: center;
    background-color: var(--gray-8);

    .header__logo__name {
      flex-direction: row;
      align-items: center;
      gap: 20px;

      h1 {
        font-family: var(--font-family-OpenSans);
        font-size: var(--font-size-34);
        color: var(--gray-1);
      }

      a {
        font-family: var(--font-family-OpenSans);
        font-size: var(--font-size-16);
        color: var(--gray-2);
        text-decoration: none;
      }
    }

    nav.open {
      margin-right: 174px;

      ul {
        height: 80px;
        position: revert;
      }

      li {
        font-family: var(--font-family-OpenSans);
        gap: 70px;
        color: var(--gray-1);
        flex-direction: row;

        p {
          font-size: var(--font-size-16);
          font-family: var(--font-family-OpenSans);
          color: var(--gray-2);
          text-decoration: none;

          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }

    nav.close {
      display: revert;
      margin-right: 174px;

      li {
        color: var(--gray-1);
        font-family: var(--font-family-OpenSans);
        display: flex;
        gap: 70px;

        a {
          font-size: var(--font-size-16);
          font-family: var(--font-family-OpenSans);
          color: var(--gray-2);
          text-decoration: none;

          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }
  }
`;

export const ToggleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  font-size: var(--font-size-22);
  color: var(--gray-9);
  border-radius: 100%;
  transition: background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 8px 1px var(--gray-4);
  position: absolute;
  top: 20px;
  right: 30px;

  &:hover {
    background-color: var(--gray-8);
    box-shadow: 0 0 8px 1px var(--gray-5);
    color: var(--gray-0);
  }
  @media (min-width: 964px) {
    display: none;
  }
`;
