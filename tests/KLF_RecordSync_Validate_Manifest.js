var incident = new GlideRecord('incident');
incident.setLimit(10);
incident.query();
var manifest = new global.KLF_RecordSync.Manifest();
while (incident.next()) {
    manifest.addRecordByGlideRecord(incident);
}

var change = new GlideRecord('change_request');
change.setLimit(10);
change.query();
while (change.next()) {
    manifest.addRecordByGlideRecord(change);
}

gs.info(manifest.toJson());