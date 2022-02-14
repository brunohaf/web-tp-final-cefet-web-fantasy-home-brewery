const { ArticleTheme, Article } = require('../models/sequelize')

const SaveArticleTheme = (req, res) => {
    ArticleTheme.create( {   
                    name : req.name,
                    description : req.description,
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed from the origin:\t" + error.errors[0].origin +
                    "\nError Message:\t" + error.errors[0].message )
                });
};

const UpdateArticleTheme = (req, res) => {
    ArticleTheme.update( {    
                    name : req.name,
                    description : req.description,
                },
                {
                    where: {id_theme: req.id_theme}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error from the origin:\t" + error.errors[0].origin +
                     "\nError Message:\t" + error.errors[0].message )
                });;
};

const GetArticleThemeById = async (req,res) => {

    await ArticleTheme.findByPk(req).then(theme => {
        return res.status( 200 ).json(theme.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

const GetAllArticleThemes = async (res) => {
    await ArticleTheme.findAll()
    .then( themes => {
      return res.status( 200 ).json( themes )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
      "\nError Message:\t" + error.errors[0].message )
    });
}

const DeleteArticleTheme = async (req,res) => {
    await ArticleTheme.destroy({where: {id_theme: req}}).then(theme => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

const GetArticlesByTheme = async (req, res) => {
    const condition = {
        id_theme: req
    }
    Article.belongsTo(ArticleTheme, { foreignKey: 'id_theme' });
    ArticleTheme.hasMany(Article, { foreignKey: 'id_theme' }, { targetKey: 'id_theme' });

     await ArticleTheme.findAll({
        include: [{
            model: Article,
            required: true,
        }],
        where: [condition]
    }).then(response => {
        return res.status(200).json(response.map(c => c.dataValues.article_webs));
    }).catch(error => {
        return res.status(400).send("Fetching has failed: \t" + error)
    });
}

module.exports = { 
    SaveArticleTheme,
    UpdateArticleTheme,
    GetArticleThemeById,
    GetAllArticleThemes,
    DeleteArticleTheme,
    GetArticlesByTheme
};
