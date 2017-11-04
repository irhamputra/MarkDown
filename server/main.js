import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins'

Meteor.startup(() => {
    // Publication
    Meteor.publish('bins', function () {
        return Bins.find({ ownerId: this.userId });
    })
});
