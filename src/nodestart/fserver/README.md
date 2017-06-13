###### Задание 4
node server.js > /dev/null 2>&1  - работает через раз в gitbash.

на убунту - просто запуск без вывода, что логично..
```
npm install forever -g
forever start index.js
server started on ....
forever stop index.js
```
все ок
    
###### Задание 5
./start.sh - не понятно как перезапустить сервер если изменилось время модификации файла..
```
npm install nodemon -g
```
все ок. а если не юзать nodemon, вместо него добавить запуск через forever stop, forever start.. start.sh заработает..

так.. получается, что start.sh можно превратить start.js юзая file sistem в node js.. но мы пока этого не знаем;)
    
с остальным вроде все понятно.
