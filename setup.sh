#!/bin/bash
ISERROR=0

which npm > /dev/null 2>&1
if [ $? -ne 0 ] ; then
    echo "command not found: npm"
    echo "please install npm. e.g. sudo port install npm"
    ISERROR=1
fi

which gulp > /dev/null 2>&1
if [ $? -ne 0 ] ; then
    echo "command not found: gulp"
    echo "please install npm. e.g. sudo npm install -g  gulp"
    ISERROR=1
fi

if [ ISERROR == 1 ] ; then
    exit
fi

rm -rf .sass-cache node_modules tsd-cache && \
npm install

echo "OK"

