//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Luna', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message
//Hello responses
  if (lastUserMessage.toLowerCase() === 'hi' || lastUserMessage.toLowerCase() =='hello') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
  //Feeling responses
 if (lastUserMessage.toLowerCase() === 'how are you' || lastUserMessage.toLowerCase() =='how are you feeling'|| lastUserMessage.toLowerCase() =='how are you today') {
    const feelings = ['It is a beautiful day to travel','A little sore from those meteorites','It is strange although I am an AI, I am tired']
    botMessage = feelings[Math.floor(Math.random()*(feelings.length))];;
  }
//   The line below is for bot name
  if (lastUserMessage.toLowerCase() === 'name') {
    botMessage = 'My name is ' + botName;
  }
// Joke line for giggles. The website I used was https://www.funology.com/outer-space-jokes/
if (lastUserMessage.toLowerCase() === 'joke' || lastUserMessage.toLowerCase() =='Tell me a joke'|| lastUserMessage.toLowerCase() =='Are you funny') {
    const lol = ['Why did the sun go to school? To get brighter!','What is an astronauts favorite key on the keyboard? The space bar!','Why did Mickey Mouse go to outer space? He was looking for Pluto.', 'What did the alien say to the cat? Take me to your litter.']
    botMessage = lol[Math.floor(Math.random()*(lol.length))];;
  }
 if (lastUserMessage.toLowerCase() === 'repeat' || lastUserMessage.toLowerCase() =='Repeat') {
    botMessage = lastUserMessage;
  }
//Image
  if (lastUserMessage.toLowerCase() === 'Image' || lastUserMessage.toLowerCase() =='image') {
    botMessage =  img();
  }
  //website I used the photo from was https://images.app.goo.gl/EXaqyCg3YKivfoLn8 
if (lastUserMessage.toLowerCase() === 'Image' || lastUserMessage.toLowerCase() =='image') {
    
    botMessage = pic[Math.floor(Math.random()*(pic.length))];;
  }
//This if statement is for facts on space pulled random facts from Nasa **https://www.jpl.nasa.gov/edu/pdfs/ss_extreme_poster.pdf ** and The Planets **https://theplanets.org/space-facts/**
if (lastUserMessage.toLowerCase() === 'fact' || lastUserMessage.toLowerCase() =='Fun Fact'|| lastUserMessage.toLowerCase() =='Facts') {
    const fac = ["SPACE IS COMPLETELY SILENT. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard. Astronauts use radios to stay in communication while in space, since radio waves can still be sent and received.(Fact from The Planets)","THE HOTTEST PLANET IN OUR SOLAR SYSTEM is Venus is the hottest planet in the solar system and has an average surface temperature of around 450° C. Interestingly, Venus is not the closest planet to the Sun – Mercury is closer but because Mercury has no atmosphere to regulate temperature it has a very large temperature fluctuation. (Fact from The Planets)","A FULL NASA SPACE SUIT COSTS $12,000,000. While the entire suit costs a cool $12m, 70% of that cost is for the backpack and control module. (Fact from The Planets)", "THE FOOTPRINTS ON THE MOON WILL BE THERE FOR 100 MILLION YEARS. The Moon has no atmosphere, which means there is no wind to erode the surface and no water to wash the footprints away. This means the footprints of the Apollo astronauts, along with spacecraft prints, rover-prints and discarded material, will be there for millions of years.(Fact from The Planets)", "THERE IS FLOATING WATER IN SPACE. Astronomers have found a massive water vapor cloud which holds 140 trillion times the mass of water in the Earth’s oceans somewhere around 10 billion light years away – making it the largest discovery of water ever found.(Fact from The Planets)", "Forget the socks, bring a hat. If you could stand at the Martianequator, the temperature at your feet would be like a warm spring day, but at your head it would be freezing cold! (NASA)", "Craters at the Moon’s south pole may be the frostiest location in the entire solar system. In the permanently shadowed crater floors, “daytime” temperatures may never rise above minus 238 degrees Celsius (minus 397 degrees Fahrenheit). (NASA)"]
    botMessage = fac[Math.floor(Math.random()*(fac.length))];;
  }
 } 
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push("<b>" + 'User' + ":</b> " +lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 11; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 1.5; //0 to 2
    //utterance.text = 'Hello World';
    utterance.lang = 'en-UK';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

function img() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "Tapestry of Blazing Starbirth");
  document.body.appendChild(x);
}
//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
