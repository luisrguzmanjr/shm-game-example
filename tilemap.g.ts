// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`4000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120000000000000000000000130000000000140000000000000000000000000000000000000000000000000000000000000000150000000000000000000000000d0000000000000000000000000000000000101010100000000000000e0f00000000000000000000000000000000000000000001050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601050601020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c07020c0702030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a08030a0803040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b09040b0904`, img`
............................................22..................
............................................22..................
............................................22..................
............................................22..................
............................................22..................
............................................22..................
............................................22..................
............................................22..................
............................................22..................
..........................22................22..................
............................................22..................
.............2.................2222.........22..................
2222222222222222222222222222222222222222222222222222222222222222
................................................................
................................................................
................................................................
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles10,sprites.builtin.forestTiles14,sprites.builtin.forestTiles6,sprites.castle.tilePath5,sprites.swamp.swampTile6,sprites.swamp.swampTile8,sprites.castle.tilePath8,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
