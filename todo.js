/*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\Create New Date/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*var date = new Date();
var a= date.getMonth()+1;
var b= date.getDate();
var c= date.getFullYear();
document.getElementById("disdate").innerHTML= "Today's Date "+ a +"/"+ b+'/'+ c ;*/
/*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ New Quotes/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
/*var day;
switch (new Date().getDay()) {
case 0:
  day ="The first draft is just you telling yourself the story.";
  break;
case 1:
  day = "You will never change your life until you change something you do daily.";
  break;
case 2:
  day = "I think all writing is a disease. You can’t stop it.";
  break;
case 3:
  day = "The secret of your future is hidden in your daily routine.";
  break;
case 4:
  day = "Subtracting from your list of priorities is as important as adding to it.";
  break;
case 5:
  day = "Every Day Is a New Beginning";
  break;
case  6:
  day = "Each day I will accomplish one thing on my to do list.";
}
document.getElementById("quote").innerHTML = "Daily Qoutes : " + day;*/
/*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\Create Close Tag/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
var newlist = document.getElementsByTagName("LI");
        for ( var i = 0; i <newlist.length; i++) {
            var span = document.createElement("SPAN");
            var text = document.createTextNode("x");
            span.className = "closeTag";
            span.appendChild(text);
            newlist[i].appendChild(span);
        }
        document.addEventListener("keyup",function(event){
          if(event.keyCode==13){
            var inputValue = document.getElementById("todoValue").value; 
            var toDo = inputValue;
               if(toDo){
                addNewList(toDo);
               }
             document.getElementById("todoValue").value ="";
          } 
        })
/*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\Add To do List/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
        function addNewList(){
  var list = document.createElement("li");
  var textbox = document.getElementById("todoValue").value;
  var txt = document.createTextNode(textbox);
  list.appendChild(txt);
   document.getElementById("todoValue").value ="";
   if(txt.nodeValue == ''){
     alert("No Empty Values Are Allowed!!");
   }else{
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("x");
     span.className = "closeTag";
     span.appendChild(txt);
     list.appendChild(span)
  document.getElementById("unOrderList").appendChild(list);
  }
  var closeTag = document.getElementsByClassName("closeTag");
     var i;
     for (i = 0; i < closeTag.length; i++) {
         closeTag[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
     }
 }

  for (i = 0; i < closeTag.length; i++) {
            closeTag[i].onclick = function() {
            var displayNone = this.parentElement;
            displayNone.style.display = "none";
            }
        }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
