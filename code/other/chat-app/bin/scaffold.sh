#!/usr/bin/env bash

source "bin/component.sh"
source "bin/screens.sh"

atom="-a"
mol="-m"
org="-o"
temp="-t"
vew="-v"



if [ "$1" == "$atom" ]; then
component $2 $3 "atoms"
fi

if [ "$1" == "$mol" ]; then
component $2 $3 "molecules"
fi

if [ "$1" == "$org" ]; then
component $2 $3 "organisms"
fi

if [ "$1" == "$temp" ]; then
component $2 $3 "templates"
fi

if [ "$1" == "$vew" ]; then
screens $2 $3 
fi