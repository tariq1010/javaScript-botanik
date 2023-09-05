const revealCheck = (count) => {
  count = +count;

  if (count === 1000 || count === 3000 || count === 6000 || count === 10000) {
    return true;
  } else return false;
};

const phaseCheck = (count) => {
  count = +count;
  let phase;
  if (count < 1000) phase = 1000;
  else if (count < 3000) phase = 3000;
  else if (count < 6000) phase = 6000;
  else if (count < 10000) phase = 10000;
  return phase;
};

export { revealCheck, phaseCheck };
