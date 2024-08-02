# Global KLF Utilities

These are script includes that execute in the `global` scope. They are used across applications. There is a brief description of each utility below. A more detailed description is included inside each script include.
- [KLF_AtfAddStepsHelper](#KLF_RecordSync)
- [KLF_CalendarCreator](#KLF_RecordSync)
- [KLF_CommandProbe](#KLF_RecordSync)
- [KLF_GlideRecordUtils](#KLF_RecordSync)
- [KLF_GroupUtils](#KLF_RecordSync)
- [KLF_LdapGroupService](#KLF_RecordSync)
- [KLF_RecordSync](#KLF_RecordSync)
- [KLF_SPUtils](#KLF_RecordSync)
- [KLF_TestUtils](#KLF_RecordSync)

## KLF_AtfAddStepsHelper

## KLF_CalendarCreator

ServiceNow has a module called Business Calendar. Business Calendars are used to define time
periods that are significant to the business that differ from the standard calendar year.

Creating all the entries in a business calendar can be a tedious task. This script include
provides a way to create the entries for a fiscal quarter and fiscal year business calendar.
This script is specifically used to create the entries for the US Federal Government fiscal
year and quarters.

## KLF_CommandProbe
## KLF_GlideRecordUtils
## KLF_GroupUtils
## KLF_LdapGroupService

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
