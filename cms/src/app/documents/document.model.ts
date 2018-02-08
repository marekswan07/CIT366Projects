export class Document {
    public documentId: number;
    public name: string;
    public description: string;
    public docURL: string;
    public childern: any;

    constructor(documentId: number, name: string, description: string, docURL: string, childern: any) {
        this.documentId = documentId;
        this.name = name;
        this.description = description;
        this.docURL = docURL;
        this.childern = childern;
    }
}
