YUI.add('framed', function(Y, NAME) {
  Y.namespace('mojito.controllers')[NAME] = {
  	
    index: function(ac) {
      	
			
			req = ac.http.getRequest();
			userInfo = req.user;
			
			
			
			var login_url = ac.url.make('login', 'index', '');
			
			
			
			if(userInfo){
			     var username =userInfo.username;    
			}
			

      		ac.done(
      			{
      				app_name:'Is there a user info object ' + Y.dump( userInfo),
      				l_url: login_url,
      				test: "testface",
      				username: username
      			}
      			
      			);
    }
  };
}, '0.0.1', {requires: ['mojito','mojito-intl-addon', 'mojito-url-addon', 'mojito-http-addon', 'dump']});