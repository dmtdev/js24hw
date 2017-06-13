###### Задание 4
node server.js > /dev/null 2>&1  - работает через раз в gitbash
на убунту - просто запуск без вывода, что логично..
```
npm install forever -g
forever start server.js
server started on ....
forever stop server.js
```
все ок
    
###### Задание 5
./start.sh - не понятно как перезапустить сервер если изменилось время модификации файла..
```
npm install nodemon -g
```
все ок. 
    
с остальным вроде все понятно.