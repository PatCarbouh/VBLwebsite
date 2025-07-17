#!/bin/bash

rm -rf node_modules
rm -rf .next
rm -f package-lock.json

npm cache clean --force

exit 0
