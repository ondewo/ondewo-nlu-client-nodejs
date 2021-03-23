// source: ondewo/nlu/intent.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
goog.object.extend(proto, ondewo_nlu_context_pb);
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
goog.object.extend(proto, ondewo_nlu_common_pb);
var google_longrunning_operations_pb = require('../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.ondewo.nlu.BatchDeleteIntentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.BatchUpdateIntentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.BatchUpdateIntentsRequest.IntentBatchCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.BatchUpdateIntentsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.CreateIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.CreateTrainingPhraseRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteTrainingPhraseRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetTrainingPhraseRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.FollowupIntentInfo', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.IntentStatus', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Audio', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.BasicCard', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.BasicCard.Button', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Card', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Card.Button', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.CarouselSelect', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.CarouselSelect.Item', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.HTMLText', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Image', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.LinkOutSuggestion', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.ListSelect', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.ListSelect.Item', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.MessageCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Platform', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.QuickReplies', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.SelectItemInfo', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.SimpleResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.SimpleResponses', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Suggestion', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Suggestions', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Text', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Message.Video', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.Parameter', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.TrainingPhrase', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.TrainingPhrase.Entity', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.TrainingPhrase.Type', null, global);
goog.exportSymbol('proto.ondewo.nlu.Intent.WebhookState', null, global);
goog.exportSymbol('proto.ondewo.nlu.IntentBatch', null, global);
goog.exportSymbol('proto.ondewo.nlu.IntentCategory', null, global);
goog.exportSymbol('proto.ondewo.nlu.IntentSorting', null, global);
goog.exportSymbol('proto.ondewo.nlu.IntentSorting.IntentSortingField', null, global);
goog.exportSymbol('proto.ondewo.nlu.IntentView', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListIntentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListIntentsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.UpdateIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.UpdateTrainingPhraseRequest', null, global);
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
proto.ondewo.nlu.Intent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.displayName = 'proto.ondewo.nlu.Intent';
}
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
proto.ondewo.nlu.Intent.TrainingPhrase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.TrainingPhrase.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.TrainingPhrase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.TrainingPhrase.displayName = 'proto.ondewo.nlu.Intent.TrainingPhrase';
}
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
proto.ondewo.nlu.Intent.TrainingPhrase.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.TrainingPhrase.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.TrainingPhrase.Entity.displayName = 'proto.ondewo.nlu.Intent.TrainingPhrase.Entity';
}
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
proto.ondewo.nlu.Intent.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Parameter.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Parameter.displayName = 'proto.ondewo.nlu.Intent.Parameter';
}
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
proto.ondewo.nlu.Intent.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.nlu.Intent.Message.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.Intent.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.displayName = 'proto.ondewo.nlu.Intent.Message';
}
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
proto.ondewo.nlu.Intent.Message.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.Text.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Text.displayName = 'proto.ondewo.nlu.Intent.Message.Text';
}
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
proto.ondewo.nlu.Intent.Message.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Image.displayName = 'proto.ondewo.nlu.Intent.Message.Image';
}
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
proto.ondewo.nlu.Intent.Message.QuickReplies = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.QuickReplies.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.QuickReplies, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.QuickReplies.displayName = 'proto.ondewo.nlu.Intent.Message.QuickReplies';
}
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
proto.ondewo.nlu.Intent.Message.Card = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.Card.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Card, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Card.displayName = 'proto.ondewo.nlu.Intent.Message.Card';
}
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
proto.ondewo.nlu.Intent.Message.Card.Button = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Card.Button, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Card.Button.displayName = 'proto.ondewo.nlu.Intent.Message.Card.Button';
}
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
proto.ondewo.nlu.Intent.Message.SimpleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.SimpleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.SimpleResponse.displayName = 'proto.ondewo.nlu.Intent.Message.SimpleResponse';
}
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
proto.ondewo.nlu.Intent.Message.SimpleResponses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.SimpleResponses.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.SimpleResponses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.SimpleResponses.displayName = 'proto.ondewo.nlu.Intent.Message.SimpleResponses';
}
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
proto.ondewo.nlu.Intent.Message.BasicCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.BasicCard.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.BasicCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.BasicCard.displayName = 'proto.ondewo.nlu.Intent.Message.BasicCard';
}
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
proto.ondewo.nlu.Intent.Message.BasicCard.Button = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.BasicCard.Button, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.BasicCard.Button.displayName = 'proto.ondewo.nlu.Intent.Message.BasicCard.Button';
}
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
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.displayName = 'proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction';
}
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
proto.ondewo.nlu.Intent.Message.Suggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Suggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Suggestion.displayName = 'proto.ondewo.nlu.Intent.Message.Suggestion';
}
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
proto.ondewo.nlu.Intent.Message.Suggestions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.Suggestions.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Suggestions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Suggestions.displayName = 'proto.ondewo.nlu.Intent.Message.Suggestions';
}
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
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.LinkOutSuggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.displayName = 'proto.ondewo.nlu.Intent.Message.LinkOutSuggestion';
}
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
proto.ondewo.nlu.Intent.Message.ListSelect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.ListSelect.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.ListSelect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.ListSelect.displayName = 'proto.ondewo.nlu.Intent.Message.ListSelect';
}
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
proto.ondewo.nlu.Intent.Message.ListSelect.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.ListSelect.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.ListSelect.Item.displayName = 'proto.ondewo.nlu.Intent.Message.ListSelect.Item';
}
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
proto.ondewo.nlu.Intent.Message.CarouselSelect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.CarouselSelect.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.CarouselSelect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.CarouselSelect.displayName = 'proto.ondewo.nlu.Intent.Message.CarouselSelect';
}
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
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.CarouselSelect.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.displayName = 'proto.ondewo.nlu.Intent.Message.CarouselSelect.Item';
}
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
proto.ondewo.nlu.Intent.Message.HTMLText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.HTMLText.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.HTMLText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.HTMLText.displayName = 'proto.ondewo.nlu.Intent.Message.HTMLText';
}
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
proto.ondewo.nlu.Intent.Message.Video = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Video, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Video.displayName = 'proto.ondewo.nlu.Intent.Message.Video';
}
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
proto.ondewo.nlu.Intent.Message.Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.Audio.displayName = 'proto.ondewo.nlu.Intent.Message.Audio';
}
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
proto.ondewo.nlu.Intent.Message.SelectItemInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Intent.Message.SelectItemInfo.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Intent.Message.SelectItemInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.Message.SelectItemInfo.displayName = 'proto.ondewo.nlu.Intent.Message.SelectItemInfo';
}
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
proto.ondewo.nlu.Intent.FollowupIntentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.Intent.FollowupIntentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Intent.FollowupIntentInfo.displayName = 'proto.ondewo.nlu.Intent.FollowupIntentInfo';
}
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
proto.ondewo.nlu.ListIntentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListIntentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListIntentsRequest.displayName = 'proto.ondewo.nlu.ListIntentsRequest';
}
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
proto.ondewo.nlu.ListIntentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListIntentsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListIntentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListIntentsResponse.displayName = 'proto.ondewo.nlu.ListIntentsResponse';
}
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
proto.ondewo.nlu.GetIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetIntentRequest.displayName = 'proto.ondewo.nlu.GetIntentRequest';
}
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
proto.ondewo.nlu.CreateIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.CreateIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CreateIntentRequest.displayName = 'proto.ondewo.nlu.CreateIntentRequest';
}
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
proto.ondewo.nlu.UpdateIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.UpdateIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.UpdateIntentRequest.displayName = 'proto.ondewo.nlu.UpdateIntentRequest';
}
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
proto.ondewo.nlu.DeleteIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DeleteIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteIntentRequest.displayName = 'proto.ondewo.nlu.DeleteIntentRequest';
}
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
proto.ondewo.nlu.BatchUpdateIntentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.nlu.BatchUpdateIntentsRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.BatchUpdateIntentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.BatchUpdateIntentsRequest.displayName = 'proto.ondewo.nlu.BatchUpdateIntentsRequest';
}
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
proto.ondewo.nlu.BatchUpdateIntentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.BatchUpdateIntentsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.BatchUpdateIntentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.BatchUpdateIntentsResponse.displayName = 'proto.ondewo.nlu.BatchUpdateIntentsResponse';
}
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
proto.ondewo.nlu.BatchDeleteIntentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.BatchDeleteIntentsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.BatchDeleteIntentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.BatchDeleteIntentsRequest.displayName = 'proto.ondewo.nlu.BatchDeleteIntentsRequest';
}
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
proto.ondewo.nlu.IntentBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.IntentBatch.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.IntentBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.IntentBatch.displayName = 'proto.ondewo.nlu.IntentBatch';
}
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
proto.ondewo.nlu.IntentSorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.IntentSorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.IntentSorting.displayName = 'proto.ondewo.nlu.IntentSorting';
}
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
proto.ondewo.nlu.CreateTrainingPhraseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.CreateTrainingPhraseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CreateTrainingPhraseRequest.displayName = 'proto.ondewo.nlu.CreateTrainingPhraseRequest';
}
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
proto.ondewo.nlu.GetTrainingPhraseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetTrainingPhraseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetTrainingPhraseRequest.displayName = 'proto.ondewo.nlu.GetTrainingPhraseRequest';
}
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
proto.ondewo.nlu.UpdateTrainingPhraseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.UpdateTrainingPhraseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.UpdateTrainingPhraseRequest.displayName = 'proto.ondewo.nlu.UpdateTrainingPhraseRequest';
}
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
proto.ondewo.nlu.DeleteTrainingPhraseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DeleteTrainingPhraseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteTrainingPhraseRequest.displayName = 'proto.ondewo.nlu.DeleteTrainingPhraseRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.repeatedFields_ = [7,8,9,11,13,14,15,18];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    webhookState: jspb.Message.getFieldWithDefault(msg, 6, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isFallback: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    mlDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    inputContextNamesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    eventsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    trainingPhrasesList: jspb.Message.toObjectList(msg.getTrainingPhrasesList(),
    proto.ondewo.nlu.Intent.TrainingPhrase.toObject, includeInstance),
    action: jspb.Message.getFieldWithDefault(msg, 10, ""),
    outputContextsList: jspb.Message.toObjectList(msg.getOutputContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
    resetContexts: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.ondewo.nlu.Intent.Parameter.toObject, includeInstance),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.ondewo.nlu.Intent.Message.toObject, includeInstance),
    defaultResponsePlatformsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    rootFollowupIntentName: jspb.Message.getFieldWithDefault(msg, 16, ""),
    parentFollowupIntentName: jspb.Message.getFieldWithDefault(msg, 17, ""),
    followupIntentInfoList: jspb.Message.toObjectList(msg.getFollowupIntentInfoList(),
    proto.ondewo.nlu.Intent.FollowupIntentInfo.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 30, ""),
    domainName: jspb.Message.getFieldWithDefault(msg, 31, ""),
    isStartOfDeviation: jspb.Message.getBooleanFieldWithDefault(msg, 32, false),
    isEndOfDeviation: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    trainingPhraseCount: jspb.Message.getFieldWithDefault(msg, 34, 0),
    status: jspb.Message.getFieldWithDefault(msg, 35, 0)
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
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.Intent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent;
  return proto.ondewo.nlu.Intent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.Intent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.Intent.WebhookState} */ (reader.readEnum());
      msg.setWebhookState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFallback(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMlDisabled(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputContextNames(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addEvents(value);
      break;
    case 9:
      var value = new proto.ondewo.nlu.Intent.TrainingPhrase;
      reader.readMessage(value,proto.ondewo.nlu.Intent.TrainingPhrase.deserializeBinaryFromReader);
      msg.addTrainingPhrases(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 11:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addOutputContexts(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResetContexts(value);
      break;
    case 13:
      var value = new proto.ondewo.nlu.Intent.Parameter;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 14:
      var value = new proto.ondewo.nlu.Intent.Message;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 15:
      var values = /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDefaultResponsePlatforms(values[i]);
      }
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootFollowupIntentName(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentFollowupIntentName(value);
      break;
    case 18:
      var value = new proto.ondewo.nlu.Intent.FollowupIntentInfo;
      reader.readMessage(value,proto.ondewo.nlu.Intent.FollowupIntentInfo.deserializeBinaryFromReader);
      msg.addFollowupIntentInfo(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomainName(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStartOfDeviation(value);
      break;
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEndOfDeviation(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainingPhraseCount(value);
      break;
    case 35:
      var value = /** @type {!proto.ondewo.nlu.Intent.IntentStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.ondewo.nlu.Intent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWebhookState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsFallback();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMlDisabled();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getInputContextNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTrainingPhrasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.ondewo.nlu.Intent.TrainingPhrase.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOutputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getResetContexts();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.ondewo.nlu.Intent.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.ondewo.nlu.Intent.Message.serializeBinaryToWriter
    );
  }
  f = message.getDefaultResponsePlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      15,
      f
    );
  }
  f = message.getRootFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getParentFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFollowupIntentInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.ondewo.nlu.Intent.FollowupIntentInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getDomainName();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getIsStartOfDeviation();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
  f = message.getIsEndOfDeviation();
  if (f) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getTrainingPhraseCount();
  if (f !== 0) {
    writer.writeInt32(
      34,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      35,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.Intent.IntentStatus = {
  ACTIVE: 0,
  INACTIVE: 1
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.Intent.WebhookState = {
  WEBHOOK_STATE_UNSPECIFIED: 0,
  WEBHOOK_STATE_ENABLED: 1,
  WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.TrainingPhrase.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.TrainingPhrase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.TrainingPhrase.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    text: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.ondewo.nlu.Intent.TrainingPhrase.Entity.toObject, includeInstance),
    timesAddedCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.TrainingPhrase;
  return proto.ondewo.nlu.Intent.TrainingPhrase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.Intent.TrainingPhrase.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.Intent.TrainingPhrase.Entity;
      reader.readMessage(value,proto.ondewo.nlu.Intent.TrainingPhrase.Entity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimesAddedCount(value);
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
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.TrainingPhrase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.TrainingPhrase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ondewo.nlu.Intent.TrainingPhrase.Entity.serializeBinaryToWriter
    );
  }
  f = message.getTimesAddedCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Type = {
  TYPE_UNSPECIFIED: 0,
  EXAMPLE: 1,
  TEMPLATE: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.TrainingPhrase.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityTypeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityTypeDisplayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entityValueName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityValueDisplayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    start: jspb.Message.getFieldWithDefault(msg, 6, 0),
    end: jspb.Message.getFieldWithDefault(msg, 7, 0),
    parameterName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    parameterDisplayName: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.TrainingPhrase.Entity;
  return proto.ondewo.nlu.Intent.TrainingPhrase.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityValueName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityValueDisplayName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameterName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameterDisplayName(value);
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
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.TrainingPhrase.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityTypeDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntityValueName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityValueDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getParameterName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getParameterDisplayName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string entity_type_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getEntityTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setEntityTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entity_type_display_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getEntityTypeDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setEntityTypeDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string entity_value_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getEntityValueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setEntityValueName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entity_value_display_name = 5;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getEntityValueDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setEntityValueDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 start = 6;
 * @return {number}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 end = 7;
 * @return {number}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string parameter_name = 8;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getParameterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setParameterName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string parameter_display_name = 9;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.getParameterDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.Entity.prototype.setParameterDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Type}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.Intent.TrainingPhrase.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase.Type} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Entity entities = 4;
 * @return {!Array<!proto.ondewo.nlu.Intent.TrainingPhrase.Entity>}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.TrainingPhrase.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.TrainingPhrase.Entity, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.TrainingPhrase.Entity>} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase} returns this
*/
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase.Entity}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.Intent.TrainingPhrase.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * optional int32 times_added_count = 5;
 * @return {number}
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.getTimesAddedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase} returns this
 */
proto.ondewo.nlu.Intent.TrainingPhrase.prototype.setTimesAddedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Parameter.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Parameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    defaultValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityTypeName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    entityTypeDisplayName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    mandatory: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    promptsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    isList: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.ondewo.nlu.Intent.Parameter}
 */
proto.ondewo.nlu.Intent.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Parameter;
  return proto.ondewo.nlu.Intent.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Parameter}
 */
proto.ondewo.nlu.Intent.Parameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeDisplayName(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMandatory(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrompts(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsList(value);
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
proto.ondewo.nlu.Intent.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Parameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDefaultValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityTypeName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEntityTypeDisplayName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMandatory();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPromptsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getIsList();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string default_value = 4;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getDefaultValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setDefaultValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entity_type_name = 5;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getEntityTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setEntityTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string entity_type_display_name = 6;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getEntityTypeDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setEntityTypeDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool mandatory = 7;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getMandatory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setMandatory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string prompts = 8;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getPromptsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setPromptsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.addPrompts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.clearPromptsList = function() {
  return this.setPromptsList([]);
};


/**
 * optional bool is_list = 9;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Parameter.prototype.getIsList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent.Parameter} returns this
 */
proto.ondewo.nlu.Intent.Parameter.prototype.setIsList = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.oneofGroups_ = [[1,2,3,4,5,7,8,9,10,11,12,13,14,15]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.Intent.Message.MessageCase = {
  MESSAGE_NOT_SET: 0,
  TEXT: 1,
  IMAGE: 2,
  QUICK_REPLIES: 3,
  CARD: 4,
  PAYLOAD: 5,
  SIMPLE_RESPONSES: 7,
  BASIC_CARD: 8,
  SUGGESTIONS: 9,
  LINK_OUT_SUGGESTION: 10,
  LIST_SELECT: 11,
  CAROUSEL_SELECT: 12,
  HTML_TEXT: 13,
  VIDEO: 14,
  AUDIO: 15
};

/**
 * @return {proto.ondewo.nlu.Intent.Message.MessageCase}
 */
proto.ondewo.nlu.Intent.Message.prototype.getMessageCase = function() {
  return /** @type {proto.ondewo.nlu.Intent.Message.MessageCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.Intent.Message.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = msg.getText()) && proto.ondewo.nlu.Intent.Message.Text.toObject(includeInstance, f),
    image: (f = msg.getImage()) && proto.ondewo.nlu.Intent.Message.Image.toObject(includeInstance, f),
    quickReplies: (f = msg.getQuickReplies()) && proto.ondewo.nlu.Intent.Message.QuickReplies.toObject(includeInstance, f),
    card: (f = msg.getCard()) && proto.ondewo.nlu.Intent.Message.Card.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    simpleResponses: (f = msg.getSimpleResponses()) && proto.ondewo.nlu.Intent.Message.SimpleResponses.toObject(includeInstance, f),
    basicCard: (f = msg.getBasicCard()) && proto.ondewo.nlu.Intent.Message.BasicCard.toObject(includeInstance, f),
    suggestions: (f = msg.getSuggestions()) && proto.ondewo.nlu.Intent.Message.Suggestions.toObject(includeInstance, f),
    linkOutSuggestion: (f = msg.getLinkOutSuggestion()) && proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.toObject(includeInstance, f),
    listSelect: (f = msg.getListSelect()) && proto.ondewo.nlu.Intent.Message.ListSelect.toObject(includeInstance, f),
    carouselSelect: (f = msg.getCarouselSelect()) && proto.ondewo.nlu.Intent.Message.CarouselSelect.toObject(includeInstance, f),
    htmlText: (f = msg.getHtmlText()) && proto.ondewo.nlu.Intent.Message.HTMLText.toObject(includeInstance, f),
    video: (f = msg.getVideo()) && proto.ondewo.nlu.Intent.Message.Video.toObject(includeInstance, f),
    audio: (f = msg.getAudio()) && proto.ondewo.nlu.Intent.Message.Audio.toObject(includeInstance, f),
    platform: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.ondewo.nlu.Intent.Message}
 */
proto.ondewo.nlu.Intent.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message;
  return proto.ondewo.nlu.Intent.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message}
 */
proto.ondewo.nlu.Intent.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.Message.Text;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.Intent.Message.Image;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.Intent.Message.QuickReplies;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.QuickReplies.deserializeBinaryFromReader);
      msg.setQuickReplies(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.Intent.Message.Card;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Card.deserializeBinaryFromReader);
      msg.setCard(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 7:
      var value = new proto.ondewo.nlu.Intent.Message.SimpleResponses;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.SimpleResponses.deserializeBinaryFromReader);
      msg.setSimpleResponses(value);
      break;
    case 8:
      var value = new proto.ondewo.nlu.Intent.Message.BasicCard;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.BasicCard.deserializeBinaryFromReader);
      msg.setBasicCard(value);
      break;
    case 9:
      var value = new proto.ondewo.nlu.Intent.Message.Suggestions;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Suggestions.deserializeBinaryFromReader);
      msg.setSuggestions(value);
      break;
    case 10:
      var value = new proto.ondewo.nlu.Intent.Message.LinkOutSuggestion;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader);
      msg.setLinkOutSuggestion(value);
      break;
    case 11:
      var value = new proto.ondewo.nlu.Intent.Message.ListSelect;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.ListSelect.deserializeBinaryFromReader);
      msg.setListSelect(value);
      break;
    case 12:
      var value = new proto.ondewo.nlu.Intent.Message.CarouselSelect;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.CarouselSelect.deserializeBinaryFromReader);
      msg.setCarouselSelect(value);
      break;
    case 13:
      var value = new proto.ondewo.nlu.Intent.Message.HTMLText;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.HTMLText.deserializeBinaryFromReader);
      msg.setHtmlText(value);
      break;
    case 14:
      var value = new proto.ondewo.nlu.Intent.Message.Video;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Video.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 15:
      var value = new proto.ondewo.nlu.Intent.Message.Audio;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Audio.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
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
proto.ondewo.nlu.Intent.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.Message.Text.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getQuickReplies();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.Intent.Message.QuickReplies.serializeBinaryToWriter
    );
  }
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.nlu.Intent.Message.Card.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getSimpleResponses();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.nlu.Intent.Message.SimpleResponses.serializeBinaryToWriter
    );
  }
  f = message.getBasicCard();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ondewo.nlu.Intent.Message.BasicCard.serializeBinaryToWriter
    );
  }
  f = message.getSuggestions();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ondewo.nlu.Intent.Message.Suggestions.serializeBinaryToWriter
    );
  }
  f = message.getLinkOutSuggestion();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.serializeBinaryToWriter
    );
  }
  f = message.getListSelect();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ondewo.nlu.Intent.Message.ListSelect.serializeBinaryToWriter
    );
  }
  f = message.getCarouselSelect();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ondewo.nlu.Intent.Message.CarouselSelect.serializeBinaryToWriter
    );
  }
  f = message.getHtmlText();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ondewo.nlu.Intent.Message.HTMLText.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ondewo.nlu.Intent.Message.Video.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ondewo.nlu.Intent.Message.Audio.serializeBinaryToWriter
    );
  }
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.Intent.Message.Platform = {
  PLATFORM_UNSPECIFIED: 0,
  FACEBOOK: 1,
  SLACK: 2,
  TELEGRAM: 3,
  KIK: 4,
  SKYPE: 5,
  LINE: 6,
  VIBER: 7,
  ACTIONS_ON_GOOGLE: 8
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.Text.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
    textList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.Intent.Message.Text}
 */
proto.ondewo.nlu.Intent.Message.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Text;
  return proto.ondewo.nlu.Intent.Message.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Text}
 */
proto.ondewo.nlu.Intent.Message.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addText(value);
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
proto.ondewo.nlu.Intent.Message.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string text = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.Message.Text.prototype.getTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent.Message.Text} returns this
 */
proto.ondewo.nlu.Intent.Message.Text.prototype.setTextList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.Text} returns this
 */
proto.ondewo.nlu.Intent.Message.Text.prototype.addText = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.Text} returns this
 */
proto.ondewo.nlu.Intent.Message.Text.prototype.clearTextList = function() {
  return this.setTextList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessibilityText: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.Image}
 */
proto.ondewo.nlu.Intent.Message.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Image;
  return proto.ondewo.nlu.Intent.Message.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Image}
 */
proto.ondewo.nlu.Intent.Message.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessibilityText(value);
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
proto.ondewo.nlu.Intent.Message.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessibilityText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string image_uri = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Image.prototype.getImageUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Image} returns this
 */
proto.ondewo.nlu.Intent.Message.Image.prototype.setImageUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accessibility_text = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Image.prototype.getAccessibilityText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Image} returns this
 */
proto.ondewo.nlu.Intent.Message.Image.prototype.setAccessibilityText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.QuickReplies.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.QuickReplies} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quickRepliesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.Intent.Message.QuickReplies}
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.QuickReplies;
  return proto.ondewo.nlu.Intent.Message.QuickReplies.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.QuickReplies} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.QuickReplies}
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addQuickReplies(value);
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
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.QuickReplies.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.QuickReplies} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuickRepliesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.QuickReplies} returns this
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string quick_replies = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.getQuickRepliesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent.Message.QuickReplies} returns this
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.setQuickRepliesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.QuickReplies} returns this
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.addQuickReplies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.QuickReplies} returns this
 */
proto.ondewo.nlu.Intent.Message.QuickReplies.prototype.clearQuickRepliesList = function() {
  return this.setQuickRepliesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.Card.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Card.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Card} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Card.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    imageUri: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.ondewo.nlu.Intent.Message.Card.Button.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.Intent.Message.Card}
 */
proto.ondewo.nlu.Intent.Message.Card.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Card;
  return proto.ondewo.nlu.Intent.Message.Card.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Card} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Card}
 */
proto.ondewo.nlu.Intent.Message.Card.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUri(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.Intent.Message.Card.Button;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Card.Button.deserializeBinaryFromReader);
      msg.addButtons(value);
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
proto.ondewo.nlu.Intent.Message.Card.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Card.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Card} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Card.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImageUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ondewo.nlu.Intent.Message.Card.Button.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Card.Button.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Card.Button.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Card.Button} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Card.Button.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postback: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.Card.Button}
 */
proto.ondewo.nlu.Intent.Message.Card.Button.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Card.Button;
  return proto.ondewo.nlu.Intent.Message.Card.Button.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Card.Button} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Card.Button}
 */
proto.ondewo.nlu.Intent.Message.Card.Button.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostback(value);
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
proto.ondewo.nlu.Intent.Message.Card.Button.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Card.Button.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Card.Button} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Card.Button.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostback();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Card.Button.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Card.Button} returns this
 */
proto.ondewo.nlu.Intent.Message.Card.Button.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string postback = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Card.Button.prototype.getPostback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Card.Button} returns this
 */
proto.ondewo.nlu.Intent.Message.Card.Button.prototype.setPostback = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Card} returns this
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtitle = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Card} returns this
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image_uri = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.getImageUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Card} returns this
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.setImageUri = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Button buttons = 4;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Card.Button>}
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message.Card.Button>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message.Card.Button, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Card.Button>} value
 * @return {!proto.ondewo.nlu.Intent.Message.Card} returns this
*/
proto.ondewo.nlu.Intent.Message.Card.prototype.setButtonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Card.Button=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.Card.Button}
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.Intent.Message.Card.Button, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.Card} returns this
 */
proto.ondewo.nlu.Intent.Message.Card.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.SimpleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    textToSpeech: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ssml: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayText: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponse}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.SimpleResponse;
  return proto.ondewo.nlu.Intent.Message.SimpleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponse}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextToSpeech(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsml(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayText(value);
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
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.SimpleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextToSpeech();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSsml();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string text_to_speech = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.getTextToSpeech = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponse} returns this
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.setTextToSpeech = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ssml = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.getSsml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponse} returns this
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.setSsml = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_text = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.getDisplayText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponse} returns this
 */
proto.ondewo.nlu.Intent.Message.SimpleResponse.prototype.setDisplayText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.SimpleResponses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.toObject = function(includeInstance, msg) {
  var f, obj = {
    simpleResponsesList: jspb.Message.toObjectList(msg.getSimpleResponsesList(),
    proto.ondewo.nlu.Intent.Message.SimpleResponse.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponses}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.SimpleResponses;
  return proto.ondewo.nlu.Intent.Message.SimpleResponses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponses}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.Message.SimpleResponse;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.SimpleResponse.deserializeBinaryFromReader);
      msg.addSimpleResponses(value);
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
proto.ondewo.nlu.Intent.Message.SimpleResponses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.SimpleResponses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSimpleResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.Message.SimpleResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SimpleResponse simple_responses = 1;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.SimpleResponse>}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.prototype.getSimpleResponsesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message.SimpleResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message.SimpleResponse, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.SimpleResponse>} value
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponses} returns this
*/
proto.ondewo.nlu.Intent.Message.SimpleResponses.prototype.setSimpleResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.SimpleResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponse}
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.prototype.addSimpleResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Intent.Message.SimpleResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.SimpleResponses} returns this
 */
proto.ondewo.nlu.Intent.Message.SimpleResponses.prototype.clearSimpleResponsesList = function() {
  return this.setSimpleResponsesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.BasicCard.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.BasicCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.BasicCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    formattedText: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.ondewo.nlu.Intent.Message.Image.toObject(includeInstance, f),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.ondewo.nlu.Intent.Message.BasicCard.Button.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.BasicCard;
  return proto.ondewo.nlu.Intent.Message.BasicCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormattedText(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.Intent.Message.Image;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 5:
      var value = new proto.ondewo.nlu.Intent.Message.BasicCard.Button;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.BasicCard.Button.deserializeBinaryFromReader);
      msg.addButtons(value);
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
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.BasicCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.BasicCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFormattedText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.nlu.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ondewo.nlu.Intent.Message.BasicCard.Button.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.BasicCard.Button.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openUriAction: (f = msg.getOpenUriAction()) && proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.BasicCard.Button;
  return proto.ondewo.nlu.Intent.Message.BasicCard.Button.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinaryFromReader);
      msg.setOpenUriAction(value);
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
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.BasicCard.Button.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenUriAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction;
  return proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
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
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OpenUriAction open_uri_action = 2;
 * @return {?proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.getOpenUriAction = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction, 2));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button} returns this
*/
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.setOpenUriAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.clearOpenUriAction = function() {
  return this.setOpenUriAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.Button.prototype.hasOpenUriAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtitle = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string formatted_text = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.getFormattedText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.setFormattedText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.ondewo.nlu.Intent.Message.Image}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.getImage = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Image, 4));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Image|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
*/
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Button buttons = 5;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.BasicCard.Button>}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message.BasicCard.Button>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message.BasicCard.Button, 5));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.BasicCard.Button>} value
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
*/
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.setButtonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.BasicCard.Button=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard.Button}
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ondewo.nlu.Intent.Message.BasicCard.Button, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.BasicCard} returns this
 */
proto.ondewo.nlu.Intent.Message.BasicCard.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Suggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Suggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Suggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestion}
 */
proto.ondewo.nlu.Intent.Message.Suggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Suggestion;
  return proto.ondewo.nlu.Intent.Message.Suggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestion}
 */
proto.ondewo.nlu.Intent.Message.Suggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
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
proto.ondewo.nlu.Intent.Message.Suggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Suggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Suggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Suggestion.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestion} returns this
 */
proto.ondewo.nlu.Intent.Message.Suggestion.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.Suggestions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Suggestions.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Suggestions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Suggestions.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestionsList: jspb.Message.toObjectList(msg.getSuggestionsList(),
    proto.ondewo.nlu.Intent.Message.Suggestion.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestions}
 */
proto.ondewo.nlu.Intent.Message.Suggestions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Suggestions;
  return proto.ondewo.nlu.Intent.Message.Suggestions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestions}
 */
proto.ondewo.nlu.Intent.Message.Suggestions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.Message.Suggestion;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Suggestion.deserializeBinaryFromReader);
      msg.addSuggestions(value);
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
proto.ondewo.nlu.Intent.Message.Suggestions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Suggestions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Suggestions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.Message.Suggestion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Suggestion suggestions = 1;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Suggestion>}
 */
proto.ondewo.nlu.Intent.Message.Suggestions.prototype.getSuggestionsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message.Suggestion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message.Suggestion, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Suggestion>} value
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestions} returns this
*/
proto.ondewo.nlu.Intent.Message.Suggestions.prototype.setSuggestionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Suggestion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestion}
 */
proto.ondewo.nlu.Intent.Message.Suggestions.prototype.addSuggestions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Intent.Message.Suggestion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.Suggestions} returns this
 */
proto.ondewo.nlu.Intent.Message.Suggestions.prototype.clearSuggestionsList = function() {
  return this.setSuggestionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion}
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.LinkOutSuggestion;
  return proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion}
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
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
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string destination_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.prototype.getDestinationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion} returns this
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.prototype.setDestinationName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.LinkOutSuggestion} returns this
 */
proto.ondewo.nlu.Intent.Message.LinkOutSuggestion.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.ListSelect.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.ListSelect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.ListSelect.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.ondewo.nlu.Intent.Message.ListSelect.Item.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.ListSelect;
  return proto.ondewo.nlu.Intent.Message.ListSelect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.Intent.Message.ListSelect.Item;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.ListSelect.Item.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.ListSelect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.ListSelect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.Intent.Message.ListSelect.Item.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.ListSelect.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.ondewo.nlu.Intent.Message.SelectItemInfo.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.ondewo.nlu.Intent.Message.Image.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.ListSelect.Item;
  return proto.ondewo.nlu.Intent.Message.ListSelect.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.Message.SelectItemInfo;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.SelectItemInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.Intent.Message.Image;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
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
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.ListSelect.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.Message.SelectItemInfo.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.nlu.Intent.Message.Image.serializeBinaryToWriter
    );
  }
};


/**
 * optional SelectItemInfo info = 1;
 * @return {?proto.ondewo.nlu.Intent.Message.SelectItemInfo}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.getInfo = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.SelectItemInfo} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.SelectItemInfo, 1));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.SelectItemInfo|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} returns this
*/
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.ondewo.nlu.Intent.Message.Image}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.getImage = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Image, 4));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Image|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} returns this
*/
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.Item.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect} returns this
 */
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.ListSelect.Item>}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message.ListSelect.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message.ListSelect.Item, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.ListSelect.Item>} value
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect} returns this
*/
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.ListSelect.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect.Item}
 */
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.Intent.Message.ListSelect.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.ListSelect} returns this
 */
proto.ondewo.nlu.Intent.Message.ListSelect.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.CarouselSelect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.CarouselSelect;
  return proto.ondewo.nlu.Intent.Message.CarouselSelect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.Message.CarouselSelect.Item;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.ondewo.nlu.Intent.Message.CarouselSelect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.CarouselSelect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.ondewo.nlu.Intent.Message.SelectItemInfo.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.ondewo.nlu.Intent.Message.Image.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.CarouselSelect.Item;
  return proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.Message.SelectItemInfo;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.SelectItemInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.Intent.Message.Image;
      reader.readMessage(value,proto.ondewo.nlu.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
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
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.Message.SelectItemInfo.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.nlu.Intent.Message.Image.serializeBinaryToWriter
    );
  }
};


/**
 * optional SelectItemInfo info = 1;
 * @return {?proto.ondewo.nlu.Intent.Message.SelectItemInfo}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.getInfo = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.SelectItemInfo} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.SelectItemInfo, 1));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.SelectItemInfo|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} returns this
*/
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.ondewo.nlu.Intent.Message.Image}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.getImage = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Image, 4));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Image|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} returns this
*/
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item} returns this
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.Item.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item>}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message.CarouselSelect.Item, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item>} value
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect} returns this
*/
proto.ondewo.nlu.Intent.Message.CarouselSelect.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect.Item}
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Intent.Message.CarouselSelect.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.CarouselSelect} returns this
 */
proto.ondewo.nlu.Intent.Message.CarouselSelect.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.HTMLText.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.HTMLText.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.HTMLText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.HTMLText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.HTMLText.toObject = function(includeInstance, msg) {
  var f, obj = {
    textList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.Intent.Message.HTMLText}
 */
proto.ondewo.nlu.Intent.Message.HTMLText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.HTMLText;
  return proto.ondewo.nlu.Intent.Message.HTMLText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.HTMLText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.HTMLText}
 */
proto.ondewo.nlu.Intent.Message.HTMLText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addText(value);
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
proto.ondewo.nlu.Intent.Message.HTMLText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.HTMLText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.HTMLText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.HTMLText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string text = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.Message.HTMLText.prototype.getTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent.Message.HTMLText} returns this
 */
proto.ondewo.nlu.Intent.Message.HTMLText.prototype.setTextList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.HTMLText} returns this
 */
proto.ondewo.nlu.Intent.Message.HTMLText.prototype.addText = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.HTMLText} returns this
 */
proto.ondewo.nlu.Intent.Message.HTMLText.prototype.clearTextList = function() {
  return this.setTextList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Video.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Video.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Video} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Video.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessibilityText: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.Video}
 */
proto.ondewo.nlu.Intent.Message.Video.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Video;
  return proto.ondewo.nlu.Intent.Message.Video.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Video} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Video}
 */
proto.ondewo.nlu.Intent.Message.Video.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessibilityText(value);
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
proto.ondewo.nlu.Intent.Message.Video.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Video.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Video} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Video.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessibilityText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Video.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Video} returns this
 */
proto.ondewo.nlu.Intent.Message.Video.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accessibility_text = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Video.prototype.getAccessibilityText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Video} returns this
 */
proto.ondewo.nlu.Intent.Message.Video.prototype.setAccessibilityText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Audio.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessibilityText: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.Intent.Message.Audio}
 */
proto.ondewo.nlu.Intent.Message.Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.Audio;
  return proto.ondewo.nlu.Intent.Message.Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.Audio}
 */
proto.ondewo.nlu.Intent.Message.Audio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessibilityText(value);
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
proto.ondewo.nlu.Intent.Message.Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessibilityText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Audio.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Audio} returns this
 */
proto.ondewo.nlu.Intent.Message.Audio.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accessibility_text = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.Audio.prototype.getAccessibilityText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.Audio} returns this
 */
proto.ondewo.nlu.Intent.Message.Audio.prototype.setAccessibilityText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.Message.SelectItemInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    synonymsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.Intent.Message.SelectItemInfo}
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.Message.SelectItemInfo;
  return proto.ondewo.nlu.Intent.Message.SelectItemInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.Message.SelectItemInfo}
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSynonyms(value);
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
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.Message.SelectItemInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSynonymsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} returns this
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string synonyms = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.getSynonymsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} returns this
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.setSynonymsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} returns this
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.addSynonyms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent.Message.SelectItemInfo} returns this
 */
proto.ondewo.nlu.Intent.Message.SelectItemInfo.prototype.clearSynonymsList = function() {
  return this.setSynonymsList([]);
};


/**
 * optional Text text = 1;
 * @return {?proto.ondewo.nlu.Intent.Message.Text}
 */
proto.ondewo.nlu.Intent.Message.prototype.getText = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Text} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Text, 1));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Text|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Image image = 2;
 * @return {?proto.ondewo.nlu.Intent.Message.Image}
 */
proto.ondewo.nlu.Intent.Message.prototype.getImage = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Image, 2));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Image|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasImage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QuickReplies quick_replies = 3;
 * @return {?proto.ondewo.nlu.Intent.Message.QuickReplies}
 */
proto.ondewo.nlu.Intent.Message.prototype.getQuickReplies = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.QuickReplies} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.QuickReplies, 3));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.QuickReplies|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setQuickReplies = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearQuickReplies = function() {
  return this.setQuickReplies(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasQuickReplies = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Card card = 4;
 * @return {?proto.ondewo.nlu.Intent.Message.Card}
 */
proto.ondewo.nlu.Intent.Message.prototype.getCard = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Card} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Card, 4));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Card|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setCard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasCard = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct payload = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.Intent.Message.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setPayload = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SimpleResponses simple_responses = 7;
 * @return {?proto.ondewo.nlu.Intent.Message.SimpleResponses}
 */
proto.ondewo.nlu.Intent.Message.prototype.getSimpleResponses = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.SimpleResponses} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.SimpleResponses, 7));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.SimpleResponses|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setSimpleResponses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearSimpleResponses = function() {
  return this.setSimpleResponses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasSimpleResponses = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BasicCard basic_card = 8;
 * @return {?proto.ondewo.nlu.Intent.Message.BasicCard}
 */
proto.ondewo.nlu.Intent.Message.prototype.getBasicCard = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.BasicCard} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.BasicCard, 8));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.BasicCard|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setBasicCard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearBasicCard = function() {
  return this.setBasicCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasBasicCard = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Suggestions suggestions = 9;
 * @return {?proto.ondewo.nlu.Intent.Message.Suggestions}
 */
proto.ondewo.nlu.Intent.Message.prototype.getSuggestions = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Suggestions} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Suggestions, 9));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Suggestions|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setSuggestions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearSuggestions = function() {
  return this.setSuggestions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasSuggestions = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional LinkOutSuggestion link_out_suggestion = 10;
 * @return {?proto.ondewo.nlu.Intent.Message.LinkOutSuggestion}
 */
proto.ondewo.nlu.Intent.Message.prototype.getLinkOutSuggestion = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.LinkOutSuggestion} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.LinkOutSuggestion, 10));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.LinkOutSuggestion|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setLinkOutSuggestion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearLinkOutSuggestion = function() {
  return this.setLinkOutSuggestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasLinkOutSuggestion = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ListSelect list_select = 11;
 * @return {?proto.ondewo.nlu.Intent.Message.ListSelect}
 */
proto.ondewo.nlu.Intent.Message.prototype.getListSelect = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.ListSelect} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.ListSelect, 11));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.ListSelect|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setListSelect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearListSelect = function() {
  return this.setListSelect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasListSelect = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CarouselSelect carousel_select = 12;
 * @return {?proto.ondewo.nlu.Intent.Message.CarouselSelect}
 */
proto.ondewo.nlu.Intent.Message.prototype.getCarouselSelect = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.CarouselSelect} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.CarouselSelect, 12));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.CarouselSelect|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setCarouselSelect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearCarouselSelect = function() {
  return this.setCarouselSelect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasCarouselSelect = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional HTMLText html_text = 13;
 * @return {?proto.ondewo.nlu.Intent.Message.HTMLText}
 */
proto.ondewo.nlu.Intent.Message.prototype.getHtmlText = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.HTMLText} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.HTMLText, 13));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.HTMLText|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setHtmlText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearHtmlText = function() {
  return this.setHtmlText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasHtmlText = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Video video = 14;
 * @return {?proto.ondewo.nlu.Intent.Message.Video}
 */
proto.ondewo.nlu.Intent.Message.prototype.getVideo = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Video} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Video, 14));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Video|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setVideo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Audio audio = 15;
 * @return {?proto.ondewo.nlu.Intent.Message.Audio}
 */
proto.ondewo.nlu.Intent.Message.prototype.getAudio = function() {
  return /** @type{?proto.ondewo.nlu.Intent.Message.Audio} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.Message.Audio, 15));
};


/**
 * @param {?proto.ondewo.nlu.Intent.Message.Audio|undefined} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
*/
proto.ondewo.nlu.Intent.Message.prototype.setAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ondewo.nlu.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.Message.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Platform platform = 6;
 * @return {!proto.ondewo.nlu.Intent.Message.Platform}
 */
proto.ondewo.nlu.Intent.Message.prototype.getPlatform = function() {
  return /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @return {!proto.ondewo.nlu.Intent.Message} returns this
 */
proto.ondewo.nlu.Intent.Message.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Intent.FollowupIntentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Intent.FollowupIntentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    followupIntentName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentFollowupIntentName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.Intent.FollowupIntentInfo}
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Intent.FollowupIntentInfo;
  return proto.ondewo.nlu.Intent.FollowupIntentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Intent.FollowupIntentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Intent.FollowupIntentInfo}
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowupIntentName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentFollowupIntentName(value);
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
proto.ondewo.nlu.Intent.FollowupIntentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Intent.FollowupIntentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Intent.FollowupIntentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string followup_intent_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.prototype.getFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.FollowupIntentInfo} returns this
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.prototype.setFollowupIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_followup_intent_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.prototype.getParentFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent.FollowupIntentInfo} returns this
 */
proto.ondewo.nlu.Intent.FollowupIntentInfo.prototype.setParentFollowupIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional WebhookState webhook_state = 6;
 * @return {!proto.ondewo.nlu.Intent.WebhookState}
 */
proto.ondewo.nlu.Intent.prototype.getWebhookState = function() {
  return /** @type {!proto.ondewo.nlu.Intent.WebhookState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.Intent.WebhookState} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setWebhookState = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.ondewo.nlu.Intent.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_fallback = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.prototype.getIsFallback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setIsFallback = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool ml_disabled = 19;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.prototype.getMlDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setMlDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * repeated string input_context_names = 7;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.prototype.getInputContextNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setInputContextNamesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.addInputContextNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearInputContextNamesList = function() {
  return this.setInputContextNamesList([]);
};


/**
 * repeated string events = 8;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Intent.prototype.getEventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setEventsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.addEvents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * repeated TrainingPhrase training_phrases = 9;
 * @return {!Array<!proto.ondewo.nlu.Intent.TrainingPhrase>}
 */
proto.ondewo.nlu.Intent.prototype.getTrainingPhrasesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.TrainingPhrase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.TrainingPhrase, 9));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.TrainingPhrase>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
*/
proto.ondewo.nlu.Intent.prototype.setTrainingPhrasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.TrainingPhrase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.TrainingPhrase}
 */
proto.ondewo.nlu.Intent.prototype.addTrainingPhrases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.ondewo.nlu.Intent.TrainingPhrase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearTrainingPhrasesList = function() {
  return this.setTrainingPhrasesList([]);
};


/**
 * optional string action = 10;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated Context output_contexts = 11;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.Intent.prototype.getOutputContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 11));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
*/
proto.ondewo.nlu.Intent.prototype.setOutputContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.Intent.prototype.addOutputContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearOutputContextsList = function() {
  return this.setOutputContextsList([]);
};


/**
 * optional bool reset_contexts = 12;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.prototype.getResetContexts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setResetContexts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated Parameter parameters = 13;
 * @return {!Array<!proto.ondewo.nlu.Intent.Parameter>}
 */
proto.ondewo.nlu.Intent.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Parameter, 13));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Parameter>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
*/
proto.ondewo.nlu.Intent.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Parameter}
 */
proto.ondewo.nlu.Intent.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.ondewo.nlu.Intent.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * repeated Message messages = 14;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message>}
 */
proto.ondewo.nlu.Intent.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.Message, 14));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
*/
proto.ondewo.nlu.Intent.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message}
 */
proto.ondewo.nlu.Intent.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.ondewo.nlu.Intent.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * repeated Message.Platform default_response_platforms = 15;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Platform>}
 */
proto.ondewo.nlu.Intent.prototype.getDefaultResponsePlatformsList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setDefaultResponsePlatformsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.addDefaultResponsePlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearDefaultResponsePlatformsList = function() {
  return this.setDefaultResponsePlatformsList([]);
};


/**
 * optional string root_followup_intent_name = 16;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getRootFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setRootFollowupIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string parent_followup_intent_name = 17;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getParentFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setParentFollowupIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated FollowupIntentInfo followup_intent_info = 18;
 * @return {!Array<!proto.ondewo.nlu.Intent.FollowupIntentInfo>}
 */
proto.ondewo.nlu.Intent.prototype.getFollowupIntentInfoList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.FollowupIntentInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent.FollowupIntentInfo, 18));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.FollowupIntentInfo>} value
 * @return {!proto.ondewo.nlu.Intent} returns this
*/
proto.ondewo.nlu.Intent.prototype.setFollowupIntentInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.FollowupIntentInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.FollowupIntentInfo}
 */
proto.ondewo.nlu.Intent.prototype.addFollowupIntentInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.ondewo.nlu.Intent.FollowupIntentInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.clearFollowupIntentInfoList = function() {
  return this.setFollowupIntentInfoList([]);
};


/**
 * optional string next_page_token = 30;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string domain_name = 31;
 * @return {string}
 */
proto.ondewo.nlu.Intent.prototype.getDomainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setDomainName = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional bool is_start_of_deviation = 32;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.prototype.getIsStartOfDeviation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setIsStartOfDeviation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * optional bool is_end_of_deviation = 33;
 * @return {boolean}
 */
proto.ondewo.nlu.Intent.prototype.getIsEndOfDeviation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setIsEndOfDeviation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 33, value);
};


/**
 * optional int32 training_phrase_count = 34;
 * @return {number}
 */
proto.ondewo.nlu.Intent.prototype.getTrainingPhraseCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setTrainingPhraseCount = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional IntentStatus status = 35;
 * @return {!proto.ondewo.nlu.Intent.IntentStatus}
 */
proto.ondewo.nlu.Intent.prototype.getStatus = function() {
  return /** @type {!proto.ondewo.nlu.Intent.IntentStatus} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {!proto.ondewo.nlu.Intent.IntentStatus} value
 * @return {!proto.ondewo.nlu.Intent} returns this
 */
proto.ondewo.nlu.Intent.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 35, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListIntentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListIntentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIntentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentView: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    filterByCategory: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sortByField: (f = msg.getSortByField()) && proto.ondewo.nlu.IntentSorting.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListIntentsRequest}
 */
proto.ondewo.nlu.ListIntentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListIntentsRequest;
  return proto.ondewo.nlu.ListIntentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListIntentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListIntentsRequest}
 */
proto.ondewo.nlu.ListIntentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.IntentCategory} */ (reader.readEnum());
      msg.setFilterByCategory(value);
      break;
    case 7:
      var value = new proto.ondewo.nlu.IntentSorting;
      reader.readMessage(value,proto.ondewo.nlu.IntentSorting.deserializeBinaryFromReader);
      msg.setSortByField(value);
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
proto.ondewo.nlu.ListIntentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListIntentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListIntentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIntentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFilterByCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSortByField();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.nlu.IntentSorting.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IntentView intent_view = 3;
 * @return {!proto.ondewo.nlu.IntentView}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.getIntentView = function() {
  return /** @type {!proto.ondewo.nlu.IntentView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentView} value
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.setIntentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional IntentCategory filter_by_category = 6;
 * @return {!proto.ondewo.nlu.IntentCategory}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.getFilterByCategory = function() {
  return /** @type {!proto.ondewo.nlu.IntentCategory} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentCategory} value
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.setFilterByCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional IntentSorting sort_by_field = 7;
 * @return {?proto.ondewo.nlu.IntentSorting}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.getSortByField = function() {
  return /** @type{?proto.ondewo.nlu.IntentSorting} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.IntentSorting, 7));
};


/**
 * @param {?proto.ondewo.nlu.IntentSorting|undefined} value
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
*/
proto.ondewo.nlu.ListIntentsRequest.prototype.setSortByField = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListIntentsRequest} returns this
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.clearSortByField = function() {
  return this.setSortByField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListIntentsRequest.prototype.hasSortByField = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListIntentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListIntentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListIntentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListIntentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIntentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.ondewo.nlu.Intent.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.ListIntentsResponse}
 */
proto.ondewo.nlu.ListIntentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListIntentsResponse;
  return proto.ondewo.nlu.ListIntentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListIntentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListIntentsResponse}
 */
proto.ondewo.nlu.ListIntentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent;
      reader.readMessage(value,proto.ondewo.nlu.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.ondewo.nlu.ListIntentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListIntentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListIntentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIntentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Intent intents = 1;
 * @return {!Array<!proto.ondewo.nlu.Intent>}
 */
proto.ondewo.nlu.ListIntentsResponse.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent>} value
 * @return {!proto.ondewo.nlu.ListIntentsResponse} returns this
*/
proto.ondewo.nlu.ListIntentsResponse.prototype.setIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.ListIntentsResponse.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListIntentsResponse} returns this
 */
proto.ondewo.nlu.ListIntentsResponse.prototype.clearIntentsList = function() {
  return this.setIntentsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListIntentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListIntentsResponse} returns this
 */
proto.ondewo.nlu.ListIntentsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentView: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.ondewo.nlu.GetIntentRequest}
 */
proto.ondewo.nlu.GetIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetIntentRequest;
  return proto.ondewo.nlu.GetIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetIntentRequest}
 */
proto.ondewo.nlu.GetIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.ondewo.nlu.GetIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetIntentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetIntentRequest} returns this
 */
proto.ondewo.nlu.GetIntentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.GetIntentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetIntentRequest} returns this
 */
proto.ondewo.nlu.GetIntentRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IntentView intent_view = 3;
 * @return {!proto.ondewo.nlu.IntentView}
 */
proto.ondewo.nlu.GetIntentRequest.prototype.getIntentView = function() {
  return /** @type {!proto.ondewo.nlu.IntentView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentView} value
 * @return {!proto.ondewo.nlu.GetIntentRequest} returns this
 */
proto.ondewo.nlu.GetIntentRequest.prototype.setIntentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string page_token = 10;
 * @return {string}
 */
proto.ondewo.nlu.GetIntentRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetIntentRequest} returns this
 */
proto.ondewo.nlu.GetIntentRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CreateIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CreateIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intent: (f = msg.getIntent()) && proto.ondewo.nlu.Intent.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intentView: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ondewo.nlu.CreateIntentRequest}
 */
proto.ondewo.nlu.CreateIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CreateIntentRequest;
  return proto.ondewo.nlu.CreateIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CreateIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CreateIntentRequest}
 */
proto.ondewo.nlu.CreateIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.Intent;
      reader.readMessage(value,proto.ondewo.nlu.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.nlu.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.ondewo.nlu.CreateIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CreateIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CreateIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.Intent.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateIntentRequest} returns this
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Intent intent = 2;
 * @return {?proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.getIntent = function() {
  return /** @type{?proto.ondewo.nlu.Intent} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent, 2));
};


/**
 * @param {?proto.ondewo.nlu.Intent|undefined} value
 * @return {!proto.ondewo.nlu.CreateIntentRequest} returns this
*/
proto.ondewo.nlu.CreateIntentRequest.prototype.setIntent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CreateIntentRequest} returns this
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.clearIntent = function() {
  return this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateIntentRequest} returns this
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional IntentView intent_view = 4;
 * @return {!proto.ondewo.nlu.IntentView}
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.getIntentView = function() {
  return /** @type {!proto.ondewo.nlu.IntentView} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentView} value
 * @return {!proto.ondewo.nlu.CreateIntentRequest} returns this
 */
proto.ondewo.nlu.CreateIntentRequest.prototype.setIntentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.UpdateIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    intent: (f = msg.getIntent()) && proto.ondewo.nlu.Intent.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    intentView: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ondewo.nlu.UpdateIntentRequest}
 */
proto.ondewo.nlu.UpdateIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.UpdateIntentRequest;
  return proto.ondewo.nlu.UpdateIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.UpdateIntentRequest}
 */
proto.ondewo.nlu.UpdateIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent;
      reader.readMessage(value,proto.ondewo.nlu.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.nlu.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.ondewo.nlu.UpdateIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.UpdateIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Intent intent = 1;
 * @return {?proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.getIntent = function() {
  return /** @type{?proto.ondewo.nlu.Intent} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent, 1));
};


/**
 * @param {?proto.ondewo.nlu.Intent|undefined} value
 * @return {!proto.ondewo.nlu.UpdateIntentRequest} returns this
*/
proto.ondewo.nlu.UpdateIntentRequest.prototype.setIntent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateIntentRequest} returns this
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.clearIntent = function() {
  return this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.UpdateIntentRequest} returns this
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.UpdateIntentRequest} returns this
*/
proto.ondewo.nlu.UpdateIntentRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateIntentRequest} returns this
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional IntentView intent_view = 4;
 * @return {!proto.ondewo.nlu.IntentView}
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.getIntentView = function() {
  return /** @type {!proto.ondewo.nlu.IntentView} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentView} value
 * @return {!proto.ondewo.nlu.UpdateIntentRequest} returns this
 */
proto.ondewo.nlu.UpdateIntentRequest.prototype.setIntentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.DeleteIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.DeleteIntentRequest}
 */
proto.ondewo.nlu.DeleteIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteIntentRequest;
  return proto.ondewo.nlu.DeleteIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteIntentRequest}
 */
proto.ondewo.nlu.DeleteIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.ondewo.nlu.DeleteIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteIntentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteIntentRequest} returns this
 */
proto.ondewo.nlu.DeleteIntentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.IntentBatchCase = {
  INTENT_BATCH_NOT_SET: 0,
  INTENT_BATCH_URI: 2,
  INTENT_BATCH_INLINE: 3
};

/**
 * @return {proto.ondewo.nlu.BatchUpdateIntentsRequest.IntentBatchCase}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getIntentBatchCase = function() {
  return /** @type {proto.ondewo.nlu.BatchUpdateIntentsRequest.IntentBatchCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.BatchUpdateIntentsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.BatchUpdateIntentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intentBatchUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentBatchInline: (f = msg.getIntentBatchInline()) && proto.ondewo.nlu.IntentBatch.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    intentView: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.BatchUpdateIntentsRequest;
  return proto.ondewo.nlu.BatchUpdateIntentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentBatchUri(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.IntentBatch;
      reader.readMessage(value,proto.ondewo.nlu.IntentBatch.deserializeBinaryFromReader);
      msg.setIntentBatchInline(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.BatchUpdateIntentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentBatchInline();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.IntentBatch.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string intent_batch_uri = 2;
 * @return {string}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getIntentBatchUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.setIntentBatchUri = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.BatchUpdateIntentsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.clearIntentBatchUri = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.BatchUpdateIntentsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.hasIntentBatchUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IntentBatch intent_batch_inline = 3;
 * @return {?proto.ondewo.nlu.IntentBatch}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getIntentBatchInline = function() {
  return /** @type{?proto.ondewo.nlu.IntentBatch} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.IntentBatch, 3));
};


/**
 * @param {?proto.ondewo.nlu.IntentBatch|undefined} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
*/
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.setIntentBatchInline = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.nlu.BatchUpdateIntentsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.clearIntentBatchInline = function() {
  return this.setIntentBatchInline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.hasIntentBatchInline = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
*/
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IntentView intent_view = 6;
 * @return {!proto.ondewo.nlu.IntentView}
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.getIntentView = function() {
  return /** @type {!proto.ondewo.nlu.IntentView} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentView} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsRequest.prototype.setIntentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.BatchUpdateIntentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.ondewo.nlu.Intent.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsResponse}
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.BatchUpdateIntentsResponse;
  return proto.ondewo.nlu.BatchUpdateIntentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsResponse}
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent;
      reader.readMessage(value,proto.ondewo.nlu.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
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
proto.ondewo.nlu.BatchUpdateIntentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.BatchUpdateIntentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Intent intents = 1;
 * @return {!Array<!proto.ondewo.nlu.Intent>}
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent>} value
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsResponse} returns this
*/
proto.ondewo.nlu.BatchUpdateIntentsResponse.prototype.setIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.BatchUpdateIntentsResponse} returns this
 */
proto.ondewo.nlu.BatchUpdateIntentsResponse.prototype.clearIntentsList = function() {
  return this.setIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.BatchDeleteIntentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.ondewo.nlu.Intent.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.BatchDeleteIntentsRequest}
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.BatchDeleteIntentsRequest;
  return proto.ondewo.nlu.BatchDeleteIntentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.BatchDeleteIntentsRequest}
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.Intent;
      reader.readMessage(value,proto.ondewo.nlu.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
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
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.BatchDeleteIntentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.BatchDeleteIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Intent intents = 2;
 * @return {!Array<!proto.ondewo.nlu.Intent>}
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent>} value
 * @return {!proto.ondewo.nlu.BatchDeleteIntentsRequest} returns this
*/
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.setIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.BatchDeleteIntentsRequest} returns this
 */
proto.ondewo.nlu.BatchDeleteIntentsRequest.prototype.clearIntentsList = function() {
  return this.setIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.IntentBatch.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.IntentBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.IntentBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.IntentBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.IntentBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.ondewo.nlu.Intent.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.IntentBatch}
 */
proto.ondewo.nlu.IntentBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.IntentBatch;
  return proto.ondewo.nlu.IntentBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.IntentBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.IntentBatch}
 */
proto.ondewo.nlu.IntentBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent;
      reader.readMessage(value,proto.ondewo.nlu.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
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
proto.ondewo.nlu.IntentBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.IntentBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.IntentBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.IntentBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Intent intents = 1;
 * @return {!Array<!proto.ondewo.nlu.Intent>}
 */
proto.ondewo.nlu.IntentBatch.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Intent, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent>} value
 * @return {!proto.ondewo.nlu.IntentBatch} returns this
*/
proto.ondewo.nlu.IntentBatch.prototype.setIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.IntentBatch.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.IntentBatch} returns this
 */
proto.ondewo.nlu.IntentBatch.prototype.clearIntentsList = function() {
  return this.setIntentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.IntentSorting.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.IntentSorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.IntentSorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.IntentSorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    sortingField: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sortingMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ondewo.nlu.IntentSorting}
 */
proto.ondewo.nlu.IntentSorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.IntentSorting;
  return proto.ondewo.nlu.IntentSorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.IntentSorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.IntentSorting}
 */
proto.ondewo.nlu.IntentSorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.IntentSorting.IntentSortingField} */ (reader.readEnum());
      msg.setSortingField(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.SortingMode} */ (reader.readEnum());
      msg.setSortingMode(value);
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
proto.ondewo.nlu.IntentSorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.IntentSorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.IntentSorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.IntentSorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortingField();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSortingMode();
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
proto.ondewo.nlu.IntentSorting.IntentSortingField = {
  NO_INTENT_SORTING: 0,
  SORT_INTENT_BY_NAME: 1,
  SORT_INTENT_BY_CREATION_DATE: 2,
  SORT_INTENT_BY_LAST_UPDATED: 3,
  SORT_INTENT_BY_USERSAYS_COUNT: 4
};

/**
 * optional IntentSortingField sorting_field = 1;
 * @return {!proto.ondewo.nlu.IntentSorting.IntentSortingField}
 */
proto.ondewo.nlu.IntentSorting.prototype.getSortingField = function() {
  return /** @type {!proto.ondewo.nlu.IntentSorting.IntentSortingField} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.IntentSorting.IntentSortingField} value
 * @return {!proto.ondewo.nlu.IntentSorting} returns this
 */
proto.ondewo.nlu.IntentSorting.prototype.setSortingField = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SortingMode sorting_mode = 2;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.IntentSorting.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.IntentSorting} returns this
 */
proto.ondewo.nlu.IntentSorting.prototype.setSortingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CreateTrainingPhraseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CreateTrainingPhraseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trainingPhrase: (f = msg.getTrainingPhrase()) && proto.ondewo.nlu.Intent.TrainingPhrase.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.CreateTrainingPhraseRequest}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CreateTrainingPhraseRequest;
  return proto.ondewo.nlu.CreateTrainingPhraseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CreateTrainingPhraseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CreateTrainingPhraseRequest}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.Intent.TrainingPhrase;
      reader.readMessage(value,proto.ondewo.nlu.Intent.TrainingPhrase.deserializeBinaryFromReader);
      msg.setTrainingPhrase(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
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
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CreateTrainingPhraseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CreateTrainingPhraseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrainingPhrase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.Intent.TrainingPhrase.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string intent_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Intent.TrainingPhrase training_phrase = 2;
 * @return {?proto.ondewo.nlu.Intent.TrainingPhrase}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.getTrainingPhrase = function() {
  return /** @type{?proto.ondewo.nlu.Intent.TrainingPhrase} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.TrainingPhrase, 2));
};


/**
 * @param {?proto.ondewo.nlu.Intent.TrainingPhrase|undefined} value
 * @return {!proto.ondewo.nlu.CreateTrainingPhraseRequest} returns this
*/
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.setTrainingPhrase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CreateTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.clearTrainingPhrase = function() {
  return this.setTrainingPhrase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.hasTrainingPhrase = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.CreateTrainingPhraseRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetTrainingPhraseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetTrainingPhraseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.GetTrainingPhraseRequest}
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetTrainingPhraseRequest;
  return proto.ondewo.nlu.GetTrainingPhraseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetTrainingPhraseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetTrainingPhraseRequest}
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
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
proto.ondewo.nlu.GetTrainingPhraseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetTrainingPhraseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetTrainingPhraseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.GetTrainingPhraseRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.UpdateTrainingPhraseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.UpdateTrainingPhraseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trainingPhrase: (f = msg.getTrainingPhrase()) && proto.ondewo.nlu.Intent.TrainingPhrase.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.UpdateTrainingPhraseRequest}
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.UpdateTrainingPhraseRequest;
  return proto.ondewo.nlu.UpdateTrainingPhraseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.UpdateTrainingPhraseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.UpdateTrainingPhraseRequest}
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Intent.TrainingPhrase;
      reader.readMessage(value,proto.ondewo.nlu.Intent.TrainingPhrase.deserializeBinaryFromReader);
      msg.setTrainingPhrase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
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
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.UpdateTrainingPhraseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.UpdateTrainingPhraseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrainingPhrase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Intent.TrainingPhrase.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Intent.TrainingPhrase training_phrase = 1;
 * @return {?proto.ondewo.nlu.Intent.TrainingPhrase}
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.getTrainingPhrase = function() {
  return /** @type{?proto.ondewo.nlu.Intent.TrainingPhrase} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Intent.TrainingPhrase, 1));
};


/**
 * @param {?proto.ondewo.nlu.Intent.TrainingPhrase|undefined} value
 * @return {!proto.ondewo.nlu.UpdateTrainingPhraseRequest} returns this
*/
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.setTrainingPhrase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.clearTrainingPhrase = function() {
  return this.setTrainingPhrase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.hasTrainingPhrase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.UpdateTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.UpdateTrainingPhraseRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteTrainingPhraseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteTrainingPhraseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.DeleteTrainingPhraseRequest}
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteTrainingPhraseRequest;
  return proto.ondewo.nlu.DeleteTrainingPhraseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteTrainingPhraseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteTrainingPhraseRequest}
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.ondewo.nlu.DeleteTrainingPhraseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteTrainingPhraseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteTrainingPhraseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteTrainingPhraseRequest} returns this
 */
proto.ondewo.nlu.DeleteTrainingPhraseRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.IntentView = {
  INTENT_VIEW_UNSPECIFIED: 0,
  INTENT_VIEW_FULL: 1,
  INTENT_VIEW_PARTIAL: 2,
  INTENT_VIEW_SHALLOW: 3
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.IntentCategory = {
  ALL_INTENTS: 0,
  DEFAULT_INTENTS: 1,
  USER_DEFINED_INTENTS: 2
};

goog.object.extend(exports, proto.ondewo.nlu);
