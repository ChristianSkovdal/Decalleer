/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Decal.Application',

    name: 'Decal',

    requires: [
        // This will automatically load all classes in the Decal namespace
        // so that application classes do not need to require each other.
        'Decal.*'
    ],

    // The name of the initial view to create.
    mainView: 'Decal.view.main.Main'
});
