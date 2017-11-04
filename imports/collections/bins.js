import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        })
    },
    
    'bins.remove': function () {

    }
});

export const Bins = new Mongo.Collection('bins');