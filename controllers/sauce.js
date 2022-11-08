const Sauce = require('../models/Sauce');

exports.addSauce = (req, res, next) => {
    delete req.body.userId;
    const sauce = new Sauce({
      ...req.body,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: []
    });
  
    sauce.save()
    .then(()=> res.status(201).json({ message : 'Objet enregistré !'}))
    .catch(error => res.status(400).json({error}));
  }


exports.getAllSauces = (req, res, next) => {
    Sauce.find().then(
        (sauces) => {
          res.status(200).json(sauces);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}


exports.getSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id}).then(
        (sauce) => {
          res.status(200).json(sauce);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}