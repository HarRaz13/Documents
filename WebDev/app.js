function talk(){
    var know = {
    "Hi" : "Hello, how are you?",
    "Good" : "That's nice to hear.",
    "Who are you" : "Hello, I am a ChatBot. ",
    "How are you" : "Good :)",
    "What can i do for you" : "Just Talking is fine.",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }