"""

this is little itty bitty dude

"""
# this is how he jumps

def on_button_pressed_a():
    global player_y
    player_y = 2
    basic.pause(200)
    music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_UP),
        music.PlaybackMode.UNTIL_DONE)
    player_y = 4
input.on_button_pressed(Button.A, on_button_pressed_a)

def game_loop():
    global obstacle_x
    while True:
        player_x = 0
        basic.clear_screen()
        led.plot(player_x, player_y)
        led.plot(obstacle_x, 4)
        # collision check
        if obstacle_x == player_x and player_y == 4:
            basic.show_string("GAME OVER")
            break
        obstacle_x += 0 - 1
        if obstacle_x < 0:
            obstacle_x = 4
        # reset obstacle
        basic.pause(200)
obstacle_x = 0
player_y = 0
for index in range(4):
    music._play_default_background(music.built_in_playable_melody(Melodies.NYAN),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
player_y = 4
# this sum' obstacles to make his life hard heheahaaaHAHAHAAA
obstacle_x = 4
# ready ... ?
basic.show_string("3 2 1")
game_loop()