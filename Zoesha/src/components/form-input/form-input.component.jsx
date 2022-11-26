import {FormInputLabel, Input, Group} from "./form-input.styles.jsx"

const FormInput = ({label,displayName, ...props}) => {
    return(
        <Group>
            <Input
            {...props}
            />
            <FormInputLabel shrink={props.value.length} >
                {label}
           </FormInputLabel>
        </Group>
    )
}

export default FormInput