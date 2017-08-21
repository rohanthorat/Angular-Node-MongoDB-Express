export class Message {
    content: string;
    username: string;
    messageId?; string;     //? indicates optional value
    userId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}