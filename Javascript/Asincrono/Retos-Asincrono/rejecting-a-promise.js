var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => reject(new Error('REJECTED!')), 300);
  });

  function onReject (error) {
    return console.log(error.message)
  }

promise .then(() => console.log('fulfill'), onReject);