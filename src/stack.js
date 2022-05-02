exports.Stack=class Stack{constructor(){this.stack=Array(0)}
push(e){this.stack.push(e)}pop(){return this.stack.pop()}peek(){return this.stack[this.stack.length-1]}}
