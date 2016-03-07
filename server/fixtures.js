if(Posts.find().count() === 0){
	Posts.insert({
		title: 'Twitter',
		url: 'http://twitter.com'
	});

	Posts.insert({
		title: 'Facebook',
		url: 'http://facebook.com'
	});

	Posts.insert({
		title: 'Tumblr',
		url: 'http://tumblr.com'
	});
}