// this is little itty bitty dude
let player_x = 0
let player_y = 4
// this sum' obstacles to make his life hard heheahaaaHAHAHAAA
let obstacle_x = 4
// ready ... ?
basic.showString("3 2 1")
// this is how he jumps
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    player_y = 2
    basic.pause(200)
    music.play(music.stringPlayable("A B C5 - - - - - - ", 1200), music.PlaybackMode.UntilDone)
    player_y = 4
})
function game_loop() {
    
    while (true) {
        basic.clearScreen()
        led.plot(player_x, player_y)
        led.plot(obstacle_x, 4)
        // collision check
        if (obstacle_x == player_x && player_y == 4) {
            basic.showString("GAME OVER")
            break
        }
        
        obstacle_x -= 1
        if (obstacle_x < 0) {
            obstacle_x = 4
        }
        
        // reset obstacle
        basic.pause(200)
    }
}

game_loop()
