# Global KLF Utilities

These are script includes that execute in the `global` scope. They are used across applications. There is a brief description of each utility below. A more detailed description is included inside each script include.
- [KLF_AtfAddStepsHelper](#KLF_AtfAddStepsHelper)
- [KLF_CalendarCreator](#KLF_CalendarCreator)
- [KLF_CommandProbe](#KLF_CommandProbe)
- [KLF_GlideRecordUtils](#KLF_GlideRecordUtils)
- [KLF_GroupUtils](#KLF_GroupUtils)
- [KLF_LdapGroupService](#KLF_LdapGroupService)
- [KLF_RecordSync](#KLF_RecordSync)
- [KLF_SPUtils](#KLF_SPUtils)
- [KLF_TestUtils](#KLF_TestUtils)

## KLF_AtfAddStepsHelper

Contains utility functions for dynamically creating ATF tests. The original use case for these utility methods was to
generate a baseline test template. Then using this script you could potentially generate copies of that template to
quickly create new tests.

## KLF_CalendarCreator

ServiceNow has a module called Business Calendar. Business Calendars are used to define time
periods that are significant to the business that differ from the standard calendar year.

Creating all the entries in a business calendar can be a tedious task. This script include
provides a way to create the entries for a fiscal quarter and fiscal year business calendar.
This script is specifically used to create the entries for the US Federal Government fiscal
year and quarters.

## KLF_CommandProbe

This script is used to send commands to a mid server. It provides a mechanism to send the command to the midserver and
process the result of the command after the mid server executes the command

## KLF_GlideRecordUtils

This utility object provides a convenient way to execute GlideRecord operations from a scoped application
on globally scoped tables. This is useful when you need to perform operations on tables that are restricted
to global scope.

It also provides a function to transform a GlideRecord into a map. This is useful when you need to pass
GlideRecord data to a client script. The map can be easily converted to JSON and passed to the client spt.

## KLF_GroupUtils

This script contains general functions that help with group management in ServiceNow.
- getGroupByName: Retrieves the sys_user_group based on a group name or alias.
- getGroupFields: Finds all the fields that reference sys_user_group in a scoped app.
- changeGroupName: This looks for all references to group `oldName` in the system and replaces 
that group reference with the `newName` group. This is useful for when an application needs to update all the references of an old group
to a new group
- syncChildGroupMembers: This will make the membership of the parent group equal to the membership of its child groups. Basically, it copies the child group membership
into the parent group

## KLF_LdapGroupService

This script is used to ingest groups from LDAP into ServiceNow. Depending on the configuration
it can also properly ingest nested groups by recursively adding the members of nested groups
to the parent group.

It can ingest a single group or multiple groups. It can also refresh the membership of multiple
groups based on the group type names or sys_ids.

## KLF_RecordSync

ServiceNow natively supports transferring application code between instances but does not expose an API to efficiently transfer data between instances.
This script include provides a way to transfer data between instances using the REST API. The basic idea is to script the data transfer in a way that
that is repeatable so the script can be written up front and then run whenever data needs to be transferred. This way the data transfer is automated
and there is no need to manually export and import data.

#### KLF_RecordSync_UserUtils

This is used with `KLF_RecordSync`. When transferring data between ServiceNow instances users referenced in the source data set may not exist 
in the target instance. This utility contains functions to help manage the user data when transferring
data between instances.

#### KLF_RecordSync_GroupUtils

When transferring data between ServiceNow instances groups referenced in the source data set may not exist 
in the target instance. This utility contains functions to help manage the group data when transferring
data between instances.

## KLF_SPUtils
## KLF_TestUtils

This script include provides utility functions for unit testing.

It is intended to be used in conjunction with ATF. There are some general things that you might want to do when writing tests.
Like creating a user, creating a group, deleting records created by a user, impersonating a user etc.

It includes functions that allow you to:
- Delete records created by a specific user so that you can clean up after a test
- Run a function as a specific user so that you can test functionality that requires a specific user
- Create a common user that has no roles or groups
- Impersonate the common user
- Create a group, including adding users to the group
- Create a user
