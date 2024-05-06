window.onload = function() {
  let excuse = document.getElementById("excuse")
  excuse.textContent = randomExcuseSentence();
};


const randomExcuseSentence = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  let whoRandomIndex = who[Math.floor(Math.random() * who.length)];
  let actionRandomIndex = action[Math.floor(Math.random() * action.length)];
  let whatRandomIndex = what[Math.floor(Math.random() * what.length)];
  let whenRandomIndex = when[Math.floor(Math.random() * when.length)];

  return (`${whoRandomIndex} ${actionRandomIndex} ${whatRandomIndex} ${whenRandomIndex}`);
  
};




