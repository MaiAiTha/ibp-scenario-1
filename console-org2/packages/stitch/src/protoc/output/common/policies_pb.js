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

var msp_msp_principal_pb = require('../msp/msp_principal_pb.js');
goog.object.extend(proto, msp_msp_principal_pb);
goog.exportSymbol('proto.common.ImplicitMetaPolicy', null, global);
goog.exportSymbol('proto.common.ImplicitMetaPolicy.Rule', null, global);
goog.exportSymbol('proto.common.Policy', null, global);
goog.exportSymbol('proto.common.Policy.PolicyType', null, global);
goog.exportSymbol('proto.common.SignaturePolicy', null, global);
goog.exportSymbol('proto.common.SignaturePolicy.NOutOf', null, global);
goog.exportSymbol('proto.common.SignaturePolicyEnvelope', null, global);

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
proto.common.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.Policy.displayName = 'proto.common.Policy';
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
proto.common.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: msg.getValue_asB64()
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
 * @return {!proto.common.Policy}
 */
proto.common.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Policy;
  return proto.common.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Policy}
 */
proto.common.Policy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
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
proto.common.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.common.Policy.PolicyType = {
  UNKNOWN: 0,
  SIGNATURE: 1,
  MSP: 2,
  IMPLICIT_META: 3
};

/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.common.Policy.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.common.Policy.prototype.setType = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.Policy.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.common.Policy.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.common.Policy.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/** @param {!(string|Uint8Array)} value */
proto.common.Policy.prototype.setValue = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



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
proto.common.SignaturePolicyEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.SignaturePolicyEnvelope.repeatedFields_, null);
};
goog.inherits(proto.common.SignaturePolicyEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.SignaturePolicyEnvelope.displayName = 'proto.common.SignaturePolicyEnvelope';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.SignaturePolicyEnvelope.repeatedFields_ = [3];



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
proto.common.SignaturePolicyEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.common.SignaturePolicyEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.SignaturePolicyEnvelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.SignaturePolicyEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rule: (f = msg.getRule()) && proto.common.SignaturePolicy.toObject(includeInstance, f),
    identitiesList: jspb.Message.toObjectList(msg.getIdentitiesList(),
    msp_msp_principal_pb.MSPPrincipal.toObject, includeInstance)
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
 * @return {!proto.common.SignaturePolicyEnvelope}
 */
proto.common.SignaturePolicyEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.SignaturePolicyEnvelope;
  return proto.common.SignaturePolicyEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.SignaturePolicyEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.SignaturePolicyEnvelope}
 */
proto.common.SignaturePolicyEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.common.SignaturePolicy;
      reader.readMessage(value,proto.common.SignaturePolicy.deserializeBinaryFromReader);
      msg.setRule(value);
      break;
    case 3:
      var value = new msp_msp_principal_pb.MSPPrincipal;
      reader.readMessage(value,msp_msp_principal_pb.MSPPrincipal.deserializeBinaryFromReader);
      msg.addIdentities(value);
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
proto.common.SignaturePolicyEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.SignaturePolicyEnvelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.SignaturePolicyEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.SignaturePolicyEnvelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.common.SignaturePolicy.serializeBinaryToWriter
    );
  }
  f = message.getIdentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      msp_msp_principal_pb.MSPPrincipal.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.common.SignaturePolicyEnvelope.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.common.SignaturePolicyEnvelope.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional SignaturePolicy rule = 2;
 * @return {?proto.common.SignaturePolicy}
 */
proto.common.SignaturePolicyEnvelope.prototype.getRule = function() {
  return /** @type{?proto.common.SignaturePolicy} */ (
    jspb.Message.getWrapperField(this, proto.common.SignaturePolicy, 2));
};


/** @param {?proto.common.SignaturePolicy|undefined} value */
proto.common.SignaturePolicyEnvelope.prototype.setRule = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.common.SignaturePolicyEnvelope.prototype.clearRule = function() {
  this.setRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.SignaturePolicyEnvelope.prototype.hasRule = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MSPPrincipal identities = 3;
 * @return {!Array<!proto.common.MSPPrincipal>}
 */
proto.common.SignaturePolicyEnvelope.prototype.getIdentitiesList = function() {
  return /** @type{!Array<!proto.common.MSPPrincipal>} */ (
    jspb.Message.getRepeatedWrapperField(this, msp_msp_principal_pb.MSPPrincipal, 3));
};


/** @param {!Array<!proto.common.MSPPrincipal>} value */
proto.common.SignaturePolicyEnvelope.prototype.setIdentitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.common.MSPPrincipal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.MSPPrincipal}
 */
proto.common.SignaturePolicyEnvelope.prototype.addIdentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.common.MSPPrincipal, opt_index);
};


proto.common.SignaturePolicyEnvelope.prototype.clearIdentitiesList = function() {
  this.setIdentitiesList([]);
};



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
proto.common.SignaturePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.common.SignaturePolicy.oneofGroups_);
};
goog.inherits(proto.common.SignaturePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.SignaturePolicy.displayName = 'proto.common.SignaturePolicy';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.common.SignaturePolicy.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.common.SignaturePolicy.TypeCase = {
  TYPE_NOT_SET: 0,
  SIGNED_BY: 1,
  N_OUT_OF: 2
};

/**
 * @return {proto.common.SignaturePolicy.TypeCase}
 */
proto.common.SignaturePolicy.prototype.getTypeCase = function() {
  return /** @type {proto.common.SignaturePolicy.TypeCase} */(jspb.Message.computeOneofCase(this, proto.common.SignaturePolicy.oneofGroups_[0]));
};



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
proto.common.SignaturePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.common.SignaturePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.SignaturePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.SignaturePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedBy: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nOutOf: (f = msg.getNOutOf()) && proto.common.SignaturePolicy.NOutOf.toObject(includeInstance, f)
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
 * @return {!proto.common.SignaturePolicy}
 */
proto.common.SignaturePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.SignaturePolicy;
  return proto.common.SignaturePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.SignaturePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.SignaturePolicy}
 */
proto.common.SignaturePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSignedBy(value);
      break;
    case 2:
      var value = new proto.common.SignaturePolicy.NOutOf;
      reader.readMessage(value,proto.common.SignaturePolicy.NOutOf.deserializeBinaryFromReader);
      msg.setNOutOf(value);
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
proto.common.SignaturePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.SignaturePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.SignaturePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.SignaturePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNOutOf();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.common.SignaturePolicy.NOutOf.serializeBinaryToWriter
    );
  }
};



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
proto.common.SignaturePolicy.NOutOf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.SignaturePolicy.NOutOf.repeatedFields_, null);
};
goog.inherits(proto.common.SignaturePolicy.NOutOf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.SignaturePolicy.NOutOf.displayName = 'proto.common.SignaturePolicy.NOutOf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.SignaturePolicy.NOutOf.repeatedFields_ = [2];



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
proto.common.SignaturePolicy.NOutOf.prototype.toObject = function(opt_includeInstance) {
  return proto.common.SignaturePolicy.NOutOf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.SignaturePolicy.NOutOf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.SignaturePolicy.NOutOf.toObject = function(includeInstance, msg) {
  var f, obj = {
    n: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.common.SignaturePolicy.toObject, includeInstance)
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
 * @return {!proto.common.SignaturePolicy.NOutOf}
 */
proto.common.SignaturePolicy.NOutOf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.SignaturePolicy.NOutOf;
  return proto.common.SignaturePolicy.NOutOf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.SignaturePolicy.NOutOf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.SignaturePolicy.NOutOf}
 */
proto.common.SignaturePolicy.NOutOf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setN(value);
      break;
    case 2:
      var value = new proto.common.SignaturePolicy;
      reader.readMessage(value,proto.common.SignaturePolicy.deserializeBinaryFromReader);
      msg.addRules(value);
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
proto.common.SignaturePolicy.NOutOf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.SignaturePolicy.NOutOf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.SignaturePolicy.NOutOf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.SignaturePolicy.NOutOf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getN();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.common.SignaturePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 n = 1;
 * @return {number}
 */
proto.common.SignaturePolicy.NOutOf.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.common.SignaturePolicy.NOutOf.prototype.setN = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SignaturePolicy rules = 2;
 * @return {!Array<!proto.common.SignaturePolicy>}
 */
proto.common.SignaturePolicy.NOutOf.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.common.SignaturePolicy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.common.SignaturePolicy, 2));
};


/** @param {!Array<!proto.common.SignaturePolicy>} value */
proto.common.SignaturePolicy.NOutOf.prototype.setRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.common.SignaturePolicy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.SignaturePolicy}
 */
proto.common.SignaturePolicy.NOutOf.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.common.SignaturePolicy, opt_index);
};


proto.common.SignaturePolicy.NOutOf.prototype.clearRulesList = function() {
  this.setRulesList([]);
};


/**
 * optional int32 signed_by = 1;
 * @return {number}
 */
proto.common.SignaturePolicy.prototype.getSignedBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.common.SignaturePolicy.prototype.setSignedBy = function(value) {
  jspb.Message.setOneofField(this, 1, proto.common.SignaturePolicy.oneofGroups_[0], value);
};


proto.common.SignaturePolicy.prototype.clearSignedBy = function() {
  jspb.Message.setOneofField(this, 1, proto.common.SignaturePolicy.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.SignaturePolicy.prototype.hasSignedBy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NOutOf n_out_of = 2;
 * @return {?proto.common.SignaturePolicy.NOutOf}
 */
proto.common.SignaturePolicy.prototype.getNOutOf = function() {
  return /** @type{?proto.common.SignaturePolicy.NOutOf} */ (
    jspb.Message.getWrapperField(this, proto.common.SignaturePolicy.NOutOf, 2));
};


/** @param {?proto.common.SignaturePolicy.NOutOf|undefined} value */
proto.common.SignaturePolicy.prototype.setNOutOf = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.common.SignaturePolicy.oneofGroups_[0], value);
};


proto.common.SignaturePolicy.prototype.clearNOutOf = function() {
  this.setNOutOf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.SignaturePolicy.prototype.hasNOutOf = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.common.ImplicitMetaPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.ImplicitMetaPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.ImplicitMetaPolicy.displayName = 'proto.common.ImplicitMetaPolicy';
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
proto.common.ImplicitMetaPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.common.ImplicitMetaPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.ImplicitMetaPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.ImplicitMetaPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    subPolicy: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rule: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.common.ImplicitMetaPolicy}
 */
proto.common.ImplicitMetaPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.ImplicitMetaPolicy;
  return proto.common.ImplicitMetaPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.ImplicitMetaPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.ImplicitMetaPolicy}
 */
proto.common.ImplicitMetaPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubPolicy(value);
      break;
    case 2:
      var value = /** @type {!proto.common.ImplicitMetaPolicy.Rule} */ (reader.readEnum());
      msg.setRule(value);
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
proto.common.ImplicitMetaPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.ImplicitMetaPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.ImplicitMetaPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.ImplicitMetaPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubPolicy();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRule();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.common.ImplicitMetaPolicy.Rule = {
  ANY: 0,
  ALL: 1,
  MAJORITY: 2
};

/**
 * optional string sub_policy = 1;
 * @return {string}
 */
proto.common.ImplicitMetaPolicy.prototype.getSubPolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.common.ImplicitMetaPolicy.prototype.setSubPolicy = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Rule rule = 2;
 * @return {!proto.common.ImplicitMetaPolicy.Rule}
 */
proto.common.ImplicitMetaPolicy.prototype.getRule = function() {
  return /** @type {!proto.common.ImplicitMetaPolicy.Rule} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.common.ImplicitMetaPolicy.Rule} value */
proto.common.ImplicitMetaPolicy.prototype.setRule = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.common);
