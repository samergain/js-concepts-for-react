///////PROMISES///////
//// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// The Promise has one of 3 states (Pending, Resolved, Rejected)
const myPromise = new Promise((resolve, reject) => {
    console.log('Promise is pending!')
    if(true){
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
//we can also chain more than one .then to perform multiple sequenced processes on the resolved value of the Promise
myPromise
    .then(result => result  + '!!!')
    .then( newResult => console.log('second .then:',newResult))
    .catch(error => console.log(error))
//practical example is the fetch() method to access data from an API. fetch() returns a Promise which we resolve by using the .then to access the result (response)
// the 'response' is the entire HTTP response, not the actual json data. Therefore, we use .json() on the response which also returns a Promise
// that's why we need to chain a second .then to resolve the .json promise
//NOTE: run the following example in browser because fetch is not implemented in Node 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then( resolvedJson => console.log(resolvedJson))

//example fetch2:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser)
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id)
    })
    .then(response => response.json())
    .then(result => console.log(result))
///////ASYNC///////
//Async functions gives a way of handling async processes in a code that looks like synch code using the await keyword.
// await pauses the execusion of the code until the async process is resolved
//refactoring example fetch2 using async await:
const asyncFetch1 = async () => {
    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await getUsers.json();
    const firstUser = users[0];
    console.log(firstUser);
    const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    const posts = await getPosts.json();
    console.log(posts)
}
asyncFetch1();
//to handle errors in async functions we wrap our code in a try/catch blocks. Like so:
const asyncFetch2 = async () => {
    try{
        const getUsers = await fetch('https://jso.typicode.com/users');
        const users = await getUsers.json();
        const firstUser = users[0];
        console.log(firstUser);
        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
        const posts = await getPosts.json();
        console.log(posts)
    } catch(err){
        console.log('Something went wrong!')
    }
}
asyncFetch2();
///////MEMOIZATION///////
///////CURRYING///////
///////CLASSES///////
///////INHERITANCE///////