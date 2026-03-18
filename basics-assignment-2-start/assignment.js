const task3Element = document.getElementById('task-3');

const showText = () => {
    alert("Welcome to the task!")
};

const outputName = (name) => {
    alert('Hi ' + name);
}


const concatStr = (str1, str2, str3) => {
    const combinedString = str1 + str2 + str3;
    return combinedString;
}

const outputString = () => {
    return alert()
}


outputName('Dario');
task3Element.addEventListener('click', showText);
const concatenatedString = concatStr('This is', ' a', ' string!')
alert(concatenatedString);