(function() {
    // Create configuration
    var connectionConfig = {
        username: 'kenneth.frencher',
        password: gs.getProperty('KLF_RecordSync.user.password'),
        instanceUrl: 'https://abspscpov2.service-now.com',
        chunkSize: 20
    };
    var roleUtils = new global.KLF_RecordSync_RoleUtils(connectionConfig);
    var roleNames = roleUtils.getRolesInScope('x_53417_demo');
    gs.info(roleNames.join('\n'));
    gs.info(roleUtils.getRolesInScope('x_53417_demo').join('\n'));
    gs.info(roleUtils.getGroupsForRole('x_53417_demo.user'));
    gs.info(roleUtils.getUsersForRole('x_53417_demo.user'));
    gs.info(JSON.stringify(roleUtils.getAssignedToRole(['x_53417_demo.user']), null, 4));
    gs.info(JSON.stringify(roleUtils.getRoleAssignedTo(['x_53417_demo.user']), null, 4));

    var roles1 = {
        "x_53417_demo.user": {
            "users": [
                "avery.parbol",
                "alyssa.biasotti"
            ],
            "groups": [
                "ATF_TestGroup_ServiceDesk",
                "Network CAB Managers"
            ]
        },
        "x_53417_demo.admin": {
            "users": [
                "user1",
                "user2"
            ],
            "groups": [
                "group1",
                "group2"
            ]
        }
    };

    var roles2 = {
        "x_53417_demo.user": {
            "users": [
                "avery.parbol",
                "alyssa.biasotti"
            ],
            "groups": [
                "ATF_TestGroup_ServiceDesk",
                "Network CAB Managers"
            ]
        },
        "x_53417_demo.admin": {
            "users": [
                "user1",
                "user2"
            ],
            "groups": [
                "group1",
                "group2"
            ]
        }
    };
    // gs.info(JSON.stringify(roleUtils.diffRoles(roles1, roles2), null, 4));
    // gs.info(JSON.stringify(roleUtils.getRemoteRoleAssignedTo(roleNames), null, 4));

    function syncRoles() {
        var connectionConfig = {
            username: 'kenneth.frencher',
            password: gs.getProperty('KLF_RecordSync.user.password'),
            instanceUrl: 'https://abspscpov2.service-now.com',
            chunkSize: 20
        };
        var roleUtils = new global.KLF_RecordSync_RoleUtils(connectionConfig);
        var missingRoles = roleUtils.diffLocalAndRemoteRoles(roleNames);
        roleUtils.syncRoles(missingRoles);
    }
    // syncRoles();
    var missingRoles = roleUtils.diffLocalAndRemoteRoles(roleNames);
    gs.info('Missing roles: ' + JSON.stringify(missingRoles, null, 4));
})();