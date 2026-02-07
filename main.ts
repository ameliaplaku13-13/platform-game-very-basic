/** this is little itty bitty dude */
//  this is how he jumps
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    player_y = 2
    basic.pause(200)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    player_y = 4
})
function game_loop() {
    let player_x: number;
    
    while (true) {
        player_x = 0
        basic.clearScreen()
        led.plot(player_x, player_y)
        led.plot(obstacle_x, 4)
        //  collision check
        if (obstacle_x == player_x && player_y == 4) {
            basic.showString("GAME OVER")
            break
        }
        
        obstacle_x += 0 - 1
        if (obstacle_x < 0) {
            obstacle_x = 4
        }
        
        //  reset obstacle
        basic.pause(200)
    }
}

let obstacle_x = 0
let player_y = 0
for (let index = 0; index < 4; index++) {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
}
player_y = 4
//  this sum' obstacles to make his life hard heheahaaaHAHAHAAA
obstacle_x = 4
//  ready ... ?
basic.showString("3 2 1")
game_loop()
