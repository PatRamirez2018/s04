db.getCollection('courses').find({$and:[
    {"instructor": "Sir Alvin"}, 
    {"price":{$gte:20000}}]},
    {"instructor":1, "price":1 ,"_id":0});


db.getCollection('courses').find({$and:[
    {"instructor": "Ma'am Tine"}, 
    {"isActive":{$eq:false}}]},
    {"instructor":1, "price":1 ,"_id":0});

db.getCollection('courses').find({$and:[
    {"name" : {$regex : "r"}},
    {"price":{$gte:25000}}]});


db.getCollection('courses').updateMany(
    {"price": {$lt: 21000}},
    { $set: { "isActive": false}});


db.getCollection('courses').deleteMany(
    {"price": {$gte: 25000}}
    );