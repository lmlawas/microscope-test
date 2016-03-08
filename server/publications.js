Meteor.publish('posts', function(){
	return Posts.find();
});

/*
// similar to autopublish: on
Meteor.publish('allPosts', function(){
	return Posts.find({'author':'Tom'}, {fields: {
		date: false
	}});
});
*/