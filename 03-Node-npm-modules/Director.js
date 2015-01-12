/**
 * Director module
 */
module.exports = function (name) {
  var attributes = {};
  attributes.name = name;
  /* Public functions */
  
  
  /**
   * Set attribute
   * @param {String} attr
   * @param {Object} value
   */
  this.set = function(attr, value) {
    attributes[attr] = value;
  }

  /**
   * Get attribute
   * @param {String} attr
   */
  this.get = function(attr) {
    return attributes[attr];
  }
  
  /**
   * Director speak
   */ 
  this.speak = function() {
    console.log(attributes.name + ' say: ' + this.get('quotes').join(' and ')); 
  }
}