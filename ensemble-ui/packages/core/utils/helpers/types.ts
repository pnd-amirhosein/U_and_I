export type Alert = {
    message: string,
    type: "danger" | "success"
}

export type Validation = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean | string;
};