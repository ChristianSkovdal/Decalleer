Ext.define('ImageButton', {
    extend: 'Ext.Container',
    xtype: 'imgbtn',

    config: {
        image: null,
        pressed: false,
        pressedCls: '',
        normalCls: ''
    },

    applyImage(value) {
        this.setHtml(`<img class="normal" src="${value}"></b>`);
        this._image=value;
    },

    applyPressed(value) {
        this.removeCls(value ? this._normalCls : this._pressedCls);
        this.addCls(value ? this._pressedCls : this._normalCls);
    },

    listeners: {
        painted: function (c) {
            c.el.on('click', function (e) {
                this.pressed = !this.pressed;
                this.setPressed(this.pressed);
                this.fireEvent('click', c, this.pressed);
                Ext.defer(()=>this.setPressed(false), 100);
            }, c);
        }
    }
});
