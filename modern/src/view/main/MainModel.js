/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Decal.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        decalsize: 80

    },

    formulas: {
        decalMm: function(get) {
            return get('decalsize')*2;
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
