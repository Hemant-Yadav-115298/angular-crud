export class EmployeeModel {
    empId: number;
    name: string;
    email: string;
    contact: string;
    city: string;

    constructor() {
        this.empId = 0
        this.name = ""
        this.email = ""
        this.contact = ""
        this.city = ""
    }
}