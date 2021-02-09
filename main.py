@namespace
class SpriteKind:
    Ground = SpriteKind.create()
def initGround():
    global Ground1, Ground2
    Ground1 = sprites.create(assets.image("""
        Ground1
    """), SpriteKind.Ground)
    Ground2 = sprites.create(assets.image("""
        Ground1
    """), SpriteKind.Ground)
    Ground1.left = 0
    Ground1.bottom = 120
    Ground2.left = 160
    Ground2.bottom = 120
    Ground1.vx = -100
    Ground2.vx = -100

def on_up_pressed():
    dino.vy = -160
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    if dino.y == 95:
        dino.vy = -160
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def initDino():
    global dino
    dino = sprites.create(img("""
            . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 5 d f . . 
                    . . . . b 5 5 1 f f 5 d 4 c . . 
                    . . . . b 5 5 d f b d d 4 4 . . 
                    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
                    b d d d b b d 5 5 4 4 4 4 4 b . 
                    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
                    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
                    c b d c d 5 5 b 5 5 5 5 5 5 b . 
                    . c d d c c b d 5 5 5 5 5 d b . 
                    . . c b d d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.player)
    dino.set_position(15, 95)
    animation.run_image_animation(dino,
        [img("""
                . . . . . . . . . . b 5 b . . .
                        . . . . . . . . . b 5 b . . . .
                        . . . . . . . . . b c . . . . .
                        . . . . . . b b b b b b . . . .
                        . . . . . b b 5 5 5 5 5 b . . .
                        . . . . b b 5 d 1 f 5 5 d f . .
                        . . . . b 5 5 1 f f 5 d 4 c . .
                        . . . . b 5 5 d f b d d 4 4 . .
                        b d d d b b d 5 5 5 4 4 4 4 4 b
                        b b d 5 5 5 b 5 5 4 4 4 4 4 b .
                        b d c 5 5 5 5 d 5 5 5 5 5 b . .
                        c d d c d 5 5 b 5 5 5 5 5 5 b .
                        c b d d c c b 5 5 5 5 5 5 5 b .
                        . c d d d d d d 5 5 5 5 5 d b .
                        . . c b d d d d d 5 5 5 b b . .
                        . . . c c c c c c c c b b . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . b 5 5 b . . . 
                        . . . . . . b b b b b b . . . . 
                        . . . . . b b 5 5 5 5 5 b . . . 
                        . b b b b b 5 5 5 5 5 5 5 b . . 
                        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
                        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
                        . . b d 5 5 b 1 f f 5 4 4 c . . 
                        b b d b 5 5 5 d f b 4 4 4 4 b . 
                        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
                        c d d d c c b 5 5 5 5 5 5 5 b . 
                        c b d d d d d 5 5 5 5 5 5 5 b . 
                        . c d d d d d d 5 5 5 5 5 d b . 
                        . . c b d d d d d 5 5 5 b b . . 
                        . . . c c c c c c c c b b . . .
            """)],
        100,
        True)
    keyboard.function_key(KeyboardFunctionKey.UP_ARROW, KeyboardKeyEvent.PRESS)
cactus: Sprite = None
choice = 0
dino: Sprite = None
Ground2: Sprite = None
Ground1: Sprite = None
scene.set_background_color(1)
initGround()
initDino()

def on_on_update():
    if dino.y < 95:
        dino.ay = 400
    else:
        dino.ay = 0
        dino.y = 95
game.on_update(on_on_update)

def on_update_interval():
    global choice, cactus
    choice = randint(0, 4)
    if choice == 0:
        cactus = sprites.create(img("""
                ................86..................
                            ...........6688867886...............
                            ...........8666877688868............
                            ............868777767768............
                            .........688667777776688............
                            ........67767777777778666...........
                            .........6776667767666868...........
                            ..........866667667677688...........
                            .........8666666666667778...........
                            ........667766666666666676..........
                            .......67766667666776667776.........
                            ......886667776676777666688.........
                            .....67766777667767777666768........
                            ....6776666666777667776666776.......
                            .....8667776667766676677776776......
                            ......8777666666667776777776688.....
                            ....6887766776677677777777776776....
                            ..8866666677767777777777766666778...
                            .86666666777667767777766666776668...
                            ..88677666666777677677666667776668..
                            ..86776677666666666666667776666668..
                            886666677766667666666776677766668...
                            6668666676667766767767766677666668..
                            88866666666777677677667666666776668.
                            .86668866666766776776666667766666668
                            .86688666666666776666667667776666688
                            .668866666666666666666677666666688..
                            ..8866686666666666677667776666668...
                            ...866886666666666677667776666668...
                            ...86886668666666667666666666888....
                            ....88866886686666666666666668......
                            ......86886668666866668666868.......
                            ......88866688668866688866888.......
                            ........8888888688888ce868..........
                            ..............e88e88.ec.8...........
                            ...............eeee..e..............
                            ...............ceef.ce..............
                            ...............ceefcec..............
                            ...............feefce...............
                            ...............fceeec...............
                            ...............ffceec...............
            """),
            SpriteKind.projectile)
    elif choice == 1:
        pass
    elif choice == 3:
        pass
game.on_update_interval(1000, on_update_interval)

def on_forever():
    if Ground1.right <= 0:
        Ground1.right = 160
    if Ground2.right <= 0:
        Ground2.right = 160
forever(on_forever)
