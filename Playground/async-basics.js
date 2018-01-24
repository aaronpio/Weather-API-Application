console.log('Starting app');

setTimeout( () => {
    console.log('Inside of callback')
},2000);

setTimeout( () => {
    console.log('yo you fool')
},0);

console.log('finishing up yo');