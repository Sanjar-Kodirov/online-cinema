import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined | any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
// export interface IUploadField {
// 	folder?: string
// 	image?: string
// 	onChange: (...event: any[]) => void
// 	placeholder: string
// 	error?: FieldError
// 	style?: CSSProperties
// 	isNoImage?: boolean
// }
