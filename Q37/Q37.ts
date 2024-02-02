// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "Large", message = "I love TypeScript!"): void {
    console.log(`I made a ${size} T-shirt with the message '${message}'.`);
  }
  
  // Make a large shirt with the default message
  make_shirt();
  
  // Make a medium shirt with the default message
  make_shirt("Medium");
  
  // Make a shirt of any size with a different message
  make_shirt("SM" ,"I love coding!");
  
  