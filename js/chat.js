document.getElementById('open-chat').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'block';
  });
  
  document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'none';
  });
  
  document.getElementById('send-message').addEventListener('click', function() {
    var message = document.getElementById('chat-input').value;
    addMessage(message, 'user');
    document.getElementById('chat-input').value = '';
  });
  
  function addMessage(text, type) {
    var chatContent = document.querySelector('.chat-content');
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (type == 'user') {
      messageElement.classList.add('user-message');
    } else {
      messageElement.classList.add('bot-message');
    }
    messageElement.innerHTML = '<span>' + text + '</span>';
    chatContent.appendChild(messageElement);
  }