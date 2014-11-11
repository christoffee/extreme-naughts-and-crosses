/**
    @module keyboard
    @namespace game
**/
game.module(
    'engine.keyboard'
)
.body(function() {
'use strict';

/**
    @class Keyboard
    @extends game.Class
**/
game.Keyboard = game.Class.extend({
    /**
        List of available keys.
        @property {Array} keys
    **/
    keys: [],
    keysDown: [],

    init: function() {
        this.keys[8] = 'BACKSPACE';
        this.keys[9] = 'TAB';
        this.keys[13] = 'ENTER';
        this.keys[16] = 'SHIFT';
        this.keys[17] = 'CTRL';
        this.keys[18] = 'ALT';
        this.keys[19] = 'PAUSE';
        this.keys[20] = 'CAPS_LOCK';
        this.keys[27] = 'ESC';
        this.keys[32] = 'SPACE';
        this.keys[33] = 'PAGE_UP';
        this.keys[34] = 'PAGE_DOWN';
        this.keys[35] = 'END';
        this.keys[36] = 'HOME';
        this.keys[37] = 'LEFT';
        this.keys[38] = 'UP';
        this.keys[39] = 'RIGHT';
        this.keys[40] = 'DOWN';
        this.keys[44] = 'PRINT_SCREEN';
        this.keys[45] = 'INSERT';
        this.keys[46] = 'DELETE';
        this.keys[48] = '0';
        this.keys[49] = '1';
        this.keys[50] = '2';
        this.keys[51] = '3';
        this.keys[52] = '4';
        this.keys[53] = '5';
        this.keys[54] = '6';
        this.keys[55] = '7';
        this.keys[56] = '8';
        this.keys[57] = '9';
        this.keys[65] = 'A';
        this.keys[66] = 'B';
        this.keys[67] = 'C';
        this.keys[68] = 'D';
        this.keys[69] = 'E';
        this.keys[70] = 'F';
        this.keys[71] = 'G';
        this.keys[72] = 'H';
        this.keys[73] = 'I';
        this.keys[74] = 'J';
        this.keys[75] = 'K';
        this.keys[76] = 'L';
        this.keys[77] = 'M';
        this.keys[78] = 'N';
        this.keys[79] = 'O';
        this.keys[80] = 'P';
        this.keys[81] = 'Q';
        this.keys[82] = 'R';
        this.keys[83] = 'S';
        this.keys[84] = 'T';
        this.keys[85] = 'U';
        this.keys[86] = 'V';
        this.keys[87] = 'W';
        this.keys[88] = 'X';
        this.keys[89] = 'Y';
        this.keys[90] = 'Z';
        this.keys[96] = 'NUM_ZERO';
        this.keys[97] = 'NUM_ONE';
        this.keys[98] = 'NUM_TWO';
        this.keys[99] = 'NUM_THREE';
        this.keys[100] = 'NUM_FOUR';
        this.keys[101] = 'NUM_FIVE';
        this.keys[102] = 'NUM_SIX';
        this.keys[103] = 'NUM_SEVEN';
        this.keys[104] = 'NUM_EIGHT';
        this.keys[105] = 'NUM_NINE';
        this.keys[106] = 'NUM_MULTIPLY';
        this.keys[107] = 'NUM_PLUS';
        this.keys[109] = 'NUM_MINUS';
        this.keys[110] = 'NUM_PERIOD';
        this.keys[111] = 'NUM_DIVISION';
        this.keys[112] = 'F1';
        this.keys[113] = 'F2';
        this.keys[114] = 'F3';
        this.keys[115] = 'F4';
        this.keys[116] = 'F5';
        this.keys[117] = 'F6';
        this.keys[118] = 'F7';
        this.keys[119] = 'F8';
        this.keys[120] = 'F9';
        this.keys[121] = 'F10';
        this.keys[122] = 'F11';
        this.keys[123] = 'F12';

        window.addEventListener('keydown', this.keydown.bind(this));
        window.addEventListener('keyup', this.keyup.bind(this));
        window.addEventListener('blur', this.resetKeys.bind(this));
    },

    resetKeys: function() {
        for (var key in this.keysDown) {
            this.keysDown[key] = false;
        }
    },

    keydown: function(event) {
        if (!game.scene) return;
        if (!this.keys[event.keyCode]) return; // unkown key
        if (this.keysDown[this.keys[event.keyCode]]) return; // key already down

        this.keysDown[this.keys[event.keyCode]] = true;
        var prevent = game.scene.keydown(this.keys[event.keyCode], this.down('SHIFT'), this.down('CTRL'), this.down('ALT'));
        if (prevent) event.preventDefault();
    },

    keyup: function(event) {
        if (!game.scene) return;
        this.keysDown[this.keys[event.keyCode]] = false;
        game.scene.keyup(this.keys[event.keyCode]);
    },

    /**
        Check if key is pressed down.
        @method down
        @return {Boolean}
    **/
    down: function(key) {
        return !!this.keysDown[key];
    }
});

game.keyboard = new game.Keyboard();

});
