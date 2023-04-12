/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FontCreateFormInputValues = {
    name?: string;
    url?: string;
    displayName?: string;
    format?: string;
};
export declare type FontCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
    format?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FontCreateFormOverridesProps = {
    FontCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    format?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FontCreateFormProps = React.PropsWithChildren<{
    overrides?: FontCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FontCreateFormInputValues) => FontCreateFormInputValues;
    onSuccess?: (fields: FontCreateFormInputValues) => void;
    onError?: (fields: FontCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FontCreateFormInputValues) => FontCreateFormInputValues;
    onValidate?: FontCreateFormValidationValues;
} & React.CSSProperties>;
export default function FontCreateForm(props: FontCreateFormProps): React.ReactElement;
