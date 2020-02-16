### LockLogin
# Country protection

How to use country protection?

# Spigot & Bungee

By default, country protection is enabled, and it just checks the player country
with the country on his player file ( only if country is set )
Country is set when the player joins.

You have different ways to punish the player if the country is not the same
as the last one.
```
Country:
  Protection: true > true = enabled / false = disabled
  Method: deny;kick
  DisplayOnConsole: true > true = display "DisplayMessage" when a player joins / false = don't display anything
  DisplayMessage: "&eLockLogin &7>> &a{player} &7comes from &f{country} &8[ &f{countryCode} &8]"
```

# What is "Method"

As you've seen before, there's a "method" option, there're 2 methods, and 2 punishments
<method>;<punish>

## Punishments
> ban ( Uses a built-in ban system made only for this, the only way to unban is doing it manually )

> kick ( Uses the Spigot kick system, or in case of Bungeecord, disonnects the player )

## Methods
> deny ( Deny the connection, also it sends a "debug" message to the players with the permission: "locklogin.country.warning"  )

> warning ( Sends a warning to the online players with the permission: "locklogin.country.warning" )
