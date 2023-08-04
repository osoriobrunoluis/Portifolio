import styled from "styled-components";

export const StyledSectionProjects = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 84px;
  max-width: 1080px;

  .card__title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 150px;

    h2 {
      font-size: var(--font-size-28);
      font-family: var(--font-family-Raleway);
      font-weight: var(--font-weigth-600);
      letter-spacing: 1px;
      color: ${(props) => (props.theme.isDarkMode ? "#f1f3f5" : "#212529")};
    }
  }

  .card__container {
    display: flex;
    flex-direction: column;
    width: 330px;
    border-radius: var(--border-radius);
    padding: 24px;
    border: 4px solid var(--gray-3);
    height: 480px;

    &:hover {
      border: 4px solid var(--gray-4);
    }

    .card__image {
      width: 100%;
      overflow: hidden;
      min-height:144px;
      background-color: var(--gray-1);
      border-radius: var(--border-radius);
      border: 2px solid var(--gray-3);

      img {
        width: 270px;
        height: 178px;
      }
    }

    .name__project {
      width: 100%;

      h3 {
        font-family: var(--font-family-Quattrocento);
        font-size: var(--font-size-22);
        font-weight: var(--font-weigth-700);
        padding: 15px 0px 8px 20px;
      }
    }

    .description__project {
      width: 90%;

      p {
        font-size: var(--font-size-14);
        font-family: var(--font-family-OpenSans);
        padding: 10px 0px 0px 20px;
        line-height: 24px;
        font-weight: var(--font-weigth-400);
        text-align: justify;
        height: 110px;
        display: flex;
        align-items: center;
      }
    }
  }

  .tecs__project {
    width: 100%;

    p {
      font-size: var(--font-size-16);
      font-family: var(--font-family-OpenSans);
      padding: 15px 0px 20px 20px;
      font-weight: var(--font-weigth-700);
    }

    span {
      font-size: var(--font-size-14);
      font-family: var(--font-family-OpenSans);
      padding: 20px 0px 20px 5px;
      line-height: 26px;
      font-weight: var(--font-weigth-400);
    }
  }

  .card__links {
    padding-left: 16px;
    display: flex;
    width: 94%;
    gap: 20px;

    a {
      height: 40px;
      width: 100%;
      display: flex;
      gap: 10px;
      border-radius: var(--border-radius);
      background-color: var(--gray-8);
      align-items: center;
      justify-content: center;
      color: var(--gray-0);
      text-decoration: none;
      font-size: var(--font-size-16);
      font-family: var(--font-family-Raleway);
      font-weight: var(--font-weigth-600);
      transition: all 0.3s ease;
      box-shadow: 0 0 8px 2px var(--gray-3);

      &:hover {
        border: 4px solid var(--gray-3);
        color: var(--gray-9);
        background-color: var(--gray-3);
        box-shadow: 0 0 8px 2px var(--gray-4);
      }
    }
  }
  @media (min-width: 820px) {
    width: 70%;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    margin: 0 auto;
  }
`;
