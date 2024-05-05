- [ ] RecordSync should send a manifest to RestMessage for import. That way what is imported can be verified by the importer. Then a response can be sent back describing what failed to import
- [ ] RecordSync should gracefully handle the User table. User table display value should be user_name before transfer happens
- [ ] RecordSync should validate the data is inserted after call
- [ ] RecordSync should create report of data that was not inserted
- [ ] RecordSync needs to handle user list fields correctly
- [ ] RecordSync needs to handle group list fields correctly
- [ ] GroupUtility should analyze data in scoped application to check for Groups that need to exist in target system

# Validate data sent to target instance was inserted

When using XML files to transfer data between ServiceNow instances there is no indication if all the data in the XML file successfully inserts into the target instance.

We need to add some feedback into the transfer so we can have some indication that the data was inserted. The overall goal being that some response is returned from an insert of XML data that indicates if the insert was successful and if not what failed.

My suggestion is to modify RecordSync. RecordSync is sending data to the target system. RecordSync could also send a manifest with the XML. The manifest would contain the table/sys_id of the records to be inserted. This would give the receiver a way to know what should be inserted after the XML is ingested.

After the XML is ingested the manifest can be used to query for the data in the manifest to check to see if it was indeed inserted. Anything found not to exist could then be packaged in a response to notify the caller the specific records were not inserted. If all records are successfully inserted a simple message to the caller indicating that the insert is successful should be sufficient.

# Create GroupUtil to aid in making sure groups are in sync when transferring data between instances

When transferring data between ServiceNow instances groups referenced in the data set may not exist in the target instance. This utility will check the data set for group references and make sure those groups exist in the target instance. If the group does not exist the utility will provide a list of groups that must be transferred so the referenced data is correct.

This utility could also provide the ability to transfer the missing groups. Might be a good idea to tag any groups that are transferred by the utility so they are easy to locate in the target instance for debugging purposes later. For example, maybe after transferring the group membership no longer updates from LDAP.

# Create UserUtil to aid in making sure groups are in sync when transferring data between instances
