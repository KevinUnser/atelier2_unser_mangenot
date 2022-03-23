module.exports = function (app, db) {

    app.get('/evenements' ,(req, res) => {
        if (res) {
          db.query("SELECT * FROM evenements")
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

    app.get(`/evenements/:id`, (req, res) => {
      let id = req.params.id;
      db.query(`SELECT * FROM evenements WHERE IDevent=?`, [
        id,
      ])
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
    });

}