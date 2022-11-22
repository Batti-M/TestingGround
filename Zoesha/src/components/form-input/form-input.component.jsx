import "./form-input.styles.scss"

const FormInput = ({label,displayName, ...props}) => {
    return(
        <div className="group">
            <input
            className="form-input"
            {...props}
            />
            <label className={`${props.value.length > 0 ? "shrink" : ""} form-input-label`}>{label}</label>
        </div>
    )
}

export default FormInput