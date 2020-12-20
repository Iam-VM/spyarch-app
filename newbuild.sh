#!/bin/bash

echo "Initiating Process"
yarn run build
cp -r ./build ../spyarch-server/public
echo "Copied."
