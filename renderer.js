window.electronAPI.send('unidirectional:channel', 'Hey there!');

(async () => {
  let result = await window.electronAPI.invoke('bidirectional:channel', 'Talk to me!');
  console.log(result);
  console.log('Find me @ the windows DevTools console!');
})();
