const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

/**
 * Driver for reciving input from the key board
 */
class Keyboard {
  constructor () {
    this.target = typeof window !== 'undefined'
    ? new ElementStream(document.querySelector('body'))
    : process.stdin
  }
  /**
   * Subscribe to keyboard events
   *
   * Possible Events:
   * keypress
   *
   * @param {String} event event to listen to
   * @param {Function} listener callback to be invoked when event is triggered
   */
  on (event, listener) {
    this.target.on(event, listener)
  }
}

class ElementStream {
  constructor (element) {
    this.element = element
  }

  on (event, listener) {
    this.element.addEventListener(event, listener)
  }

  off (event, listener) {
    this.element.removeEventListener(event, listener)
  }
}

module.exports = Keyboard
