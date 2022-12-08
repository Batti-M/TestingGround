import {BaseButton,GoogleSignInButton,InvertedButton} from "./button.styles.jsx"

export const BUTTON_TYPE_CLASSES  = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted"
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base):string => (
{
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType])

type ButtonProps = {
    children: string,
    buttonType: string,

}
const Button = ({children,buttonType, ...props}:ButtonProps) => {
    const CustomButton = getButton(buttonType)

    return(
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}

export default Button