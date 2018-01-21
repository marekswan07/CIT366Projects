export class Contact {
    public contactId: number;
    public name: string;
    public email: string;
    public phone: number;
    public imageUrl: string;
    // public group: [0] ;

    constructor (contactId: number, name: string, email: string, phone: number, imageUrl: string ) {
        this.contactId = contactId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
    }
}
