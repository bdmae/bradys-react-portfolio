// here we'll do page transitions, so each page
// fades in and fades out nicely
// exit defines what happens when we exit the page,
// right now we're only fading in, but we want to fade out
// we need to specify the exit in the the div

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },

  }
};
