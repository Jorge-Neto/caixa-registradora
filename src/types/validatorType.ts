type ValidationRule = (val: string) => boolean | string
type Errors<Inputs> = Partial<{ [P in keyof Inputs]: string }>
type Validator = (val: string) => string | void
type MakeValidator = (msg?: string) => Validator
type MakeValidatorWithArg = (arg: unknown, msg?: string) => Validator

export type { ValidationRule, Errors, Validator, MakeValidator, MakeValidatorWithArg }
