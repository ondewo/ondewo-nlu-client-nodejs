// package: ondewo.nlu
// file: ondewo/nlu/intent.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Intent extends jspb.Message { 
    getName(): string;
    setName(value: string): Intent;
    getDisplayName(): string;
    setDisplayName(value: string): Intent;
    getWebhookState(): Intent.WebhookState;
    setWebhookState(value: Intent.WebhookState): Intent;
    getPriority(): number;
    setPriority(value: number): Intent;
    getIsFallback(): boolean;
    setIsFallback(value: boolean): Intent;
    getMlDisabled(): boolean;
    setMlDisabled(value: boolean): Intent;
    clearInputContextNamesList(): void;
    getInputContextNamesList(): Array<string>;
    setInputContextNamesList(value: Array<string>): Intent;
    addInputContextNames(value: string, index?: number): string;
    clearEventsList(): void;
    getEventsList(): Array<string>;
    setEventsList(value: Array<string>): Intent;
    addEvents(value: string, index?: number): string;
    clearTrainingPhrasesList(): void;
    getTrainingPhrasesList(): Array<Intent.TrainingPhrase>;
    setTrainingPhrasesList(value: Array<Intent.TrainingPhrase>): Intent;
    addTrainingPhrases(value?: Intent.TrainingPhrase, index?: number): Intent.TrainingPhrase;
    getAction(): string;
    setAction(value: string): Intent;
    clearOutputContextsList(): void;
    getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): Intent;
    addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
    getResetContexts(): boolean;
    setResetContexts(value: boolean): Intent;
    clearParametersList(): void;
    getParametersList(): Array<Intent.Parameter>;
    setParametersList(value: Array<Intent.Parameter>): Intent;
    addParameters(value?: Intent.Parameter, index?: number): Intent.Parameter;
    clearMessagesList(): void;
    getMessagesList(): Array<Intent.Message>;
    setMessagesList(value: Array<Intent.Message>): Intent;
    addMessages(value?: Intent.Message, index?: number): Intent.Message;
    clearDefaultResponsePlatformsList(): void;
    getDefaultResponsePlatformsList(): Array<Intent.Message.Platform>;
    setDefaultResponsePlatformsList(value: Array<Intent.Message.Platform>): Intent;
    addDefaultResponsePlatforms(value: Intent.Message.Platform, index?: number): Intent.Message.Platform;
    getRootFollowupIntentName(): string;
    setRootFollowupIntentName(value: string): Intent;
    getParentFollowupIntentName(): string;
    setParentFollowupIntentName(value: string): Intent;
    clearFollowupIntentInfoList(): void;
    getFollowupIntentInfoList(): Array<Intent.FollowupIntentInfo>;
    setFollowupIntentInfoList(value: Array<Intent.FollowupIntentInfo>): Intent;
    addFollowupIntentInfo(value?: Intent.FollowupIntentInfo, index?: number): Intent.FollowupIntentInfo;
    getNextPageToken(): string;
    setNextPageToken(value: string): Intent;
    getDomainName(): string;
    setDomainName(value: string): Intent;
    getIsStartOfDeviation(): boolean;
    setIsStartOfDeviation(value: boolean): Intent;
    getIsEndOfDeviation(): boolean;
    setIsEndOfDeviation(value: boolean): Intent;
    getTrainingPhraseCount(): number;
    setTrainingPhraseCount(value: number): Intent;
    getStatus(): Intent.IntentStatus;
    setStatus(value: Intent.IntentStatus): Intent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Intent.AsObject;
    static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Intent;
    static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
    export type AsObject = {
        name: string,
        displayName: string,
        webhookState: Intent.WebhookState,
        priority: number,
        isFallback: boolean,
        mlDisabled: boolean,
        inputContextNamesList: Array<string>,
        eventsList: Array<string>,
        trainingPhrasesList: Array<Intent.TrainingPhrase.AsObject>,
        action: string,
        outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        resetContexts: boolean,
        parametersList: Array<Intent.Parameter.AsObject>,
        messagesList: Array<Intent.Message.AsObject>,
        defaultResponsePlatformsList: Array<Intent.Message.Platform>,
        rootFollowupIntentName: string,
        parentFollowupIntentName: string,
        followupIntentInfoList: Array<Intent.FollowupIntentInfo.AsObject>,
        nextPageToken: string,
        domainName: string,
        isStartOfDeviation: boolean,
        isEndOfDeviation: boolean,
        trainingPhraseCount: number,
        status: Intent.IntentStatus,
    }


    export class TrainingPhrase extends jspb.Message { 
        getName(): string;
        setName(value: string): TrainingPhrase;
        getType(): Intent.TrainingPhrase.Type;
        setType(value: Intent.TrainingPhrase.Type): TrainingPhrase;
        getText(): string;
        setText(value: string): TrainingPhrase;
        clearEntitiesList(): void;
        getEntitiesList(): Array<Intent.TrainingPhrase.Entity>;
        setEntitiesList(value: Array<Intent.TrainingPhrase.Entity>): TrainingPhrase;
        addEntities(value?: Intent.TrainingPhrase.Entity, index?: number): Intent.TrainingPhrase.Entity;
        getTimesAddedCount(): number;
        setTimesAddedCount(value: number): TrainingPhrase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TrainingPhrase.AsObject;
        static toObject(includeInstance: boolean, msg: TrainingPhrase): TrainingPhrase.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TrainingPhrase, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TrainingPhrase;
        static deserializeBinaryFromReader(message: TrainingPhrase, reader: jspb.BinaryReader): TrainingPhrase;
    }

    export namespace TrainingPhrase {
        export type AsObject = {
            name: string,
            type: Intent.TrainingPhrase.Type,
            text: string,
            entitiesList: Array<Intent.TrainingPhrase.Entity.AsObject>,
            timesAddedCount: number,
        }


        export class Entity extends jspb.Message { 
            getEntityTypeName(): string;
            setEntityTypeName(value: string): Entity;
            getEntityTypeDisplayName(): string;
            setEntityTypeDisplayName(value: string): Entity;
            getEntityValueName(): string;
            setEntityValueName(value: string): Entity;
            getEntityValueDisplayName(): string;
            setEntityValueDisplayName(value: string): Entity;
            getStart(): number;
            setStart(value: number): Entity;
            getEnd(): number;
            setEnd(value: number): Entity;
            getParameterName(): string;
            setParameterName(value: string): Entity;
            getParameterDisplayName(): string;
            setParameterDisplayName(value: string): Entity;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Entity.AsObject;
            static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Entity;
            static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
        }

        export namespace Entity {
            export type AsObject = {
                entityTypeName: string,
                entityTypeDisplayName: string,
                entityValueName: string,
                entityValueDisplayName: string,
                start: number,
                end: number,
                parameterName: string,
                parameterDisplayName: string,
            }
        }


        export enum Type {
    TYPE_UNSPECIFIED = 0,
    EXAMPLE = 1,
    TEMPLATE = 2,
        }

    }

    export class Parameter extends jspb.Message { 
        getName(): string;
        setName(value: string): Parameter;
        getDisplayName(): string;
        setDisplayName(value: string): Parameter;
        getValue(): string;
        setValue(value: string): Parameter;
        getDefaultValue(): string;
        setDefaultValue(value: string): Parameter;
        getEntityTypeName(): string;
        setEntityTypeName(value: string): Parameter;
        getEntityTypeDisplayName(): string;
        setEntityTypeDisplayName(value: string): Parameter;
        getMandatory(): boolean;
        setMandatory(value: boolean): Parameter;
        clearPromptsList(): void;
        getPromptsList(): Array<string>;
        setPromptsList(value: Array<string>): Parameter;
        addPrompts(value: string, index?: number): string;
        getIsList(): boolean;
        setIsList(value: boolean): Parameter;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Parameter.AsObject;
        static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Parameter;
        static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
    }

    export namespace Parameter {
        export type AsObject = {
            name: string,
            displayName: string,
            value: string,
            defaultValue: string,
            entityTypeName: string,
            entityTypeDisplayName: string,
            mandatory: boolean,
            promptsList: Array<string>,
            isList: boolean,
        }
    }

    export class Message extends jspb.Message { 

        hasText(): boolean;
        clearText(): void;
        getText(): Intent.Message.Text | undefined;
        setText(value?: Intent.Message.Text): Message;

        hasImage(): boolean;
        clearImage(): void;
        getImage(): Intent.Message.Image | undefined;
        setImage(value?: Intent.Message.Image): Message;

        hasQuickReplies(): boolean;
        clearQuickReplies(): void;
        getQuickReplies(): Intent.Message.QuickReplies | undefined;
        setQuickReplies(value?: Intent.Message.QuickReplies): Message;

        hasCard(): boolean;
        clearCard(): void;
        getCard(): Intent.Message.Card | undefined;
        setCard(value?: Intent.Message.Card): Message;

        hasPayload(): boolean;
        clearPayload(): void;
        getPayload(): google_protobuf_struct_pb.Struct | undefined;
        setPayload(value?: google_protobuf_struct_pb.Struct): Message;

        hasSimpleResponses(): boolean;
        clearSimpleResponses(): void;
        getSimpleResponses(): Intent.Message.SimpleResponses | undefined;
        setSimpleResponses(value?: Intent.Message.SimpleResponses): Message;

        hasBasicCard(): boolean;
        clearBasicCard(): void;
        getBasicCard(): Intent.Message.BasicCard | undefined;
        setBasicCard(value?: Intent.Message.BasicCard): Message;

        hasSuggestions(): boolean;
        clearSuggestions(): void;
        getSuggestions(): Intent.Message.Suggestions | undefined;
        setSuggestions(value?: Intent.Message.Suggestions): Message;

        hasLinkOutSuggestion(): boolean;
        clearLinkOutSuggestion(): void;
        getLinkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined;
        setLinkOutSuggestion(value?: Intent.Message.LinkOutSuggestion): Message;

        hasListSelect(): boolean;
        clearListSelect(): void;
        getListSelect(): Intent.Message.ListSelect | undefined;
        setListSelect(value?: Intent.Message.ListSelect): Message;

        hasCarouselSelect(): boolean;
        clearCarouselSelect(): void;
        getCarouselSelect(): Intent.Message.CarouselSelect | undefined;
        setCarouselSelect(value?: Intent.Message.CarouselSelect): Message;

        hasHtmlText(): boolean;
        clearHtmlText(): void;
        getHtmlText(): Intent.Message.HTMLText | undefined;
        setHtmlText(value?: Intent.Message.HTMLText): Message;

        hasVideo(): boolean;
        clearVideo(): void;
        getVideo(): Intent.Message.Video | undefined;
        setVideo(value?: Intent.Message.Video): Message;

        hasAudio(): boolean;
        clearAudio(): void;
        getAudio(): Intent.Message.Audio | undefined;
        setAudio(value?: Intent.Message.Audio): Message;
        getPlatform(): Intent.Message.Platform;
        setPlatform(value: Intent.Message.Platform): Message;

        getMessageCase(): Message.MessageCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Message.AsObject;
        static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Message;
        static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
    }

    export namespace Message {
        export type AsObject = {
            text?: Intent.Message.Text.AsObject,
            image?: Intent.Message.Image.AsObject,
            quickReplies?: Intent.Message.QuickReplies.AsObject,
            card?: Intent.Message.Card.AsObject,
            payload?: google_protobuf_struct_pb.Struct.AsObject,
            simpleResponses?: Intent.Message.SimpleResponses.AsObject,
            basicCard?: Intent.Message.BasicCard.AsObject,
            suggestions?: Intent.Message.Suggestions.AsObject,
            linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject,
            listSelect?: Intent.Message.ListSelect.AsObject,
            carouselSelect?: Intent.Message.CarouselSelect.AsObject,
            htmlText?: Intent.Message.HTMLText.AsObject,
            video?: Intent.Message.Video.AsObject,
            audio?: Intent.Message.Audio.AsObject,
            platform: Intent.Message.Platform,
        }


        export class Text extends jspb.Message { 
            clearTextList(): void;
            getTextList(): Array<string>;
            setTextList(value: Array<string>): Text;
            addText(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Text.AsObject;
            static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Text;
            static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
        }

        export namespace Text {
            export type AsObject = {
                textList: Array<string>,
            }
        }

        export class Image extends jspb.Message { 
            getImageUri(): string;
            setImageUri(value: string): Image;
            getAccessibilityText(): string;
            setAccessibilityText(value: string): Image;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Image.AsObject;
            static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Image;
            static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
        }

        export namespace Image {
            export type AsObject = {
                imageUri: string,
                accessibilityText: string,
            }
        }

        export class QuickReplies extends jspb.Message { 
            getTitle(): string;
            setTitle(value: string): QuickReplies;
            clearQuickRepliesList(): void;
            getQuickRepliesList(): Array<string>;
            setQuickRepliesList(value: Array<string>): QuickReplies;
            addQuickReplies(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): QuickReplies.AsObject;
            static toObject(includeInstance: boolean, msg: QuickReplies): QuickReplies.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: QuickReplies, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): QuickReplies;
            static deserializeBinaryFromReader(message: QuickReplies, reader: jspb.BinaryReader): QuickReplies;
        }

        export namespace QuickReplies {
            export type AsObject = {
                title: string,
                quickRepliesList: Array<string>,
            }
        }

        export class Card extends jspb.Message { 
            getTitle(): string;
            setTitle(value: string): Card;
            getSubtitle(): string;
            setSubtitle(value: string): Card;
            getImageUri(): string;
            setImageUri(value: string): Card;
            clearButtonsList(): void;
            getButtonsList(): Array<Intent.Message.Card.Button>;
            setButtonsList(value: Array<Intent.Message.Card.Button>): Card;
            addButtons(value?: Intent.Message.Card.Button, index?: number): Intent.Message.Card.Button;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Card.AsObject;
            static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Card;
            static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
        }

        export namespace Card {
            export type AsObject = {
                title: string,
                subtitle: string,
                imageUri: string,
                buttonsList: Array<Intent.Message.Card.Button.AsObject>,
            }


            export class Button extends jspb.Message { 
                getText(): string;
                setText(value: string): Button;
                getPostback(): string;
                setPostback(value: string): Button;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Button.AsObject;
                static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Button;
                static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
            }

            export namespace Button {
                export type AsObject = {
                    text: string,
                    postback: string,
                }
            }

        }

        export class SimpleResponse extends jspb.Message { 
            getTextToSpeech(): string;
            setTextToSpeech(value: string): SimpleResponse;
            getSsml(): string;
            setSsml(value: string): SimpleResponse;
            getDisplayText(): string;
            setDisplayText(value: string): SimpleResponse;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SimpleResponse.AsObject;
            static toObject(includeInstance: boolean, msg: SimpleResponse): SimpleResponse.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SimpleResponse, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SimpleResponse;
            static deserializeBinaryFromReader(message: SimpleResponse, reader: jspb.BinaryReader): SimpleResponse;
        }

        export namespace SimpleResponse {
            export type AsObject = {
                textToSpeech: string,
                ssml: string,
                displayText: string,
            }
        }

        export class SimpleResponses extends jspb.Message { 
            clearSimpleResponsesList(): void;
            getSimpleResponsesList(): Array<Intent.Message.SimpleResponse>;
            setSimpleResponsesList(value: Array<Intent.Message.SimpleResponse>): SimpleResponses;
            addSimpleResponses(value?: Intent.Message.SimpleResponse, index?: number): Intent.Message.SimpleResponse;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SimpleResponses.AsObject;
            static toObject(includeInstance: boolean, msg: SimpleResponses): SimpleResponses.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SimpleResponses, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SimpleResponses;
            static deserializeBinaryFromReader(message: SimpleResponses, reader: jspb.BinaryReader): SimpleResponses;
        }

        export namespace SimpleResponses {
            export type AsObject = {
                simpleResponsesList: Array<Intent.Message.SimpleResponse.AsObject>,
            }
        }

        export class BasicCard extends jspb.Message { 
            getTitle(): string;
            setTitle(value: string): BasicCard;
            getSubtitle(): string;
            setSubtitle(value: string): BasicCard;
            getFormattedText(): string;
            setFormattedText(value: string): BasicCard;

            hasImage(): boolean;
            clearImage(): void;
            getImage(): Intent.Message.Image | undefined;
            setImage(value?: Intent.Message.Image): BasicCard;
            clearButtonsList(): void;
            getButtonsList(): Array<Intent.Message.BasicCard.Button>;
            setButtonsList(value: Array<Intent.Message.BasicCard.Button>): BasicCard;
            addButtons(value?: Intent.Message.BasicCard.Button, index?: number): Intent.Message.BasicCard.Button;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): BasicCard.AsObject;
            static toObject(includeInstance: boolean, msg: BasicCard): BasicCard.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: BasicCard, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): BasicCard;
            static deserializeBinaryFromReader(message: BasicCard, reader: jspb.BinaryReader): BasicCard;
        }

        export namespace BasicCard {
            export type AsObject = {
                title: string,
                subtitle: string,
                formattedText: string,
                image?: Intent.Message.Image.AsObject,
                buttonsList: Array<Intent.Message.BasicCard.Button.AsObject>,
            }


            export class Button extends jspb.Message { 
                getTitle(): string;
                setTitle(value: string): Button;

                hasOpenUriAction(): boolean;
                clearOpenUriAction(): void;
                getOpenUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
                setOpenUriAction(value?: Intent.Message.BasicCard.Button.OpenUriAction): Button;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Button.AsObject;
                static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Button;
                static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
            }

            export namespace Button {
                export type AsObject = {
                    title: string,
                    openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject,
                }


                export class OpenUriAction extends jspb.Message { 
                    getUri(): string;
                    setUri(value: string): OpenUriAction;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): OpenUriAction.AsObject;
                    static toObject(includeInstance: boolean, msg: OpenUriAction): OpenUriAction.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: OpenUriAction, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): OpenUriAction;
                    static deserializeBinaryFromReader(message: OpenUriAction, reader: jspb.BinaryReader): OpenUriAction;
                }

                export namespace OpenUriAction {
                    export type AsObject = {
                        uri: string,
                    }
                }

            }

        }

        export class Suggestion extends jspb.Message { 
            getTitle(): string;
            setTitle(value: string): Suggestion;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Suggestion.AsObject;
            static toObject(includeInstance: boolean, msg: Suggestion): Suggestion.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Suggestion, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Suggestion;
            static deserializeBinaryFromReader(message: Suggestion, reader: jspb.BinaryReader): Suggestion;
        }

        export namespace Suggestion {
            export type AsObject = {
                title: string,
            }
        }

        export class Suggestions extends jspb.Message { 
            clearSuggestionsList(): void;
            getSuggestionsList(): Array<Intent.Message.Suggestion>;
            setSuggestionsList(value: Array<Intent.Message.Suggestion>): Suggestions;
            addSuggestions(value?: Intent.Message.Suggestion, index?: number): Intent.Message.Suggestion;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Suggestions.AsObject;
            static toObject(includeInstance: boolean, msg: Suggestions): Suggestions.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Suggestions, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Suggestions;
            static deserializeBinaryFromReader(message: Suggestions, reader: jspb.BinaryReader): Suggestions;
        }

        export namespace Suggestions {
            export type AsObject = {
                suggestionsList: Array<Intent.Message.Suggestion.AsObject>,
            }
        }

        export class LinkOutSuggestion extends jspb.Message { 
            getDestinationName(): string;
            setDestinationName(value: string): LinkOutSuggestion;
            getUri(): string;
            setUri(value: string): LinkOutSuggestion;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LinkOutSuggestion.AsObject;
            static toObject(includeInstance: boolean, msg: LinkOutSuggestion): LinkOutSuggestion.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LinkOutSuggestion, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LinkOutSuggestion;
            static deserializeBinaryFromReader(message: LinkOutSuggestion, reader: jspb.BinaryReader): LinkOutSuggestion;
        }

        export namespace LinkOutSuggestion {
            export type AsObject = {
                destinationName: string,
                uri: string,
            }
        }

        export class ListSelect extends jspb.Message { 
            getTitle(): string;
            setTitle(value: string): ListSelect;
            clearItemsList(): void;
            getItemsList(): Array<Intent.Message.ListSelect.Item>;
            setItemsList(value: Array<Intent.Message.ListSelect.Item>): ListSelect;
            addItems(value?: Intent.Message.ListSelect.Item, index?: number): Intent.Message.ListSelect.Item;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ListSelect.AsObject;
            static toObject(includeInstance: boolean, msg: ListSelect): ListSelect.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ListSelect, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ListSelect;
            static deserializeBinaryFromReader(message: ListSelect, reader: jspb.BinaryReader): ListSelect;
        }

        export namespace ListSelect {
            export type AsObject = {
                title: string,
                itemsList: Array<Intent.Message.ListSelect.Item.AsObject>,
            }


            export class Item extends jspb.Message { 

                hasInfo(): boolean;
                clearInfo(): void;
                getInfo(): Intent.Message.SelectItemInfo | undefined;
                setInfo(value?: Intent.Message.SelectItemInfo): Item;
                getTitle(): string;
                setTitle(value: string): Item;
                getDescription(): string;
                setDescription(value: string): Item;

                hasImage(): boolean;
                clearImage(): void;
                getImage(): Intent.Message.Image | undefined;
                setImage(value?: Intent.Message.Image): Item;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Item.AsObject;
                static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Item;
                static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
            }

            export namespace Item {
                export type AsObject = {
                    info?: Intent.Message.SelectItemInfo.AsObject,
                    title: string,
                    description: string,
                    image?: Intent.Message.Image.AsObject,
                }
            }

        }

        export class CarouselSelect extends jspb.Message { 
            clearItemsList(): void;
            getItemsList(): Array<Intent.Message.CarouselSelect.Item>;
            setItemsList(value: Array<Intent.Message.CarouselSelect.Item>): CarouselSelect;
            addItems(value?: Intent.Message.CarouselSelect.Item, index?: number): Intent.Message.CarouselSelect.Item;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CarouselSelect.AsObject;
            static toObject(includeInstance: boolean, msg: CarouselSelect): CarouselSelect.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CarouselSelect, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CarouselSelect;
            static deserializeBinaryFromReader(message: CarouselSelect, reader: jspb.BinaryReader): CarouselSelect;
        }

        export namespace CarouselSelect {
            export type AsObject = {
                itemsList: Array<Intent.Message.CarouselSelect.Item.AsObject>,
            }


            export class Item extends jspb.Message { 

                hasInfo(): boolean;
                clearInfo(): void;
                getInfo(): Intent.Message.SelectItemInfo | undefined;
                setInfo(value?: Intent.Message.SelectItemInfo): Item;
                getTitle(): string;
                setTitle(value: string): Item;
                getDescription(): string;
                setDescription(value: string): Item;

                hasImage(): boolean;
                clearImage(): void;
                getImage(): Intent.Message.Image | undefined;
                setImage(value?: Intent.Message.Image): Item;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Item.AsObject;
                static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Item;
                static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
            }

            export namespace Item {
                export type AsObject = {
                    info?: Intent.Message.SelectItemInfo.AsObject,
                    title: string,
                    description: string,
                    image?: Intent.Message.Image.AsObject,
                }
            }

        }

        export class HTMLText extends jspb.Message { 
            clearTextList(): void;
            getTextList(): Array<string>;
            setTextList(value: Array<string>): HTMLText;
            addText(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): HTMLText.AsObject;
            static toObject(includeInstance: boolean, msg: HTMLText): HTMLText.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: HTMLText, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): HTMLText;
            static deserializeBinaryFromReader(message: HTMLText, reader: jspb.BinaryReader): HTMLText;
        }

        export namespace HTMLText {
            export type AsObject = {
                textList: Array<string>,
            }
        }

        export class Video extends jspb.Message { 
            getUri(): string;
            setUri(value: string): Video;
            getAccessibilityText(): string;
            setAccessibilityText(value: string): Video;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Video.AsObject;
            static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Video;
            static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
        }

        export namespace Video {
            export type AsObject = {
                uri: string,
                accessibilityText: string,
            }
        }

        export class Audio extends jspb.Message { 
            getUri(): string;
            setUri(value: string): Audio;
            getAccessibilityText(): string;
            setAccessibilityText(value: string): Audio;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Audio.AsObject;
            static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Audio;
            static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
        }

        export namespace Audio {
            export type AsObject = {
                uri: string,
                accessibilityText: string,
            }
        }

        export class SelectItemInfo extends jspb.Message { 
            getKey(): string;
            setKey(value: string): SelectItemInfo;
            clearSynonymsList(): void;
            getSynonymsList(): Array<string>;
            setSynonymsList(value: Array<string>): SelectItemInfo;
            addSynonyms(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SelectItemInfo.AsObject;
            static toObject(includeInstance: boolean, msg: SelectItemInfo): SelectItemInfo.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SelectItemInfo, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SelectItemInfo;
            static deserializeBinaryFromReader(message: SelectItemInfo, reader: jspb.BinaryReader): SelectItemInfo;
        }

        export namespace SelectItemInfo {
            export type AsObject = {
                key: string,
                synonymsList: Array<string>,
            }
        }


        export enum Platform {
    PLATFORM_UNSPECIFIED = 0,
    FACEBOOK = 1,
    SLACK = 2,
    TELEGRAM = 3,
    KIK = 4,
    SKYPE = 5,
    LINE = 6,
    VIBER = 7,
    ACTIONS_ON_GOOGLE = 8,
        }


        export enum MessageCase {
            MESSAGE_NOT_SET = 0,
            TEXT = 1,
            IMAGE = 2,
            QUICK_REPLIES = 3,
            CARD = 4,
            PAYLOAD = 5,
            SIMPLE_RESPONSES = 7,
            BASIC_CARD = 8,
            SUGGESTIONS = 9,
            LINK_OUT_SUGGESTION = 10,
            LIST_SELECT = 11,
            CAROUSEL_SELECT = 12,
            HTML_TEXT = 13,
            VIDEO = 14,
            AUDIO = 15,
        }

    }

    export class FollowupIntentInfo extends jspb.Message { 
        getFollowupIntentName(): string;
        setFollowupIntentName(value: string): FollowupIntentInfo;
        getParentFollowupIntentName(): string;
        setParentFollowupIntentName(value: string): FollowupIntentInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FollowupIntentInfo.AsObject;
        static toObject(includeInstance: boolean, msg: FollowupIntentInfo): FollowupIntentInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FollowupIntentInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FollowupIntentInfo;
        static deserializeBinaryFromReader(message: FollowupIntentInfo, reader: jspb.BinaryReader): FollowupIntentInfo;
    }

    export namespace FollowupIntentInfo {
        export type AsObject = {
            followupIntentName: string,
            parentFollowupIntentName: string,
        }
    }


    export enum IntentStatus {
    ACTIVE = 0,
    INACTIVE = 1,
    }

    export enum WebhookState {
    WEBHOOK_STATE_UNSPECIFIED = 0,
    WEBHOOK_STATE_ENABLED = 1,
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2,
    }

}

export class ListIntentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListIntentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListIntentsRequest;
    getIntentView(): IntentView;
    setIntentView(value: IntentView): ListIntentsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListIntentsRequest;
    getFilterByCategory(): IntentCategory;
    setFilterByCategory(value: IntentCategory): ListIntentsRequest;

    hasSortByField(): boolean;
    clearSortByField(): void;
    getSortByField(): IntentSorting | undefined;
    setSortByField(value?: IntentSorting): ListIntentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIntentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIntentsRequest): ListIntentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIntentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIntentsRequest;
    static deserializeBinaryFromReader(message: ListIntentsRequest, reader: jspb.BinaryReader): ListIntentsRequest;
}

export namespace ListIntentsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        intentView: IntentView,
        pageToken: string,
        filterByCategory: IntentCategory,
        sortByField?: IntentSorting.AsObject,
    }
}

export class ListIntentsResponse extends jspb.Message { 
    clearIntentsList(): void;
    getIntentsList(): Array<Intent>;
    setIntentsList(value: Array<Intent>): ListIntentsResponse;
    addIntents(value?: Intent, index?: number): Intent;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListIntentsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIntentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIntentsResponse): ListIntentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIntentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIntentsResponse;
    static deserializeBinaryFromReader(message: ListIntentsResponse, reader: jspb.BinaryReader): ListIntentsResponse;
}

export namespace ListIntentsResponse {
    export type AsObject = {
        intentsList: Array<Intent.AsObject>,
        nextPageToken: string,
    }
}

export class GetIntentRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetIntentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetIntentRequest;
    getIntentView(): IntentView;
    setIntentView(value: IntentView): GetIntentRequest;
    getPageToken(): string;
    setPageToken(value: string): GetIntentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIntentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIntentRequest): GetIntentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIntentRequest;
    static deserializeBinaryFromReader(message: GetIntentRequest, reader: jspb.BinaryReader): GetIntentRequest;
}

export namespace GetIntentRequest {
    export type AsObject = {
        name: string,
        languageCode: string,
        intentView: IntentView,
        pageToken: string,
    }
}

export class CreateIntentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateIntentRequest;

    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): Intent | undefined;
    setIntent(value?: Intent): CreateIntentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): CreateIntentRequest;
    getIntentView(): IntentView;
    setIntentView(value: IntentView): CreateIntentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIntentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIntentRequest): CreateIntentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIntentRequest;
    static deserializeBinaryFromReader(message: CreateIntentRequest, reader: jspb.BinaryReader): CreateIntentRequest;
}

export namespace CreateIntentRequest {
    export type AsObject = {
        parent: string,
        intent?: Intent.AsObject,
        languageCode: string,
        intentView: IntentView,
    }
}

export class UpdateIntentRequest extends jspb.Message { 

    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): Intent | undefined;
    setIntent(value?: Intent): UpdateIntentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): UpdateIntentRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIntentRequest;
    getIntentView(): IntentView;
    setIntentView(value: IntentView): UpdateIntentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateIntentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateIntentRequest): UpdateIntentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateIntentRequest;
    static deserializeBinaryFromReader(message: UpdateIntentRequest, reader: jspb.BinaryReader): UpdateIntentRequest;
}

export namespace UpdateIntentRequest {
    export type AsObject = {
        intent?: Intent.AsObject,
        languageCode: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        intentView: IntentView,
    }
}

export class DeleteIntentRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteIntentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteIntentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteIntentRequest): DeleteIntentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteIntentRequest;
    static deserializeBinaryFromReader(message: DeleteIntentRequest, reader: jspb.BinaryReader): DeleteIntentRequest;
}

export namespace DeleteIntentRequest {
    export type AsObject = {
        name: string,
    }
}

export class BatchUpdateIntentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): BatchUpdateIntentsRequest;

    hasIntentBatchUri(): boolean;
    clearIntentBatchUri(): void;
    getIntentBatchUri(): string;
    setIntentBatchUri(value: string): BatchUpdateIntentsRequest;

    hasIntentBatchInline(): boolean;
    clearIntentBatchInline(): void;
    getIntentBatchInline(): IntentBatch | undefined;
    setIntentBatchInline(value?: IntentBatch): BatchUpdateIntentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): BatchUpdateIntentsRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchUpdateIntentsRequest;
    getIntentView(): IntentView;
    setIntentView(value: IntentView): BatchUpdateIntentsRequest;

    getIntentBatchCase(): BatchUpdateIntentsRequest.IntentBatchCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateIntentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateIntentsRequest): BatchUpdateIntentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateIntentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsRequest;
    static deserializeBinaryFromReader(message: BatchUpdateIntentsRequest, reader: jspb.BinaryReader): BatchUpdateIntentsRequest;
}

export namespace BatchUpdateIntentsRequest {
    export type AsObject = {
        parent: string,
        intentBatchUri: string,
        intentBatchInline?: IntentBatch.AsObject,
        languageCode: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        intentView: IntentView,
    }

    export enum IntentBatchCase {
        INTENT_BATCH_NOT_SET = 0,
        INTENT_BATCH_URI = 2,
        INTENT_BATCH_INLINE = 3,
    }

}

export class BatchUpdateIntentsResponse extends jspb.Message { 
    clearIntentsList(): void;
    getIntentsList(): Array<Intent>;
    setIntentsList(value: Array<Intent>): BatchUpdateIntentsResponse;
    addIntents(value?: Intent, index?: number): Intent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateIntentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateIntentsResponse): BatchUpdateIntentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateIntentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsResponse;
    static deserializeBinaryFromReader(message: BatchUpdateIntentsResponse, reader: jspb.BinaryReader): BatchUpdateIntentsResponse;
}

export namespace BatchUpdateIntentsResponse {
    export type AsObject = {
        intentsList: Array<Intent.AsObject>,
    }
}

export class BatchDeleteIntentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): BatchDeleteIntentsRequest;
    clearIntentsList(): void;
    getIntentsList(): Array<Intent>;
    setIntentsList(value: Array<Intent>): BatchDeleteIntentsRequest;
    addIntents(value?: Intent, index?: number): Intent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteIntentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteIntentsRequest): BatchDeleteIntentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteIntentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteIntentsRequest;
    static deserializeBinaryFromReader(message: BatchDeleteIntentsRequest, reader: jspb.BinaryReader): BatchDeleteIntentsRequest;
}

export namespace BatchDeleteIntentsRequest {
    export type AsObject = {
        parent: string,
        intentsList: Array<Intent.AsObject>,
    }
}

export class IntentBatch extends jspb.Message { 
    clearIntentsList(): void;
    getIntentsList(): Array<Intent>;
    setIntentsList(value: Array<Intent>): IntentBatch;
    addIntents(value?: Intent, index?: number): Intent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentBatch.AsObject;
    static toObject(includeInstance: boolean, msg: IntentBatch): IntentBatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentBatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentBatch;
    static deserializeBinaryFromReader(message: IntentBatch, reader: jspb.BinaryReader): IntentBatch;
}

export namespace IntentBatch {
    export type AsObject = {
        intentsList: Array<Intent.AsObject>,
    }
}

export class IntentSorting extends jspb.Message { 
    getSortingField(): IntentSorting.IntentSortingField;
    setSortingField(value: IntentSorting.IntentSortingField): IntentSorting;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): IntentSorting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentSorting.AsObject;
    static toObject(includeInstance: boolean, msg: IntentSorting): IntentSorting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentSorting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentSorting;
    static deserializeBinaryFromReader(message: IntentSorting, reader: jspb.BinaryReader): IntentSorting;
}

export namespace IntentSorting {
    export type AsObject = {
        sortingField: IntentSorting.IntentSortingField,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
    }

    export enum IntentSortingField {
    NO_INTENT_SORTING = 0,
    SORT_INTENT_BY_NAME = 1,
    SORT_INTENT_BY_CREATION_DATE = 2,
    SORT_INTENT_BY_LAST_UPDATED = 3,
    SORT_INTENT_BY_USERSAYS_COUNT = 4,
    }

}

export enum IntentView {
    INTENT_VIEW_UNSPECIFIED = 0,
    INTENT_VIEW_FULL = 1,
    INTENT_VIEW_PARTIAL = 2,
    INTENT_VIEW_SHALLOW = 3,
}

export enum IntentCategory {
    ALL_INTENTS = 0,
    DEFAULT_INTENTS = 1,
    USER_DEFINED_INTENTS = 2,
}
