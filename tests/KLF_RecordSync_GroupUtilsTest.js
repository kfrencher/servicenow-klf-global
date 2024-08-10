var groupUtils = new global.KLF_RecordSync_GroupUtils({
    username: 'kenneth.frencher',
    password: 'Pip33jord!',
    instanceUrl: 'https://abspscpov2.service-now.com/',
    chunkSize: 20
});

var groupSysIds = groupUtils.getUniqueGroupsInScope('x_53417_demo');
var notificationSysIds = groupUtils.getNotificationsUsingGroupsInScope('x_53417_demo');
gs.info('Notifications: ' + notificationSysIds);
var notificationGroupSysIds = groupUtils.getGroupsUsedInNotifications(notificationSysIds);
gs.info('Notification Groups: ' + notificationGroupSysIds);
var mapping = groupUtils.createGroupMapping(groupSysIds.concat(notificationGroupSysIds), 'x_53417_demo');
gs.info('Group Mapping:\n\n' + JSON.stringify(mapping, null, 4));
var response = groupUtils.updateRemoteNotifications(mapping, notificationSysIds);
gs.info('Notification Response:\n\n' + JSON.stringify(response, null, 4));