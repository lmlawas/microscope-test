Meteor.publish('posts', function(){
	return Posts.find({flagged: false, author: author});
});

/*
// similar to autopublish: on
Meteor.publish('allPosts', function(){
	return Posts.find({'author':'Tom'}, {fields: {
		date: false
	}});
});
*/