// Animate top to bottom
export const headingAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring" },
  },
};

// Animate bottom to top
export const sectionBodyAnimation = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
    },
  },
};

// Animate Left to Right
export const animateRight = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

// Animate top to bottom
export const animateBottom = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
};

// Animate Right to Left
export const animateLeft = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
};
