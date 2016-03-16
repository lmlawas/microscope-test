Template.postSubmit.events({  
	'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    // call the server side Meteor method postInsert
    Meteor.call('postInsert', post, function(error, result){
    	// alert if error
      if(error)
    		return alert(error.reason);

      // alert if post already exists
      if(result.postExists)
          alert('This link has already been posted');

      // re-route to the post whether it already exists or not
    	Router.go('postPage', {_id: result._id});      
    });
    
    // post._id = Posts.insert(post);
    // Router.go('postPage', post);
  }
});