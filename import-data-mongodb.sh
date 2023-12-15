#!/bin/bash

# 等待 MongoDB 服务准备好
until mongo --eval "db.adminCommand('ping')" > /dev/null 2>&1; do
    echo "Waiting for MongoDB to be ready..."
    sleep 1
done

mongoimport --authenticationDatabase=admin --username=root --password=123456  --collection=contact_us --db=tongueTwisterHub --file=contact_us.json
mongoimport --authenticationDatabase=admin --username=root --password=123456  --collection=language_count --db=tongueTwisterHub --file=language_count.json
mongoimport --authenticationDatabase=admin --username=root --password=123456  --collection=raokouling_cn --db=tongueTwisterHub --file=raokouling_cn.json
