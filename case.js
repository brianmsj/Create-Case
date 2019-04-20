current.state = 10;
current.contact_type='web';
current.description = current.comments;

var variableAccount = producer.account.getDisplayValue();

if(producer.Subject == 1 || 2 || 3 || 4) {
    current.assignment_group = 'd777c898dbb833008f7055384b96197c';
}
if(producer.Subject == 5) {
    current.assignment_group = '891800d8dbb833008f7055384b961994';
}
if(producer.Subject == 6) {
    current.assignment_group = 'be38c4d8dbb833008f7055384b9619bd';
}
if(producer.Subject == 7) {
    current.assignment_group = '50e68498dbb833008f7055384b96197c';
}
if(producer.Subject == 8) {
    current.assignment_group = 'e2b46e6cdbdaef008f7055384b961946';
}
current.short_description = producer.Subject.getDisplayValue();

var grParent = new GlideRecord('customer_account');
grParent.addQuery('name',variableAccount);
grParent.query();
while(grParent.next()) {
    var setParent = grParent.account_parent;
    var setLocation = grParent.u_location;
    current.u_parent_account = setParent;
    current.location = setLocation;
}

//if current.account != login user company, then case is created for partner
//set partner contact and partner account
var accountId = gs.getUser().getCompanyID();
if (current.account != accountId) {
    var account = new GlideRecord("customer_account");
    if(account.get(accountId) && account.partner){
        current.partner_contact = gs.getUserID();
        current.partner = gs.getUser().getCompanyID();
    }
}
//clear hidden field value used for record produce display only
producer.HiddenField = "";
producer.portal_redirect = "?id=csm_ticket&table=sn_customerservice_case&sys_id=" + current.sys_id;
gs.addInfoMessage("Thank you - we'll be with you shortly");`
