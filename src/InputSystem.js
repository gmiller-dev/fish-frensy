const MessageBus = require('./MessageBus')
const {Keyboard} = require('./framework')
const {cond, always, T, and} = require('ramda')

class InputSystem extends MessageBus {
  constructor () {
    super()
    this.keyboard = new Keyboard()
    this.keyboard.on('keypress', (keyStr, keyEvent) => {
      const message = handleKeyPress(keyEvent)
      if (message) {
        this.emit('input', 'recived', message)
      }
    })
  }
}

const handleKeyPress = cond([
  [and(cntrl, key('c')), always({type: 'KILL'})],
  [key('up'), always({type: 'POLL_UP'})],
  [key('down'), always({type: 'POLL_DOWN'})],
  [key('left'), always({type: 'POLL_LEFT'})],
  [key('right'), always({type: 'POLL_RIGHT'})],
  [key('space'), always({type: 'POLL_REAL'})],
  [key('escape'), always({type: 'PAUSE'})],
  [T, x => x]
])

function cntrl (key) {
  return key.ctrl
}

function key (name) {
  return function (key) {
    return key.name === undefined
      ? key.sequence === name
      : key.name === name
  }
}

module.exports = InputSystem
