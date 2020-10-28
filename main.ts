let Random = 0
let under_weight = 0
let normal_weight = 0
let over_weight = 0
let Obesity = 0
let BMI = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    while (true) {
        basic.showNumber(543210)
        basic.clearScreen()
        Random = randint(-10, 10)
        if (Random > 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (Random < 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showNumber(0)
        }
        basic.clearScreen()
        basic.showString("Your number is:")
        basic.showNumber(Random)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    under_weight = 0
    normal_weight = 0
    over_weight = 0
    Obesity = 0
    for (let index = 0; index < 30; index++) {
        BMI = randint(0.1, 40.5)
        basic.showNumber(BMI)
        if (BMI < 18.5) {
            basic.showString("Under_weight")
            under_weight += 1
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            basic.showString("Normal_weight")
            normal_weight += 1
        } else if (BMI >= 25 && BMI <= 29.9) {
            basic.showString("Over_weight")
            over_weight += 1
        } else {
            basic.showString("Obesity")
            Obesity += 1
        }
        basic.clearScreen()
    }
    basic.showString("Avarege_BMI")
    basic.showNumber(under_weight + (normal_weight + (over_weight + Obesity / 30)))
    basic.clearScreen()
    basic.showString("Over_weight")
    basic.showNumber(over_weight)
    basic.clearScreen()
    basic.showString("Obesity")
    basic.showNumber(Obesity)
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = randint(0, 4)
        for (let y = 0; y <= 4; y++) {
            led.plot(0, y)
            basic.pause(200)
        }
        music.playMelody("A - G B - E G - ", 120)
        for (let y = 0; y <= 4; y++) {
            led.unplot(0, y)
            basic.pause(200)
        }
        music.playMelody("A - G B - E G - ", 120)
    }
})
