import { createGlobalStyle } from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    list-style: none;
  }

:root{
    --color-primary: #FFD500;

    --gray-9: #212529;
    --gray-8: #343A40;
    --gray-7: #495057;
    --gray-6: #868E96;
    --gray-5: #ADB5BD;
    --gray-4: #CED4DA;
    --gray-3: #DEE2E6;
    --gray-2: #E9ECEF;
    --gray-1: #f1f3f5;
    --gray-0: #F8F9FA;

    --font-size-38: 3.8rem;
    --font-size-36: 3.6rem;
    --font-size-34: 3.4rem;
    --font-size-32: 3.2rem;
    --font-size-30: 3rem;
    --font-size-28: 2.8rem;
    --font-size-26: 2.6rem;
    --font-size-24: 2.4rem;
    --font-size-22: 2.2rem;
    --font-size-20: 2rem;
    --font-size-18: 1.8rem;
    --font-size-16: 1.6rem;
    --font-size-14: 1.4rem;
    --font-size-12: 1.2rem;
    --font-size-10: 1rem;
    --font-size-08: 0.8rem;

    --font-weigth-900: 900;
    --font-weigth-800: 800;
    --font-weigth-700: 700;
    --font-weigth-600: 600;
    --font-weigth-500: 500;
    --font-weigth-400: 400;

    --border-radius: 20px;

    --font-family-OpenSans: 'Open Sans', sans-serif;
    --font-family-Quattrocento: 'Quattrocento', sans-serif;
    --font-family-Raleway: 'Raleway', sans-serif;
}

  button{
  cursor: pointer;
  border: none;
  background-color: transparent;
}

h5.Dark {
    width: 32px;
    height: 32px;
    position: fixed;
    right: 9px;
    bottom: 24px;
    z-index: 1;
    font-family: var(--font-family-OpenSans);
    font-size: var(--font-size-08);
    background-color: var(--color-primary);
    font-weight: var(--font-weigth-600);
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 30%;
    box-shadow: 0 0 4px 3px var(--gray-5);
    transition: opacity 0.3s ease;
}

   h5.Dark:hover {
      background-color: var(--gray-1);
      opacity: 0.9;
      }
    
  h5.Ligth {
    width: 32px;
    height: 32px;
    position: fixed;
    right: 9px;
    bottom: 24px;
    z-index: 1;
    font-family: var(--font-family-OpenSans);
    font-size: var(--font-size-08);
    background-color: var(--gray-8);
    color: var(--gray-3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30%;
    box-shadow: 0 0 4px 3px var(--gray-6);
    transition: opacity 0.3s ease;
  } 

    h5.Ligth:hover {
      background-color: #000000;
      opacity: 0.9;
      }
  

  `;
