let contraseña = 0
let numero = 0
let letra = 0
let simbolo = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass =")
    for (let index = 0; index < 8; index++) {
        contraseña = randint(1, 3)
        if (contraseña == 1) {
            numero = randint(0, 9)
            basic.showString("" + (numero))
            basic.pause(2000)
        } else if (contraseña == 2) {
            letra = randint(3, 6)
            if (letra == 3) {
                basic.showString("a")
                basic.pause(2000)
            } else if (letra == 4) {
                basic.showString("c")
                basic.pause(2000)
            } else if (letra == 5) {
                basic.showString("x")
                basic.pause(2000)
            } else if (letra == 6) {
                basic.showString("j")
                basic.pause(2000)
            }
        } else if (contraseña == 3) {
            simbolo = randint(7, 10)
            if (simbolo == 7) {
                basic.showString("!")
                basic.pause(2000)
            } else if (simbolo == 8) {
                basic.showString("?")
                basic.pause(2000)
            } else if (simbolo == 9) {
                basic.showString(")")
                basic.pause(2000)
            } else if (simbolo == 10) {
                basic.showString("/")
                basic.pause(2000)
            }
        }
    }
    basic.clearScreen()
})
