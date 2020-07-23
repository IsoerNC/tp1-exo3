let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    while (y < 7) {
        basic.pause(100)
        y += 1
        led.plotBrightness(x, y, 255)
        led.plotBrightness(x, y - 1, 175)
        led.plotBrightness(x, y - 2, 80)
        led.unplot(x, y - 3)
        if (led.brightness() == 0) {
        	
        }
    }
})
