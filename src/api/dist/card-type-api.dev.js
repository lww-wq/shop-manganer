"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCard = exports.insertCardMultiple = exports.deleteCardById = exports.updateCard = exports.findCardById = exports.insertCard = exports.getCardListForPage = void 0;

var _http = _interopRequireDefault(require("../http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getCardListForPage = function getCardListForPage(queryForm) {
  return _http["default"].http({
    url: '/card/list/page',
    method: 'get',
    params: queryForm
  });
};

exports.getCardListForPage = getCardListForPage;

var insertCard = function insertCard(addForm) {
  return _http["default"].http({
    url: '/card/insert',
    method: 'put',
    data: addForm
  });
};

exports.insertCard = insertCard;

var findCardById = function findCardById(id) {
  return _http["default"].http({
    url: "/card/find/id/".concat(id),
    method: 'get',
    data: id
  });
};

exports.findCardById = findCardById;

var updateCard = function updateCard(addForm) {
  return _http["default"].http({
    url: "/card/update",
    method: 'put',
    data: addForm
  });
};

exports.updateCard = updateCard;

var deleteCardById = function deleteCardById(id) {
  return _http["default"].http({
    url: "/card/delete/id/".concat(id),
    method: 'delete'
  });
};

exports.deleteCardById = deleteCardById;

var insertCardMultiple = function insertCardMultiple(addForm) {
  return _http["default"].http({
    url: '/card/insert/multiple',
    method: 'put',
    data: addForm
  });
};

exports.insertCardMultiple = insertCardMultiple;

var openCard = function openCard(params) {
  return _http["default"].http({
    url: '/card/open/card',
    method: 'get',
    params: params
  });
};

exports.openCard = openCard;