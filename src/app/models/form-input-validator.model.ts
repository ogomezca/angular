export class FormInputValidator {

    public static isNumber(target) {
        const regex = new RegExp('^[0-9]+$');

        return regex.test(target);
    }

    public static isWordWithoutNum(target) {
        const regex =  new RegExp('^[a-zA-Z]+$');

        return regex.test(target);
    }

    public static isEmail(target) {
        const regex = new RegExp('^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$');

        return regex.test(target);
    }
}
