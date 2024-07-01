#  Auto Updater

## This template should help me to undestand how to auto update a project into Tauri v2.

Basics:
 1. To configure the signature is necessary some enviroment variables.
 2. To solve the dinamic update i made a json responsible for when an
    update is available.
 3. When in production is necessary a secure repository to store the
    updater binary. To solve this i used the self Github repository of
    this project.

This project cost me approximately one day to configurate everything.
The most complex thing to me was set the enviroment variables, because i did not pay the necessary attention to the error lines which was saying to me that i did not have a private key string.