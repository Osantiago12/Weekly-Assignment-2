const prompt = require("prompt-sync")()

let arr = []
let back = false
MovieCollection()

function MovieCollection() {
    console.log(`Movie Collection Manager\n1. Add Movie\n2. Remove Movie\n3. Search Movie\n4. Print All Movies\n5. Count Movies\n6. Display Movies in Uppercase\n7. Exit`)
    let choice = prompt(`Enter your choice: `)
    if (choice == 7) {
        console.log(`Goodbye`)
        return

    } else if (choice == 1) {
        add()

    } else if (choice == 2) {
        remove()

    } else if (choice == 3) {
        search()

    } else if (choice == 4) {
        printAll()

    } else if (choice == 5) {
        countAll()

    } else if (choice == 6) {
        upperCase()
    }

    function add() {
        back = false
        while (back == false) {
            let movie = prompt(`Type your movie you want to add. Type "back" to return to the main menu: `)
            movie = movie.toLowerCase()
            if (movie == "back") {
                back = true
                MovieCollection()
            } else {
                arr.push(movie)
                console.log(arr)
            }
        }
    }

    function remove() {
        back = false
        if (arr.length == 0) {
            back = true
            console.log(`There are no movies in the collection yet...`)
            setTimeout(() => {
                MovieCollection()
            }, 1500)
        }
        while (back == false) {
            let remove = prompt(`What movie would you like to remove? Type "back" to return to the main menu: `)
            remove = remove.toLowerCase()
            if (remove == "back") {
                back = true
                MovieCollection()
            } else {
                let index = arr.indexOf(remove)
                if (arr.indexOf(remove) === -1) {
                    console.log(`Movie does not exsist in the collection.`)
                } else {
                    arr.splice(index, 1)
                    console.log(arr)
                }
            }
        }
    }

    function search() {
        back = false
        if (arr.length == 0) {
            console.log(`There are no movies in the collection yet...`)
            back = true
            setTimeout(() => {
                MovieCollection()
            }, 1500)
        }
        while (back == false) {
            let search = prompt(`What moive would you like to search for? Type "back" to return to the main menu: `)
            search = search.toLowerCase()
            if (search == "back") {
                back = true
                MovieCollection()
            } else {
                if (arr.indexOf(search) === -1) {
                    console.log(`Movie could not be found.`)
                } else {
                    console.log(`Movie found!`)
                }
            }
        }
    }

    function printAll() {
        if (arr.length == 0) {
            console.log(`There are no movies in the collection yet...`)
            setTimeout(() => {
                MovieCollection()
            }, 1500)
        } else {
            let count = 1
            console.log(`Printing ALL movies...`)
            setTimeout(() => {
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${count}. ${arr[i]}`)
                    count++
                }
                let back = prompt(`Type anything to return back to the main menu: `)
                if (back !== "") {
                    MovieCollection()
                }
            }, 2000)
        }
    }

    function countAll() {
        if (arr.length == 0) {
            console.log(`There are no movies in the collection yet...`)
            setTimeout(() => {
                MovieCollection()
            }, 1500)
        } else {
            count = 0
            for (let i = 0; i < arr.length; i++) {
                count++
            }
            console.log(`Total Movies: ${count}`)
            setTimeout(() => {
                let back = prompt(`Type anything to return back to the main menu: `)
                if (back !== "") {
                    MovieCollection()
                }
            }, 500)
        }
    }

    function upperCase() {
        console.log(`Turning all movie names into uppercase format...`)
        let change = arr.map(char => {
            return char.split('').map(char2 => {
                let code = char2.charCodeAt(0)
                if (code >= 97 && code <= 122) {
                    return String.fromCharCode(code - 32)
                }
                return char2
            }).join('')
        })
        console.log(change)
        setTimeout(() => {
            let back = prompt(`Type anything to return back to the main menu: `)
            if (back !== "") {
                MovieCollection()
            }
        }, 500)
    }
}
