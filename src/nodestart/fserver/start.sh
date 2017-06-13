#!/bin/bash
file=./index.js
#
#mtime=$(stat $file)
#echo $mtime
nodejs $file
#
fmtime=$(stat $file | awk -F"Modify: " '{print $2}' | sed s/' '//g )
echo $fmtime >> /tmp/nanolog
#
while [ true ]
do
nmtime=$(stat $file | awk -F"Modify: " '{print $2}' | sed s/' '//g)
echo $nmtime >> /tmp/nanolog
if [ $fmtime != $nmtime ]
then
fmtime=$nmtime
echo "start" >> /tmp/nanolog
########
#how restart server.....
########
nodejs $file
fi
sleep 2s
done
