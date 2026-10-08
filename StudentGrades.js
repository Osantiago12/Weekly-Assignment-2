const prompt = require("prompt-sync")()

let arr = []
let back = false
studentGrades()

function studentGrades() {
    console.log(`Student Grade Manager\n1. Add Grade\n2. Remove Grade\n3. Calculate Average\n4. Find Highest Grade\n5. Print All Grades\n6. Exit`)
    let choice = Number(prompt(`Enter your choice: `))
    if (choice < 1 || choice > 6) {
        console.log(`Invalid choice...`)
        choice = Number(prompt(`Enter your choice: `))
    }
    if (choice == 6) {
        console.log(`Goodbye`)
        return

    } else if (choice == 1) {
        add()

    } else if (choice == 2) {
        remove()

    } else if (choice == 3) {
        average()

    } else if (choice == 4) {
        highest()

    } else if (choice == 5) {
        printAll()
    }

    function add() {
        back = false
        while (back == false) {
            let grade = prompt(`what grades would you like to enter? 0-100. Type "back" to return back to the menu: `)
            grade = grade.toLowerCase()
            if (grade == "back") {
                back = true
                studentGrades()
            } else {
                let num = Number(grade)
                if (isNaN(grade) || grade < 0 || grade > 100) {
                    console.log(`Please pick a valid number within the range of 0-100`)
                } else {
                    arr.push(num)
                    console.log(arr)
                }
            }
        }
    }

    function remove() {
        back = false
        if (arr.length == 0) {
            console.log(`There are no grades to remove.`)
            back = true
            setTimeout(() => {
                studentGrades()
            }, 2000)
        }
        while (back == false) {
            if (arr.length == 0) {
                back = true
                console.log(`No more grades to remove.`)
                setTimeout(() => {
                    studentGrades()
                }, 1500)
            } else {
                let grade = prompt(`what grades would you like to remove? 0-100. Type "back" to return back to the menu: `)
                grade = grade.toLowerCase()
                if (grade == "back") {
                    back = true
                    studentGrades()
                } else {
                    let num = Number(grade)
                    let index = arr.indexOf(num)

                    if (arr.indexOf(num) === -1) {
                        console.log(`Grade is not in the system...`)
                    } else {
                        arr.splice(index, 1)
                        console.log(arr)
                    }
                }
            }
        }
    }

    function average() {
        let sum = 0
        if (arr.length == 0) {
            back = true
            console.log(`No grades to work with in the system.`)
            setTimeout(() => {
                studentGrades()
            }, 1500)
        } else {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            console.log("The average for all the inputted grades is [ " + sum / arr.length + " ]")
            setTimeout(() => {
                studentGrades()
            }, 2000)
        }
    }

    function highest() {
        if (arr.length == 0) {
            back = true
            console.log(`No grades to work with in the system.`)
            setTimeout(() => {
                studentGrades()
            }, 1500)
        } else {
            let high = 0
            for (let i = 0; i < arr.length; i++) {
                if (high < arr[i]) {
                    high = arr[i]
                }
            }
            console.log("The highest grade in the system currently is [ " + high + " ]")
            setTimeout(() => {
                studentGrades()
            }, 1500)
        }
    }

    function printAll() {
        if (arr.length == 0) {
            console.log(`No grades to work with in the system.`)
            setTimeout(() => {
                studentGrades()
            }, 1500)
        } else {
            let count = 1
            console.log("Printing ALL Grades...")
            setTimeout(() => {
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${count}. ${arr[i]}`)
                    count++
                }
                let back = prompt(`Type anything to return back to the main menu: `)
                if (back !== "") {
                    studentGrades()
                }
            }, 2000)
        }
    }
}