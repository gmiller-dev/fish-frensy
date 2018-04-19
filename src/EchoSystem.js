const MessageBus = require('./MessageBus')

class EchoSystem extends MessageBus {
  proccessEvent (event, ...args) {
    console.log('EVENT', event)
  }
}

module.exports = EchoSystem
