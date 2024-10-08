export const transition = { 
  type: "spring",
  stiffness: 300,
  damping: 30, 
};

export const slideAnimation = (direction: string) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: { ...transition, delay: 0.5 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const SlideUpAnimation = () => {
  return {
    initial: {
      y: 100,
      opacity: 0,
      transition: {...transition, delay: 0.5}
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {...transition, delay: 0.5}
    },
    exit: {
      y: 100,
      transition: {...transition, delay: 0}
    }
  }
}

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};