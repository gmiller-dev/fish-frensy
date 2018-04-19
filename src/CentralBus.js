const MessageBus = require('./MessageBus')

class CentralBus extends MessageBus {
  proccessEvent (event, ...args) {
    this.emit(event, ...args)
  }
}

module.exports = CentralBus
