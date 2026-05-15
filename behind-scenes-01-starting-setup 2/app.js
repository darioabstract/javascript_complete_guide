const getName = () => {
    return prompt('Your Name: ', '');
}



const greet = () => {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();
