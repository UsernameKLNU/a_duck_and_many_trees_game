namespace SpriteKind {
    export const Ground = SpriteKind.create()
}
function initGround () {
    Ground1 = sprites.create(assets.image`Ground1`, SpriteKind.Ground)
    Ground2 = sprites.create(assets.image`Ground1`, SpriteKind.Ground)
    Ground1.left = 0
    Ground1.bottom = 120
    Ground2.left = 160
    Ground2.bottom = 120
    Ground1.vx = -100
    Ground2.vx = -100
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.vy = -160
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.y == 95) {
        dino.vy = -160
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(true)
})
function initDino () {
    dino = sprites.create(img`
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
        `, SpriteKind.Player)
    dino.setPosition(15, 95)
    animation.runImageAnimation(
    dino,
    [img`
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
        `,img`
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
        `],
    100,
    true
    )
}
let cactus: Sprite = null
let choice = 0
let dino: Sprite = null
let Ground2: Sprite = null
let Ground1: Sprite = null
scene.setBackgroundColor(1)
initGround()
initDino()
game.setDialogCursor(img`
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
    `)
game.showLongText("按下掌机上的A以跳跃", DialogLayout.Top)
game.showLongText("按下“上”可以在空中跳跃（用来调试）", DialogLayout.Full)
game.showLongText("Press A on the handheld to jump, press \"up\" to jump in the air (for debugging)", DialogLayout.Top)
game.onUpdate(function () {
    if (dino.y < 95) {
        dino.ay = 400
    } else {
        dino.ay = 0
        dino.y = 95
    }
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
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
            `, Ground1.vx, 0)
        cactus.y = 95
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ......cc66......
            .....c6576c.....
            ....c677576c....
            ....cc677666....
            ...cc6c6667cc...
            ..6c666777cc6c..
            ..c76666766776..
            ..c6777777776c..
            ..cc67777776cc..
            .c67cc76676676c.
            .c777666667777c.
            .c6777777777766.
            .cc7767776776666
            c676cc6766666776
            c777766666677776
            cc7777777777776c
            .c676777677767c.
            ..cc667666766c..
            ...ccc6c66ccc...
            .....cccccc.....
            .......ee.......
            ......eeee......
            .....eeeeee.....
            .......ee.......
            `, Ground1.vx, 0)
        cactus.y = 95
    } else if (choice == 3) {
        cactus = sprites.createProjectileFromSide(img`
            .............6666...............
            ..........666667766.6666........
            .........677777777767776........
            ......66667775577757777666......
            .....677666675557557776777666...
            .....6776777775555577777766776..
            ...66666777777775777777766666...
            .66667767777755757555777776776..
            6666777677775577557555777767766.
            .6667767777777775577777777767666
            .c6766777677777775777777677766..
            cc77666667777777777777777666666c
            cc76666677777777777777777766776c
            c6666776777777777777766677666776
            66667766667776777767767766766666
            ccc76677677776677766767776776ccc
            cc7766776777677677676667767766cc
            .666c676667677766667766666666cc.
            .ccc66676666776666677677666cccc.
            ...ccc77c6767666676676677666ccc.
            ...cc676c7766676677666666c666cc.
            ....c6cc676c6677677c66c666ccc...
            ....ccccc6c66667667cc6ccc6ccc...
            ......ccccc66c66c66cccccccc.....
            .......cc.cc6c6ccc6cccc.cc......
            ...........cccccccccc...........
            .............feeeeee............
            ............feeeeeefe...........
            .........eeeeefeeeffee..........
            ............ffffeef..ee.........
            ...............fee..............
            ................e...............
            `, Ground1.vx, 0)
        cactus.y = 95
    }
})
forever(function () {
    if (Ground1.right <= 0) {
        Ground1.right = 160
    }
    if (Ground2.right <= 0) {
        Ground2.right = 160
    }
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
