
const controller = {};

controller.list = (req, res) => {
    req.getConnectionn(err ,conn) => {
        conn.query('SELECT * FROM pelicula',  (err,  pelicula) => {
        if (err) {
            res.json(err);
        }
        
        res.render('pelicula' , {
            data: pelicula
        });
    })
  }
}

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err,conn) => {
    conn.query('INSERT INTO pelicula set ?', [data],  (err, pelicula) => {
    console.log(pelicula);
    res.redirect('/');
    
   });
});
}

controller.edit =(req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT + FROM pelicula set WHERE id = ?', [id], (err, pelicula));
        res.render('pelicula_edit', {

            data: pelicula[0]
        });

    });
}

controller.update = (req, res) => {
    const { id } = req.params;
    const newPelicula = req.body;
    req.getConnection((err, conn) => {
    conn.query('UPDATE customer set ? WHERE id = ?',  [newPelicula, id], (err, rows) => {
        res.redirect('/');
    })

  })
};
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getconnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id =?', [id], (err, rows) => {
            res.redirect('/');
            
        });
    });
}

module.exports = controller;