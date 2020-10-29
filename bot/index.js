const startEngine = (client) => {
  console.log("BearBot v0.0.1")
  client.time().then(time => console.log(time))
}
module.exports = {
  start: startEngine,
}
