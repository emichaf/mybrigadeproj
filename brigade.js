const { events } = require("brigadier");

events.on("myevent", (e, p) => {
  console.log("Got event!");
});