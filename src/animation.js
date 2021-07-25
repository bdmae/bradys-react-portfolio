// here we'll do page transitions, so each page
// fades in and fades out nicely
// exit defines what happens when we exit the page,
// right now we're only fading in, but we want to fade out
// we need to specify the exit in the the div

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
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

//if you want to define width in framer motion you use quotes
export const lineAnim = {
  hidden: {width: '0%'},
  show: {
    width: '100%',
    transition: {
      duration: 1,
      staggerChildren: 0.50,
    },
  },
};

//weve made the frames go right outside of the page on hidden on the x axis
export const slider = {
  hidden: {x: '-130%', skew: '45deg'},
  show: {
    x: '100%',
    skew: '0deg',
    transition: {ease: "easeOut", duration: 1},
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.10, ease: "easeOut" } },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
