// src/auth-handler.js

    if (user.role === 'admin') { 
        
    
    return "USR_" + user.id;
}

module.exports = { generateSessionToken };
