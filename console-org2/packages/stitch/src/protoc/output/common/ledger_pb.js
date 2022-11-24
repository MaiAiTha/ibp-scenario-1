/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.common.BlockchainInfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.BlockchainInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.BlockchainInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.BlockchainInfo.displayName = 'proto.common.BlockchainInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.BlockchainInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.common.BlockchainInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.BlockchainInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.BlockchainInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    currentblockhash: msg.getCurrentblockhash_asB64(),
    previousblockhash: msg.getPreviousblockhash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.BlockchainInfo}
 */
proto.common.BlockchainInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.BlockchainInfo;
  return proto.common.BlockchainInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.BlockchainInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.BlockchainInfo}
 */
proto.common.BlockchainInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCurrentblockhash(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreviousblockhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.BlockchainInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.BlockchainInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.BlockchainInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.BlockchainInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCurrentblockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPreviousblockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.common.BlockchainInfo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.common.BlockchainInfo.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes currentBlockHash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.BlockchainInfo.prototype.getCurrentblockhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes currentBlockHash = 2;
 * This is a type-conversion wrapper around `getCurrentblockhash()`
 * @return {string}
 */
proto.common.BlockchainInfo.prototype.getCurrentblockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCurrentblockhash()));
};


/**
 * optional bytes currentBlockHash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCurrentblockhash()`
 * @return {!Uint8Array}
 */
proto.common.BlockchainInfo.prototype.getCurrentblockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCurrentblockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.common.BlockchainInfo.prototype.setCurrentblockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes previousBlockHash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.common.BlockchainInfo.prototype.getPreviousblockhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes previousBlockHash = 3;
 * This is a type-conversion wrapper around `getPreviousblockhash()`
 * @return {string}
 */
proto.common.BlockchainInfo.prototype.getPreviousblockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreviousblockhash()));
};


/**
 * optional bytes previousBlockHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreviousblockhash()`
 * @return {!Uint8Array}
 */
proto.common.BlockchainInfo.prototype.getPreviousblockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreviousblockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.common.BlockchainInfo.prototype.setPreviousblockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


goog.object.extend(exports, proto.common);
