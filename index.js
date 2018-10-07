// list of commands can be used

/*
cd directory name
$ cd test

ls to list directory

usage

$ ls

mkdir  to make directory

$ mkdir test

pwd to show current path
$ pwd


rm  to  remove directory
$ rm

session clear     to clear previous session

$ session clear

*/

(function () {
    let terminal = document.getElementById("terminal");
    let input = document.getElementById("input");
    // let previous = document.getElementsByClassName("previous");
    // let result = document.getElementsByClassName('result');
    let history = document.getElementById("history");

    dirList = [];
    currDir = "/";
    inputValue = ''


    input.addEventListener("keyup", function (event) {
        event.preventDefault();

        if (event.keyCode === 13) {

            handleInput(event.target.value)

            // clearing input
            event.target.value = ''
        }

    });


    let handleInput = (value) => {
        inputValue = value
        if (value.length > 1) {
            let data = value.split(' ');
            let command = data[0]
            data.shift()
            exeCommand(command, data)
        }

    }

    let exeCommand = (command, commandValue) => {
        command = command.toLocaleLowerCase()


        switch (command) {
            case "mkdir":
                mkDir(commandValue)
                break;
            case "cd":
                changeDirectory(commandValue)
                break;
            case "rm":
                removeDir()
                break;
            case "pwd":
                showDirectory()
                break;
            case "ls":
                listDirectory()
                break;
            case "session":
                if (inputValue == "session clear") {
                    clearSession()
                } else
                    displayError()
                break;
            default:
                displayError()

        }
        if (inputValue.toLocaleLowerCase() == 'session clear') {
            clearSession()
        }
    }

    let changeDirectory = (commandValue) => {
        if (commandValue.length > 1) {
            displayError();
        } else {
            commandArr = commandValue.split('/')
            commandArr.forEach(element => {

            });
        }
    }
    let checkIfDirAvailable = (data) => {

    }
    let removeDir = () => {

    }
    let mkDir = (commandValue) => {
        let dirArr = currDir.split('/')
        let dirStrng = "dirList"
        if (dirArr.length > 2) {
            console.log(dirArr.length)

            for (i = 0; dirArr.length; i++) {
                dirStrng += `[${dirArr[i]}]`
            }
            eval(dirStrng);
        } else {
            let error = false;
            commandValue.map(a => {

                if (dirList.includes(a)) {
                    error = true
                    previousHTML = history.innerHTML
                    previousHTML += `<span class="previous"><span class="green">$</span> ${inputValue}</span>
<span class="result">DIRECTORY ALREADY EXISTS</span>`
                    history.innerHTML = previousHTML
                } else {
                    dirList.push(a)
                }
            })
            previousHTML = history.innerHTML
            previousHTML += `<span class="previous"><span class="green">$</span> ${inputValue}</span>
<span class="result">MKDIR SUCCESS</span>`
            history.innerHTML = previousHTML


        }
    }



    let showDirectory = () => {
        previousHTML = history.innerHTML
        previousHTML += `<span class="previous"><span class="green">$</span> ${inputValue}</span>
<span class="result">PATH : ${currDir} </span>`
        history.innerHTML = previousHTML
    }
    let listDirectory = () => {

        if (dirList.length === 0) {

            previousHTML = history.innerHTML
            let list = dirList.join(',')
            previousHTML += `<span class="previous"><span class="green">$</span> ${inputValue}</span>
<span class="result">There are no directory to show </span>`
            history.innerHTML = previousHTML

        } else {
            previousHTML = history.innerHTML
            let list = dirList.join(',')
            previousHTML += `<span class="previous"><span class="green">$</span> ${inputValue}</span>
<span class="result">DIRS : ${list} </span>`
            history.innerHTML = previousHTML
        }
    }

    let displayError = () => {
        previousHTML = history.innerHTML
        previousHTML += `<span class="previous"><span class="green">$</span> ${inputValue}</span>
<span class="result">Invalid Command</span>`
        history.innerHTML = previousHTML
    }

    let clearSession = () => {

        history.innerHTML = ''
    }





})()