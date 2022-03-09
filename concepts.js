///////PROMISES///////
//// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// The Promise has one of 3 states (Pending, Resolved, Rejected)
const myPromise = new Promise((resolve, reject) => {
    console.log('Promise is pending!')
    if(false){
        setTimeout(()=>{
            resolve('Promise Resolved')
        }, 1000)
    } else {
        setTimeout(()=>{
            reject('Promise Resolved')
        }, 3000)
    }
});
//Once the promise is either Resolved or Rejected, then the Promise object will be holding the value returned from the callback of Resolved/Rejected
//to access that value from the Resolved we use .then on the promise and .catch on the Rejected
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
///////ASYNC///////
///////MEMOIZATION///////
///////CURRYING///////
///////CLASSES///////
///////INHERITANCE///////