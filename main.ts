let Hatjes = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    Hatjes = randint(0, 10)
    basic.showNumber(Hatjes)
})
input.onButtonPressed(Button.AB, function () {
    Hatjes = randint(0, 10)
    time = 20
    for (let index = 0; index < 20; index++) {
        time += 0 - 1
        basic.showNumber(time)
        basic.pause(100)
    }
    basic.showNumber(Hatjes)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Hatjes = 0
})
