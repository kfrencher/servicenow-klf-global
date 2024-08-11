(function() {
    var sync = new global.KLF_RecordSync({
        username: 'kenneth.frencher',
        password: gs.getProperty('KLF_RecordSync.user.password'),
        instanceUrl: 'https://abspscpov2.service-now.com',
        chunkSize: 20
    });

    gs.info('Missing Records:\n\n' + sync.syncTable('x_53417_demo_cat_breed').toJson());

    // var gr = new GlideRecord('x_53417_demo_cat_breed');
    // gr.setLimit(10);
    // gr.query();
    // var manifest = new global.KLF_RecordSync.Manifest();
    // while (gr.next()) {
    //     manifest.addRecordByGlideRecord(gr);
    // }

    // gs.info('Missing record manifest:\n\n' + sync.validateSync(manifest).toJson());

    // var manifestJSON = JSON.stringify({
    //     "x_53417_demo_cat_breed": [
    //         "a0f4884f9779311024d7b066f053af8f",
    //         "b0f4884f9779311024d7b066f053af8f",
    //         "c0f4884f9779311024d7b066f053af8f",
    //         "d0f4884f9779311024d7b066f053af8f",
    //         "40f4884f9779311024d7b066f053af8f",
    //         "40f4884f9779311024d7b066f053af92",
    //         "40f4884f9779311024d7b066f053af93",
    //         "44f4884f9779311024d7b066f053af8e",
    //         "44f4884f9779311024d7b066f053af8f",
    //         "44f4884f9779311024d7b066f053af90",
    //         "44f4884f9779311024d7b066f053af91",
    //         "44f4884f9779311024d7b066f053af92",
    //         "44f4884f9779311024d7b066f053af93",
    //         "48f4884f9779311024d7b066f053af8e"
    //     ]
    // });

    // var manifest = global.KLF_RecordSync.Manifest.createManifestFromJson(manifestJSON);

    // gs.info('Source manifest: ' + manifest.toJson());
    // gs.info(sync.validateSync(manifest).toJson());
    // gs.info(sync.documentToString(sync.unloadRecordWithRelatedRecords(gr).document));
    // sync.syncRecord(gr);
    // sync.syncTable('x_53417_demo_cat_breed');

})();