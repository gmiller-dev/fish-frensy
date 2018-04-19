const {EventEmitter2} = require('EventEmitter2')

class MessageBus extends EventEmitter2 {
  constructor () {
    super({wildcard: true})
    this.proccessEvent = this.proccessEvent.bind(this)
  }

  addSystem (system) {
    system.subscribeToAll(this)
    this.subscribeToAll(system)
  }

  removeSystem (system) {
    system.unsubscribeToAll(this)
    this.unsubscribeToAll(system)
  }

  unsubscribeTo (system, event) {
    system.off(event, this.proccessEvent)
  }

  unsubscribeToAll (system) {
    this.unsubscribeTo(system, '**')
  }

  subscribeTo (system, event) {
    system.on(event, this.proccessEvent)
  }

  subscribeToAll (system) {
    this.subscribeTo(system, '**')
  }

  proccessEvent (event, ...args) {}
}

module.exports = MessageBus
