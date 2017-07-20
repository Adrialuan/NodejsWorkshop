const model = require('../models/cat');

const findCat = _id => {
  return model.find(_id)
    .then(kitten => {
      return `${kitten.name} is color ${kitten.color}`;
    })
    .catch(error => {
      console.log('findCat error:', error);
      return 'That cat doesn\'t exist 😿';
    });
};

const createCat = body => {
  const { name, color } = body;

  return model.add(name, color)
    .then(info => {
      return `Okie dokie! ${name}, the ${color} cat was created. 😻`;
    })
}

const updateCat = (_id, body) => {
  const update = {
    name: body.name,
    color: body.color
  };

  return model.update(_id, update)
    .then(result => {
      if(result.ok) {
        return 'Yay! The kitten was updated without any harm 😽';
      }
      return 'Uh, oh… something didn\'t go well… 🙀';
    })
    .catch(error => {
      console.log('updateCat error:', error);
      return 'I think that cat doesn\'t exist… 🙀';
    });
}

const removeCat = _id => {
  return model.remove(_id)
    .then(result => {
      if(result.ok) {
        return '*Snif* The kitten is now gone. 😿';
      }
      return 'Uh, oh… something didn\'t go well… 🙀';
    })
    .catch(error => {
      console.log('removeCat error:', error);
      return 'I think that cat doesn\'t exist… 🙀';
    });
}

module.exports = {
  findCat,
  createCat,
  updateCat,
  removeCat
}