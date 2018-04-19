const CentralBus = require('./CentralBus')
const EchoSystem = require('./EchoSystem')
const InputSystem = require('./InputSystem')

class LogicSystem extends CentralBus {
  proccessEvent (event) {
    if (event.type === 'KILL') {
      console.log('Shutting Down System...')
      process.exit()
    }
  }
}

const centralBus = new CentralBus()
const echo = new EchoSystem()
const input = new InputSystem()
const logic = new LogicSystem()

centralBus.addSystem(echo)
centralBus.addSystem(input)
centralBus.addSystem(logic)

console.log('Listening for key presses...')
