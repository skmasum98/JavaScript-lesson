// Closure based Counter
function createCounter() {
    let count = 0; // private variable
  
    return {
      increment: function() {
        count++;
        updateUI();
      },
      decrement: function() {
        count--;
        updateUI();
      },
      reset: function() {
        count = 0;
        updateUI();
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  // UI Update Function
  function updateUI() {
    document.getElementById('count').innerText = counter.getCount();
  }
  
  // Counter তৈরি
  const counter = createCounter();
  
  // Button Event Listeners
  document.getElementById('increment').addEventListener('click', () => {
    counter.increment();
  });
  
  document.getElementById('decrement').addEventListener('click', () => {
    counter.decrement();
  });
  
  document.getElementById('reset').addEventListener('click', () => {
    counter.reset();
  });
  