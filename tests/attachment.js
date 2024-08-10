var attachment = new GlideSysAttachment();
var attachmentSysID = '33a2b9b3979a4e1424d7b066f053aff2';
var attachmentContentStream = attachment.getContentStream(attachmentSysID);

gs.info(attachmentContentStream);
var xmlDocument = new global.XMLDocument2(attachmentContentStream);
gs.info(xmlDocument.toString());

var reader = new GlideTextReader(attachmentContentStream);
var lines = [];
var line = reader.readLine();
while(line != null) {
    lines.push(line);
    line = reader.readLine();
}
gs.info(lines.join('\n'));