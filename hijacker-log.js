/* jshint esnext: true */

Logs = new Meteor.Collection('logs');

if (Meteor.isClient) {

  Template.logger.helpers({
    logs() {
      return Logs.find();
    }
  });

}

Meteor.methods({
  'storeLog'(payload) {
    Logs.insert(payload);
    return payload;
  }
});