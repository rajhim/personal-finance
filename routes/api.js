module.exports = function(app) {
    var Category = require('./../models/Category')
    var bodyParser = require("body-parser")

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/', function(req, res) {
        res.sendFile(__dirname + './../public/index.html')
    })
    app.post('/api/category', function(request, response) {
        Category({
            name: request.body.categoryName,
            type: request.body.categoryType
        }).save()
        response.end()
    })

    app.get('/api/category', function(request, response){
        Category.find({}, function(err, users) {
            response.send(users)
        })
    })

    app.get('/api/category/:id', function(request, response){
        Category.findById(request.params.id, function(err, category){
            response.send(category)
        })
    })

    app.patch('/api/category', function(request, response){//to update 
        Category.findOne({_id: request.body.id},function(err, data){
            data.name = request.body.categoryName
            data.type= request.body.categoryType
            data.save()
        })
        response.end()
    })

    app.delete('/api/category/:id', function(request, response){
        Category.remove({_id: request.params.id},function(err, data){

        })
        response.end()
    })
}