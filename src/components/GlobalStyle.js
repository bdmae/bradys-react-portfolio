import {createGlobalStyle} from 'styled-components';


// mint colour    #23d997;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padidng: 0;
    box-sizing: 0;
  }

  body {
    background: #faf0ff;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;

  }


  button {
    line-height: 1.5;
    background-color: rgba(196, 187, 187, 0.25);
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 10px;
    font-weight: bold;
    font-family: inherit;
    font-size: 1.1rem;
    cursor: pointer;
    user-select: none;
    position: relative;
    overflow:hidden;
    vertical-align: middle;
    transition: color 0.3s ease;
    font-family: 'Inter', sans-serif;
}

button::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width:0%;
    background-color: #957fc5;
    z-index: -1;
    transition: width 0.3s ease;
}
button:hover::before{
    width: 100%;
}

button:hover{
    color: white;
}


h1 {
  font-weight: lighter;
}


 h2{
        font-family: 'Inter', sans-serif;
        font-size: 4rem;
    }

p {
        padding: 3rem 0rem;
        color: #cccccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    h4 {
        font-size: 2.5rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1.1.rem;
    }
`;

export default GlobalStyle;
