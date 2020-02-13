### LockLogin
## Commands and permissions for players

/register - Register a new account
- > args: [password] [password]
- > permission: [none]
- > needs: [The passwords must be the same]
- > aliases: [/r]
##
/login - Login to your account
- > args: [password]
- > permission: [none]
- > needs: [A registered account]
- > aliases: [/l]
##
/unlog - Close your account session
- > args: [none]
- > permission: [none]
- > needs: [Be logged and registered]
- > aliases: [none]
##
/change - Change your password
- > args: [password] [new password]
- > permission: [none]
- > needs: [The new password mustn't be the same as old]
- > aliases: [/cpass]
##
/del - Removes your account
- > args: [password] [password]
- > permission: [none]
- > needs: 
```
[Be logged and registered]
[Passwords must coincide]
```
- > aliases: [none]
##
/2fa - Main command for 2fa options
- > args:
```
[password] (To enable 2fa)
[code] (To fully login if you have 2fa)
[password] [code] (To disable 2fa)
```
- > permission: [none]
- > needs: [Be logged and registered]
- > aliases: [none]
##
/resetfa - Generates a new 2fa code/token
- > args: [password] [code]
- > permission: [none]
- > needs: [Be logged, registered and auth with 2fa]
- > aliases: [none]

## Commands and permissions for admins
/unlog - Close a player's session
- > args: [player]
- > permission: [locklogin.forceunlog]
- > needs: [A valid logged and registered player]
- > aliases: [none]
##
/del - Removes a player account
- > args: [player]
- > permission: [locklogin.forcedel]
- > needs: [A valid logged and registered player]
- > aliases: [none]
