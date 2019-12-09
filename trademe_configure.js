/* global Template */
'use strict';

Template.configureLoginServiceDialogForTradeMe.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForTradeMe.fields = function () {
  return [
    {property: 'consumerKey', label: 'Consumer Key'},
    {property: 'secret', label: 'Consumer Secret'}
  ];
};
ServiceConfiguration.configurations.remove({
  service: 'trademe'
});

ServiceConfiguration.configurations.insert({
  service: 'trademe',
  sandbox: true,  // Optional parameter
  consumerKey: '7B371B2BFA1C33C34A3D1A65B99EEE39',
  secret: 'ADA7A86D33A36B0E67E56D95DE6E4B7F'
});
