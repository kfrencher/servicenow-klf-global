// Create configuration
var connectionConfig = {
    username: 'kenneth.frencher',
    password: gs.getProperty('KLF_RecordSync.user.password'),
    instanceUrl: 'https://abspscpov2.service-now.com',
    chunkSize: 20
};

// Create a group mapping
var groupUtils = new global.KLF_RecordSync_GroupUtils(connectionConfig);
var groupSysIds = groupUtils.getUniqueGroupsInScope('x_53417_demo');
var notificationSysIds = groupUtils.getNotificationsUsingGroupsInScope('x_53417_demo');
var notificationGroupSysIds = groupUtils.getGroupsUsedInNotifications(notificationSysIds);
groupUtils.createGroupMapping(groupSysIds.concat(notificationGroupSysIds), 'x_53417_demo');

// Create a record sync
var recordSync = new global.KLF_RecordSync(connectionConfig, groupUtils.getGroupMapping('x_53417_demo'));
var breed = new GlideRecord('x_53417_demo_cat_breed');
breed.get('40f4884f9779311024d7b066f053af8f');
var document = recordSync.unloadRecord(breed);
recordSync.syncRecord(breed);
gs.info(global.GlideXMLUtil.toIndentedString(document));
gs.info(breed.update());