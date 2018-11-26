import React, {Component} from 'react';
import MaskedInput from "react-text-mask";

const FormStep3 = props => {
    const {
        isSubmitting,
        errors,
        handleChange,
        handleSubmit,
      } = props;
    return (
        <div>
            <label className="form-field" htmlFor="endereco">
                <span>Endereço:</span>
                <input
                name="endereco"
                type="text"
                onChange={handleChange}
                />
            </label>
            
            <button type="submit" onClick={handleSubmit}>
                {isSubmitting ? 'xxxx' : 'Next'}
            </button>
        </div>
    )
}

export default FormStep3;