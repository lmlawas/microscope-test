Posts = new Mongo.Collection('posts');

// Posts.allow({
// 	insert: function(userId, doc){
// 		return !! userId;
// 	}
// });

Meteor.methods({
	postInsert: function(postAttributes){
		// check if the postAttributes are valid
		check(Meteor.userId(), String);
		check(postAttributes,{
			title: String,
			url: String
		});

		// to prevent duplicating posts
		var postWithSameLink = Posts.findOne({url: post.url});
		if(postWithSameLink){
			return{
				postExists: true,
				_id: postWithSameLink._id
			}
		}

		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		var postId = Posts.insert(post);

		return{
			_id: postId
		};
	}
});