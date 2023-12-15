// mongo-init.js

// 进入 admin 数据库
db = db.getSiblingDB('admin');
// .auth()
// 创建管理员用户
db.createUser({
    user: 'admin',
    pwd: 'MSM1999msm@',
    roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }]
});

// 验证
// db.auth('admin','MSM1999msm@');

// 切换到tongueTwisterHub数据库
db = db.getSiblingDB('tongueTwisterHub');
// 进入要使用的数据库
db.createUser(
    {
        user: "root",
        pwd: "123456",
        roles: [
            {
                role: "readWrite",
                db: "tongueTwisterHub"
            }
        ]
    }
);

// db.auth('root', '123456')

// db.test.save({name:"aaaa"})
db.log.insertOne({"message": "Database created."});