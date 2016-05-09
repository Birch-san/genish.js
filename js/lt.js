'use strict'

let gen  = require('./gen.js')

let proto = {
  name:'lt',

  gen() {
    let out,
        inputs = gen.getInputs( this )

    if( isNaN( this.inputs[0] ) || isNaN( this.inputs[1] ) ) {
      out = `( ${inputs[0]} < ${inputs[1]} ? 1 : 0  )`
    } else {
      out = inputs[0] < inputs[1] ? 1 : 0 
    }
    
    return out
  }
}

module.exports = (x,y) => {
  let lt = Object.create( proto )

  lt.inputs = [ x,y ]

  return lt
}