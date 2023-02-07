var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// The day works

if (weekday === "Monday") {
  console.log(`Let's get the week started`);
} else if (weekday === "Tuesday") {
  console.log(`Worky work!`);
} else if (weekday === "Wednesday") {
  console.log(`You're halfway there!`);
} else if (weekday === "Sunday") {
  console.log(`Get ready for work tomorrow, lol!`);
}
