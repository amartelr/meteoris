Template.usersLogin.events = {
    'click .btnLogin': function(e, t){
        e.preventDefault();        
        Router.current().login(t);
    },    
};