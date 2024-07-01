class MyStack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    // Push element x onto stack
    push(x) {
      this.queue1.push(x);
    }
  
    // Remove the element on top of the stack and return it
    pop() {
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      const topElement = this.queue1.shift();
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      return topElement;
    }
  
    // Get the top element
    top() {
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      const topElement = this.queue1.shift();
      this.queue2.push(topElement);
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      return topElement;
    }
  
    // Return whether the stack is empty
    empty() {
      return this.queue1.length === 0;
    }
  }
  
