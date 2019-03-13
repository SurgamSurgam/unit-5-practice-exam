const validate = (obj, propertyName, propertyType) => {
  return typeof obj[propertyName] === propertyType
}

// console.log(validate({genre_name: 'a'}, 'genre_name', 'string'));

module.exports = { validate }
