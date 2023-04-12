/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Font } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FontUpdateFormInputValues = {
    name?: string;
    url?: string;
    displayName?: string;
    format?: string;
};
export declare type FontUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
    format?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FontUpdateFormOverridesProps = {
    FontUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    format?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FontUpdateFormProps = React.PropsWithChildren<{
    overrides?: FontUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    font?: Font;
    onSubmit?: (fields: FontUpdateFormInputValues) => FontUpdateFormInputValues;
    onSuccess?: (fields: FontUpdateFormInputValues) => void;
    onError?: (fields: FontUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FontUpdateFormInputValues) => FontUpdateFormInputValues;
    onValidate?: FontUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FontUpdateForm(props: FontUpdateFormProps): React.ReactElement;
