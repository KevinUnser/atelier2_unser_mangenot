module.exports = function (app, db) {

    app.get('/participation' ,(req, res) => {
        if (res) {
          db.query("SELECT * FROM participation")
            .then((result) => {
              res.send(result)
            })
            .catch((err) => {
              if (err) {
                console.log(err);
                res.status(404).send({
                  statusCode: 404,
                  id: 1,
                  message: err.data,
                  content: err
                })
              }
            })
        }
    });

}