const Observable = function() {
    this.events  = []
  
   
  this.subscribe = function(callback) {
   //code 
   this.events.push(callback)

  }
  this.fire = function(message) {
    this.events.forEach((event) => event(message))
  }

  this.unsubscribe  = function(callback) {
    this.events = this.events.filter((item) => item !== callback)
  }
}

const observable = new Observable();

const fn = data => {
  console.log('Received:', data);
}

// Subscribe to changes
const subscription = observable.subscribe(fn);

// Notify subscribers
observable.fire('Hello!'); // logs: "Received: Hello!"

// Unsubscribe
observable.unsubscribe(fn);

// No longer logs anything
observable.fire('Hello again!');