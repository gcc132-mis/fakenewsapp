export class UserModel {
    id: number;
    name: string;
    email: string;

    public constructor(data: any) {
        Object.assign(this, data);
    }
}
