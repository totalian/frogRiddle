const frogGenerator = () => {
  const frog = {};
  if (Math.floor(Math.random() * 2) == 0) {
    frog.gender = "Male";
  } else frog.gender = "Female";
  return frog;
};

const lickTwoFrogs = (frogA, frogB) => {
  if (frogA.gender == "Female" || frogB.gender == "Female") {
    return "You Live";
  } else return "You Die";
};

const simulation = () => {
  // Generate two frogs with a random gender
  const frogA = frogGenerator();
  const frogB = frogGenerator();

  // Select a random frog between the two and hear what is says
  const croak = [frogA, frogB][Math.floor(Math.random() * 2)].gender;

  // Lick two frogs ONLY if you hear a male croak and see if you live or die
  let outcome;
  if (croak == "Male") {
    outcome = lickTwoFrogs(frogA, frogB);
  }

  return outcome;
};

const repeatSimulation = (numberOfTimes) => {
  let live = 0;
  let die = 0;
  for (let i = 0; i < numberOfTimes; i++) {
    let outcome = simulation();
    if (outcome == "You Live") {
      live++;
    } else if (outcome == "You Die") {
      die++;
    }
  }

  const survivalPercentage = Math.round(live/(live + die) * 100)
  return survivalPercentage
};

console.log(`You survived ${repeatSimulation(100000)}% of the time`)