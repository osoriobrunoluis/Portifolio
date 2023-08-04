import styled, { keyframes } from "styled-components";

const moveLetters = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  `;

export const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  padding-top: 26px;
  gap: 36px;
  justify-content: center;
  flex-direction: column-reverse;

  .picture__container {
    display: flex;
    justify-content: center;
    margin-top: 80px;

    img {
      height: 120px;
      width: 120px;
    }
  }

  .about__container {
    width: 368px;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
  }

  @media (min-width: 964px) {
    width: 75%;
    flex-direction: row;
    padding-top: 120px;
    justify-content: center;
    gap: 112px;
    border-radius: var(--border-radius);
    
    .picture__container {
      display: flex;
      padding-right: 110px;

      img {
        height: 320px;
        width: 320px;
      }
    }
  }

  .about__text__dev {
    line-height: 42px;
    font-family: var(--font-family-Quattrocento);
  }

  .text__regular {
    font-size: var(--font-size-22);
    margin: 0;
    text-align: center;
  }

  .span__name {
    font-size: var(--font-size-38);
    margin: 0;
    font-weight: bold;
    position: relative;
    display: inline-block;
    transition: color 1s;
    cursor: none;

    &:hover {
      color: var(--color-primary);
      animation: ${moveLetters} 1s ease-in-out infinite;
      text-shadow: 1px 2px 3px var(--gray-9);
    }
  }

  .span__info {
    font-size: var(--font-size-32);
    margin: 0;
    font-weight: bold;
    text-align: center;
  }

  .about__text__info {
    p {
      font-size: var(--font-size-18);
      line-height: 25px;
      text-align: center;
      font-family: var(--font-family-Raleway);
      padding: 12px;
      margin-top: 10px;
    }
  }

  .btn__links {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 26px;

    .btn_color--primary {
      background-color: var(--gray-1);
      padding-left: 20px;
    }

    a {
      color: var(--gray-9);
      width: 172px;
      height: 36px;
      background-color: var(--color-primary);
      border-radius: var(--border-radius);
      font-family: var(--font-family-OpenSans);
      font-size: var(--font-size-12);
      text-decoration: none;
      font-weight: var(--font-weigth-700);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: 0 0 8px 2px var(--gray-5);

      &:hover {
        color: var(--gray-0);
        background-color: var(--gray-9);
        box-shadow: 0 8px 16px var(--gray-5);
      }
    }

    .links {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 172px;
      justify-content: center;
      padding-right: 15px;

      a {
        background-color: var(--gray-1);
        width: 36px;
        height: 36px;
        font-size: var(--font-size-30);
        transition: background-color 0.2s, box-shadow 0.2s;
        box-shadow: 0 2px 4px 0 var(--gray-1);

        &:hover {
          background-color: var(--gray-9);
          box-shadow: 0 4px 8px 0 var(--gray-8);
        }
      }
    }
  }
  
`;
