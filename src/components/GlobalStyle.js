import {createGlobalStyle} from 'styled-components';


// mint colour    #23d997;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HelveticaNowText';
    src: url('./fonts/HelveticaNowText-Regular.woff2') format('woff2'),
         url('./fonts/HelveticaNowText-Regular.woff') format('woff'),
         url('./fonts/HelveticaNowText-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'HelveticaNowText-bold';
    src: url('./fonts/HelveticaNowText-Bold.woff2') format('woff2'),
         url('./fonts/HelveticaNowText-Bold.woff') format('woff'),
         url('./fonts/HelveticaNowText-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  *{
    margin: 0;
    padidng: 0;
    box-sizing: 0;
  }

  html {
    @media (max-width: 1500px) {
      font-size: 80%;
    }
  }

  body {
    background: #fffbf0;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
  }

  .social {
    padding: 1rem 0;
  }

  .social h3 {
    margin-left: 1rem;
    font-size: 2rem;
  }

  .social a {
    color: black;
    text-decoration: none;
  }


  button {
    line-height: 1.5;
    background-color: rgba(196, 187, 187, 0.25);
    padding: 1rem 2rem;
    display: flex;
    gap: 1rem;
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

    @media (max-width: 1100px) {
      padding: 0.8rem 1rem;
    }
}

button::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width:0%;
    background-color: #6ee7b7;
    z-index: -1;
    transition: width 0.3s ease;
}
button:hover::before{
    width: 100%;
}

a {
  text-decoration: none;
}


h1 {
  font-weight: lighter;
}


 h2{
        font-family: 'HelveticaNowText-bold', sans-serif;
        font-weight: 700;
        font-size: 8vmin;
    }

    p {
        padding: 3rem 0rem;
        color: #000;
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



/* Style the rainbow text element. */
.rainbow-text {
  /* Create a conic gradient. */
  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #CA4246;
  background-color: #CA4246;
  background: conic-gradient(
    #CA4246 16.666%,
    #E16541 16.666%,
    #E16541 33.333%,
    #F18F43 33.333%,
    #F18F43 50%,
    #8B9862 50%,
    #8B9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #A7489B 83.333%);

  /* Set thee background size and repeat properties. */
  background-size: 57%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Animate the text when loading the element. */
  /* This animates it on page load and when hovering out. */
  animation: rainbow-text-animation-rev 0.5s ease forwards;

  cursor: pointer;
}

/* Add animation on hover. */
.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-animation {
  0% {
    background-size: 57%;
    background-position: 0 0;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 300%;
    background-position: -9em 1em;
  }
}

/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-animation-rev {
  0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
}
`;

export default GlobalStyle;
