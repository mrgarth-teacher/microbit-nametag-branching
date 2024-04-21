input.onButtonPressed(Button.A, function () {
    if (presses == 0) {
        presses = 1
    } else {
        presses = 0
    }
})
let presses = 0
presses = 0
basic.forever(function () {
    if (presses == 1) {
        basic.showString("Mr G")
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.showString("Digitech")
    }
})
