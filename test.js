// src/auth-handler.js
const crypto = require('crypto'); // <--- ERROR 1: IMPORT (Unused import)

function generateSessionToken(user) {
    
    // <--- ERROR 2: SYNTAX (Missing closing parenthesis after the condition)
    if (user.role === 'admin' { 
        const prefix = "ADM_";
        
        // <--- ERROR 3: TYPE_ERROR (Calling string method on a number)
        // Assuming user.id is an integer like 1042
        const idString = user.id.toUpperCase(); 
        
        return prefix + idString;
    }
    
    return "USR_" + user.id;
}

module.exports = { generateSessionToken };
