# Minecraft Mutli Account launcher
This client allows you to quickly launch muliple Minecraft accounts at once which is useful for minigame plugin development and is only really made to work for me.

## How to install
```
git clone git@github.com:HeathLoganCampbell/minecraft-multi-account-cli.git
cd minecraft-multi-account-cli
npm i
```
Now we need to add your accounts so create a file called ```.env```
```
//in the .env file
USERNAMES = email1 email2 ...
PASSWORDS = password1 password2 ...
```

## How to run
```
node index.js
```