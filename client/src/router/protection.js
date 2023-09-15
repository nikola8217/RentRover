const userRole = localStorage.getItem('role') ? localStorage.getItem('role') : null;

function checkIsAuth(to, from, next) {
    if (!userRole) {
      next('/login');
    } else if (userRole === 'admin') {
      next('/users');
    } else {
      next();
    }
  }
  
  function checkIsGuest(to, from, next) {
    if (userRole) {
      if (userRole === 'user') {
        next('/');
      } else if (userRole === 'admin') {
        next('/users');
      } 
    } else {
      next();
    }
  }
  
  function checkIsAdmin(to, from, next) {
    if (!userRole) {
      next('/login');
    } else if(userRole === 'admin') {
      next('/');
    } else {
      next();
    }
  }
  
  function checkIsGuestOrUser(to, from, next) {
    if (userRole && userRole === 'admin') {
      next('/users');
    } else {
      next();
    }
  }

  export {
    checkIsAuth,
    checkIsGuest,
    checkIsAdmin,
    checkIsGuestOrUser
  }