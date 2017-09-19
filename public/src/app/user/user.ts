export class User {
    constructor(
        public _id: number = Math.floor(Math.random() * 100),
        public first_name: string = "",
        public last_name: string = "",
        public email: string = "",
        public editable: boolean = false
    ) {

    }
}
