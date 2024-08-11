(function() {
    var userUtils = new global.KLF_RecordSync_UserUtils({
        username: 'kenneth.frencher',
        password: gs.getProperty('KLF_RecordSync.user.password'),
        instanceUrl: 'https://abspscpov2.service-now.com',
        chunkSize: 20
    });

    var userSysIds = userUtils.getUniqueUsersInScope('x_53417_demo');
    gs.info(userSysIds);
    // var mapping = userUtils.createUserMapping(userSysIds, 'x_53417_demo');
    // gs.info('User Mapping:\n\n' + JSON.stringify(mapping, null, 4));
    // gs.info(userUtils.checkSysUserDisplayField());
    // gs.info(userUtils.updateSysUserDisplayField('user_name'));
    userUtils.clearSysUserDisplayField();
    // Check to make sure sys_user display field is set to user_name
    if (!userUtils.checkSysUserDisplayField()) {
        throw 'sys_user display field must be set to user_name before data transfer';
    }
})();