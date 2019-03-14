const validate = (obj, propertyName, propertyType) => {
  return typeof obj[propertyName] === propertyType
}

const allowable = (obj, propertyName, propertyType) => {
  return typeof obj[propertyName] !== propertyType
}

// console.log(allowable({genre_name: 1}, 'genre_name', 'number'));

module.exports = { validate, allowable }
