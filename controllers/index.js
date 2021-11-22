const PostController = require('./PostController')
const ItemController = require('./ItemController')
const OrderController = require('./OrderController');
const SaveController = require('./SaveController');
const ContactController = require('./ContactController');
module.exports = {
  post: PostController,
  item: ItemController,
  order: OrderController,
  contact: ContactController,
  save: SaveController
}