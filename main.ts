scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile6, function (sprite, location) {
    info.pauseCountup()
    readTimesFromSettings()
    level += 1
    updatePlayerTime(level, info.getTimeElapsed())
    showLeaderboards()
    if (level >= levels.length) {
        game.over(true, effects.confetti)
    }
    goToNextLevel(level)
    resetTimer()
})
function animateHero() {
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 b b b b b b 1 1 9 . . . 
        . . . 9 b b 9 9 9 9 9 9 1 . . . 
        . . . 9 b b 9 b b b b b 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        9 9 9 9 b b 9 b a a a a 1 . . . 
        9 f f 9 b b 9 b b b b b 1 . . . 
        9 f f 9 b b 9 9 9 9 9 9 1 . . . 
        9 9 9 9 b b b b b b b 1 9 . . . 
        . . . 9 9 9 9 9 9 9 9 b 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . 9 9 b b b b b b b 1 9 . . . 
        . 9 5 5 5 5 9 9 9 9 5 5 9 . . . 
        . 9 9 9 9 9 . . . 9 5 9 . . . . 
        . . . . . . . . . 9 9 . . . . . 
        `, img`
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 b b b b b b 1 1 9 . . . 
        . . . 9 b b 9 9 9 9 9 9 1 . . . 
        . . . 9 b b 9 b b b b b 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        9 9 9 9 b b 9 b a a a a 1 . . . 
        9 f f 9 b b 9 b b b b b 1 . . . 
        9 f f 9 b b 9 9 9 9 9 9 1 . . . 
        9 9 9 9 b b b b b b b 1 9 . . . 
        . . . 9 9 9 9 9 9 9 9 b 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . 9 5 5 5 9 9 9 9 9 5 5 9 . . 
        . . 9 5 9 9 . . . . . 9 9 9 . . 
        . . 9 9 . . . . . . . . . . . . 
        `],
        100,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 1 b b b b b b 9 . . . 
        . . . 1 9 9 9 9 9 9 b b 9 . . . 
        . . . 1 b b b b b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 9 9 9 
        . . . 1 b b b b b 9 b b 9 f f 9 
        . . . 1 9 9 9 9 9 9 b b 9 f f 9 
        . . . 9 1 b b b b b b b 9 9 9 9 
        . . . 9 b 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 1 b b b b b b b 9 9 . . 
        . . . 9 5 5 9 9 9 9 5 5 5 5 9 . 
        . . . . 9 5 9 . . . 9 9 9 9 9 . 
        . . . . . 9 9 . . . . . . . . . 
        `, img`
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 1 b b b b b b 9 . . . 
        . . . 1 9 9 9 9 9 9 b b 9 . . . 
        . . . 1 b b b b b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 9 9 9 
        . . . 1 b b b b b 9 b b 9 f f 9 
        . . . 1 9 9 9 9 9 9 b b 9 f f 9 
        . . . 9 1 b b b b b b b 9 9 9 9 
        . . . 9 b 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . 9 5 5 9 9 9 9 9 5 5 5 9 . . 
        . . 9 9 9 . . . . . 9 9 5 9 . . 
        . . . . . . . . . . . . 9 9 . . 
        `],
        100,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 b b b b b b 1 1 9 . . . 
        . . . 9 b b 9 9 9 9 9 9 1 . . . 
        . . . 9 b b 9 b b b b b 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        9 9 9 9 b b 9 b a a a a 1 . . . 
        9 f f 9 b b 9 b b b b b 1 . . . 
        9 f f 9 b b 9 9 9 9 9 9 1 . . . 
        9 9 9 9 b b b b b b b 1 9 . . . 
        . . . 9 9 9 9 9 9 9 9 b 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 4 4 9 9 9 9 4 4 9 . . . 
        . . . 9 9 9 . . . . 9 9 9 . . . 
        `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 1 b b b b b b 9 . . . 
        . . . 1 9 9 9 9 9 9 b b 9 . . . 
        . . . 1 b b b b b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 9 9 9 
        . . . 1 b b b b b 9 b b 9 f f 9 
        . . . 1 9 9 9 9 9 9 b b 9 f f 9 
        . . . 9 1 b b b b b b b 9 9 9 9 
        . . . 9 b 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 4 4 9 9 9 9 4 4 9 . . . 
        . . . 9 9 9 . . . . 9 9 9 . . . 
        `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 b b b b b b 1 1 9 . . . 
        . . . 9 b b 9 b b b b b 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        . . . 9 b b 9 b a a a a 1 . . . 
        9 9 9 9 b b 9 b b b b b 1 . . . 
        9 f f 9 b b 9 9 9 9 9 9 9 . . . 
        9 f f 9 b b 9 9 9 9 9 9 9 . . . 
        9 9 9 9 b b b b b b b 1 9 . . . 
        . . . 9 9 9 9 9 9 9 9 b 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 5 5 9 9 9 9 5 5 9 . . . 
        . . . 9 5 9 . . . 9 5 9 . . . . 
        . . . 9 9 . . . . 9 9 . . . . . 
        `],
        100,
        characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 1 b b b b b b 9 . . . 
        . . . 1 b b b b b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 . . . 
        . . . 1 b b b b b 9 b b 9 9 9 9 
        . . . 9 9 9 9 9 9 9 b b 9 f f 9 
        . . . 9 9 9 9 9 9 9 b b 9 f f 9 
        . . . 9 1 b b b b b b b 9 9 9 9 
        . . . 9 b 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 5 5 9 9 9 9 5 5 9 . . . 
        . . . . 9 5 9 . . . 9 5 9 . . . 
        . . . . . 9 9 . . . . 9 9 . . . 
        `],
        100,
        characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 b b b b b b 1 1 9 . . . 
        . . . 9 b b 9 9 9 9 9 9 1 . . . 
        . . . 9 b b 9 b b b b b 1 . . . 
        9 9 9 9 b b 9 b a a a a 1 . . . 
        9 f f 9 b b 9 b a a a a 1 . . . 
        9 f f 9 b b 9 b a a a a 1 . . . 
        9 9 9 9 b b 9 b b b b b 1 . . . 
        . . . 9 b b 9 9 9 9 9 9 1 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 9 9 9 9 9 9 9 b 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . 9 5 5 b b b b b b 5 5 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        `],
        100,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
        hero,
        [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 1 b b b b b b 9 . . . 
        . . . 1 9 9 9 9 9 9 b b 9 . . . 
        . . . 1 b b b b b 9 b b 9 . . . 
        . . . 1 a a a a b 9 b b 9 9 9 9 
        . . . 1 a a a a b 9 b b 9 f f 9 
        . . . 1 a a a a b 9 b b 9 f f 9 
        . . . 1 b b b b b 9 b b 9 9 9 9 
        . . . 1 9 9 9 9 9 9 b b 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . . 9 b 9 9 9 9 9 9 9 9 . . . 
        . . . 9 1 b b b b b b b 9 . . . 
        . . 9 5 5 b b b b b b 5 5 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        `],
        100,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
    )
    info.startCountup(true)
}
function doVerticalSimpleHarmonicMotion(mySprite: Sprite, offsetx: number, offsety: number) {
    mySprite.y = py2 - offsety + screen.height / 2 + cy * Math.sin(rate * time)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -180
        jump = false
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
    } else {
        if (jump == false) {
            if (hero.vy > -60 && hero.vy < 60) {
                hero.vy = -120
                jump = true
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    resetLevel()
})
function placeSpritesOnTileMap() {
    list = tiles.getTilesByType(assets.tile`myTile3`)
    tiles.placeOnTile(mySprite, list._pickRandom())
    px = mySprite.x
    py = mySprite.y
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    list = tiles.getTilesByType(assets.tile`myTile2`)
    tiles.placeOnTile(mySprite3, list._pickRandom())
    px1 = mySprite3.x
    py1 = mySprite3.y
    for (let value1 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value1, assets.tile`transparency16`)
    }
    list = tiles.getTilesByType(assets.tile`myTile`)
    tiles.placeOnTile(mySprite2, list._pickRandom())
    py2 = mySprite2.y
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    list = tiles.getTilesByType(assets.tile`myTile0`)
    tiles.placeOnTile(mySprite5, list._pickRandom())
    px2 = mySprite5.x
    // tiles.placeOnRandomTile(mySprite, )
    for (let value4 of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    list = tiles.getTilesByType(assets.tile`myTile1`)
    tiles.placeOnTile(mySprite6, list._pickRandom())
    px3 = mySprite6.x
    py3 = mySprite6.y
    for (let value3 of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(hero, assets.tile`myTile4`)
    for (let value5 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
}
function doTopPendulumMotion(mySprite: Sprite, offSetX: number, offSetY: number) {
    c = Math.cos(rate * time)
    angle = halfAngleRange * c + baseAngle
    mySprite.x = px1 - offSetX + screen.width / 2 + cx * Math.cos(angle)
    mySprite.y = py1 - offSetY + screen.height / 2 + cy * Math.sin(angle)
}
function doBottomPendulumMotion(mySprite: Sprite, offSetX: number, offSetY: number) {
    c = Math.cos(rate * time)
    angle = halfAngleRange * c + baseAngle2
    mySprite.x = px3 - offSetX + screen.width / 2 + cx * Math.cos(angle)
    mySprite.y = py3 - offSetY + screen.height / 2 + cy * Math.sin(angle)
}
function makeSprites() {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . a a b . . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . a b b b b b a . . . . . 
        . . . b a b b b b b a a b b . . 
        . . b a a b b 9 b b a a b . . . 
        . b b a a b b b b b a b . . . . 
        . . . . a b b b b b a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . b a a . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 9 . . . 9 . 9 . . . 9 . 9 . . 
        . 9 9 . 9 9 . 9 9 . 9 9 . 9 9 . 
        9 9 9 b b b b b b b b b b 9 9 9 
        . 9 b b b b b b b b b b b b 9 . 
        . 9 b b b b b b b b b b b b 9 . 
        9 9 b b b b b b b b b b b b 9 9 
        . 9 b b b b b b b b b b b b 9 . 
        . 9 9 b b b b b b b b b b 9 9 . 
        9 9 9 . 9 9 . 9 9 . 9 9 . 9 9 9 
        . 9 . . . 9 . 9 . . . 9 . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 5 9 5 9 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . d 5 2 5 2 5 2 5 d . . . . 
        . . d d 5 2 2 2 2 2 5 d d . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . d d d 6 6 6 6 6 6 6 d d d d . 
        . . . d 4 4 4 4 4 4 4 d . . . . 
        . . . . d 9 9 9 9 9 d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        9 9 9 9 9 9 9 9 9 9 9 9 b b b . 
        9 9 9 9 9 9 9 9 9 9 9 9 b b b b 
        9 9 9 9 9 9 9 9 9 9 9 9 b b b . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite5 = sprites.create(img`
        . . . . 9 . . 9 . . 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 b b b b 9 9 9 . . . 
        . . . . 9 9 b b b b 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 . . 9 . . 9 . . . . . 
        `, SpriteKind.Enemy)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 e 9 e 9 . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . d e 2 e 2 e 2 e d . . . . 
        . . d d e 2 2 2 2 2 e d d . . . 
        e e e e e e e e e e e e e e e e 
        . d d d 6 6 6 6 6 6 6 d d d d . 
        . . . d 4 4 4 4 4 4 4 d . . . . 
        . . . . d 9 9 9 9 9 d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    hero = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 b b b b b b 1 1 9 . . . 
        . . . 9 b b 9 9 9 9 9 9 1 . . . 
        . . . 9 b b 9 b b b b b 1 . . . 
        . . . 9 b b 9 b 9 9 9 9 1 . . . 
        . . . 9 b b 9 b 9 9 9 9 1 . . . 
        9 9 9 9 b b 9 b 9 9 9 9 1 . . . 
        9 a a 9 b b 9 b b b b b 1 . . . 
        9 a a 9 b b 9 9 9 9 9 9 1 . . . 
        9 9 9 9 b b b b b b b 1 9 . . . 
        . . . 9 9 9 9 9 9 9 9 b 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 b b b b b b b 1 9 . . . 
        . . . 9 4 4 9 9 9 9 4 4 9 . . . 
        . . . 9 9 9 . . . . 9 9 9 . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(hero)
    hero.ay = 500
    controller.moveSprite(hero, 100, 0)
}
function resetLevel() {
    goToNextLevel(level)
}
function doIntoOutoMotion(mySprite: Sprite, offSetX: number, offSetY: number) {
    mySprite.x = offSetX + screen.width / 2 + cx * Math.tan(rate * time)
    mySprite.y = offSetY + screen.height / 2
}
function doCircularMotion(mySprite: Sprite, offSetX: number, offSetY: number) {
    mySprite.x = px - offSetX + screen.width / 2 + cx * Math.cos(rate * time)
    mySprite.y = py - offSetY + screen.height / 2 + cx * Math.sin(rate * time)
}
function goToNextLevel(level: number) {
    levels = [tilemap`level2`, tilemap`level1`]
    tiles.setCurrentTilemap(levels[level])
    placeSpritesOnTileMap()
}
function doHorizontalSimpleHarmonicMotion(mySprite: Sprite, offsetX: number, offsetY: number) {
    mySprite.x = px2 - offsetX + screen.width / 2 + cx * Math.sin(rate * time)
}
function resetTimer() {
    info.clearCountup()
    info.startCountup(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    resetLevel()
})
let levels: tiles.TileMapData[] = []
let mySprite4: Sprite = null
let angle = 0
let c = 0
let py3 = 0
let px3 = 0
let mySprite6: Sprite = null
let px2 = 0
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let py1 = 0
let px1 = 0
let mySprite3: Sprite = null
let py = 0
let px = 0
let mySprite: Sprite = null
let list: tiles.Location[] = []
let jump = false
let time = 0
let py2 = 0
let hero: Sprite = null
let level = 0
let cy = 0
let cx = 0
let rate = 0
let halfAngleRange = 0
let baseAngle2 = 0
let baseAngle = 0
// 270 deg
baseAngle = 1.5 * Math.PI
// 90 deg
baseAngle2 = 0.5 * Math.PI
// 45 deg
halfAngleRange = 0.25 * Math.PI
rate = 20
cx = 40
cy = 30
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
readTimesFromSettings()
showLeaderboards()
makeSprites()
goToNextLevel(level)
animateHero()
game.onUpdate(function () {
    time = game.runtime() / 10000
    doVerticalSimpleHarmonicMotion(mySprite2, 0, 4)
    doTopPendulumMotion(mySprite3, 40, 40)
    doBottomPendulumMotion(mySprite6, 56, 80)
    doCircularMotion(mySprite, 70, 40)
    doIntoOutoMotion(mySprite4, 350, 80)
    doHorizontalSimpleHarmonicMotion(mySprite5, 40, 0)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("Clear all high scores?")) {
        blockSettings.clear()
    }
})
function updatePlayerTime(playerLevel: number, playerTime: number) {
    levelIndex = levelArray.indexOf("Level" + playerLevel)
    if (levelIndex != -1) {
        if (timeArray[levelIndex] > playerTime) {
            timeArray[levelIndex] = playerTime
        }
    } else {
        levelArray.push("Level" + playerLevel)
        timeArray.push(playerTime)
    }
    saveTimesToSettings()
}
function saveTimesToSettings() {
    for (let index = 0; index <= timeArray.length - 1; index++) {
        blockSettings.writeString("level" + levelArray[index], levelArray[index])
    }
    blockSettings.writeNumberArray("times", timeArray)
}
function showLeaderboards() {
    leaderboardText = "BEST TIMES:\\n"
    while (timeArray.length > 0) {
        bestTime = 9999
        bestTimeIndex = 0
        for (let index = 0; index <= timeArray.length - 1; index++) {
            if (timeArray[index] < bestTime) {
                bestTime = timeArray[index]
                bestTimeIndex = index
            }
        }
        leaderboardText = "" + leaderboardText + levelArray[bestTimeIndex] + "-" + timeArray[bestTimeIndex] + "\\n"
        timeArray.removeAt(bestTimeIndex)
        levelArray.removeAt(bestTimeIndex)
    }
    game.showLongText(leaderboardText, DialogLayout.Center)
}
function readTimesFromSettings() {
    levelArray = []
    if (blockSettings.exists("times")) {
        timeArray = blockSettings.readNumberArray("times")
    } else {
        timeArray = []
    }
    for (let index = 0; index <= timeArray.length - 1; index++) {
        let num = index + 1
        levelArray.push(blockSettings.readString("level" + "Level" + num))
    }
}
let bestTimeIndex = 0
let bestTime = 0
let leaderboardText = ""
let timeArray: number[] = []
let levelArray: string[] = []
let levelIndex = 0
