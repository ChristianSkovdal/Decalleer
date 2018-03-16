Ext.define('Decal.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    title: 'Decals',
    controller: 'main',
    viewModel: 'main',

    layout: 'fit',
    //bodyStyle: 'background:lightgray;',
    cls: 'main',

    tbar: [
        {
            text: 'Print',
            handler: 'printDecals'
        },
        {
            label: 'Size',
            xtype: 'sliderfield',
            flex: 1,
            maxValue: 200,
            minValue: 40,
            label:'Size',
            labelAlign: 'left',
            bind: {
                value: '{decalsize}',
            }
        },
        {
            xtype: 'spinnerfield',
            bind: {
                value: '{decalsize}'
            },
            labelAlign: 'right',            
            label: ' mm',
            maxValue: 200,
            minValue: 40,
        }
    ],
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            style: 'background:transparent;',

            items: [

                {
                    xtype: 'container',
                    scrollable: 'y',
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            cls: 'doc',
                            reference: 'doc',
                            layout: 'float',
                            shadow: true,
                            margin: 20,
                            width: 420,
                            height: 594,
                            padding: 10,
                        }
                    ]
                },
                {
                    flex: 1,
                    margin: 10,
                    xtype: 'container',
                    layout: 'float',
                    reference: 'thumbs',
                    listeners: {
                        painted: 'onThumbsPainted'
                    }
                }
            ]
        }
    ]
});


