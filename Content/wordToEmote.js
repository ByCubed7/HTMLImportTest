data = {
      "pog" : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c1899a1-17fd-4f4c-aacd-6ea1a5761bd0/de4xfeg-9ccaa3c1-ea30-4a82-9785-bc428527ed2d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGMxODk5YTEtMTdmZC00ZjRjLWFhY2QtNmVhMWE1NzYxYmQwXC9kZTR4ZmVnLTljY2FhM2MxLWVhMzAtNGE4Mi05Nzg1LWJjNDI4NTI3ZWQyZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.eeoAOKTMl7lZOIMXwBwCAC3VA6Z9WHOr0FeuB5J8KHg"
}

imageTemplate = '<span class="emote"><img src="SRC"></span>'

function onMessage(obj){
  if (obj['detail']['command'] === 'PRIVMSG') {
    $('#log>div:last-child').css({
        'opacity': '0',
        'display': 'none'
      }).slideDown(300).animate({
        opacity: 1
    }, 300);

    var messageElement = $('#log>div:last-child')[0].getElementsByClassName("message")[0];

    // Replace message with custom emotes if applicable
    var messageText = messageElement.innerHTML

    for (var key in data) {
      imgSrc = data[key];
      img = imageTemplate.replace("SRC", imgSrc);
      messageText = messageText.replace(key, img);
    }

    messageElement.innerHTML = messageText
  }
}
