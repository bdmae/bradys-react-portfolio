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
      when: "beforeChildren"
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const fade = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
};

export const photoAnim = {
  hidden: {scale: 1.5, opacity: 0},
  show: {
    scale: 1,
    opacity: 1,
    tranisition: {
      ease: 'easeOut',
      duration: 0.75
    },
  },
};

