document.getElementById('toggle').addEventListener('change', function() {
  const isEncrypting = this.checked;
  
  // Toggle between Encrypt and Decrypt sections
  if (isEncrypting) {
    document.getElementById('encryptSection').style.display = 'flex';
    document.getElementById('decryptSection').style.display = 'none';
    document.getElementById('encryptLabel').style.color = '#4CAF50';
    document.getElementById('decryptLabel').style.color = '#555';
    document.getElementById('encryptButton').innerText = 'Şifrele';
  } else {
    document.getElementById('encryptSection').style.display = 'none';
    document.getElementById('decryptSection').style.display = 'flex';
    document.getElementById('decryptLabel').style.color = '#4CAF50';
    document.getElementById('encryptLabel').style.color = '#555';
    document.getElementById('decryptButton').innerText = 'Çöz';
  }
});

document.getElementById('encryptButton').addEventListener('click', function() {
  const text = document.getElementById('textInput').value;
  
  // Check if input is empty
  if (text.trim() === '') {
    document.getElementById('textInput').classList.add('invalid');
    return;
  }
  
  // Remove invalid class if text is entered
  document.getElementById('textInput').classList.remove('invalid');
  
  const encryptedText = btoa(text);  // Simple Base64 encryption
  document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
  const text = document.getElementById('outputText').value;
  
  // Check if input is empty
  if (text.trim() === '') {
    document.getElementById('outputText').classList.add('invalid');
    return;
  }
  
  // Remove invalid class if text is entered
  document.getElementById('outputText').classList.remove('invalid');
  
  try {
    const decryptedText = atob(text);  // Base64 decryption
    document.getElementById('textInput').value = decryptedText;
  } catch (error) {
    alert("Geçersiz şifreli metin.");
  }
});
