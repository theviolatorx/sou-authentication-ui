import React from 'react';
import { Form, Field } from 'formik';
import MaskedInput from "react-text-mask";

const FormStep3 = props => {
    const { isSubmitting, errors, handleChange, handleSubmit, handlePrev,touched } = props;
    return (
        <div className="main_content_register_user_form">
            <Form>
                <div className="flex">
                    <div className="flex-1">
                        <label htmlFor="name_depentente">Nome</label>
                        <Field name="name_depentente" />
                    </div>

                </div>

                <div className="flex">
                    <div className="flex-4">
                        <label htmlFor="tipo">Tipo</label>
                        <Field component='select' name='tipo' id='tipo'>
                            <option value=''>-</option>
                            <option value='1'>Tipo 1</option>
                            <option value='2'>Tipo 2</option>
                        </Field>

                    </div>
                    <div className="flex-4">
                        <label htmlFor="birth_date">Data de Nascimento:</label>
                        <Field name="birthdate" render={({ field }) => {
                            return <MaskedInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                {...field}
                                id='birthdate'
                                placeholder={'Nascimento'} />
                        }} />
                    </div>


                    <div className="flex-4">
                        <label htmlFor="cpf">CPF (somente números)</label>
                        <Field name="cpf" render={({ field }) => {
                            return <MaskedInput mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                {...field}
                                id='cpf'
                                placeholder={'CPF'} />
                        }} />
                    </div>
                    <div className="flex-5">
                        <div className="main_header_user_icons">
                            <span className="icon-plus-circle"> Adicionar outro Dependente </span>
                        </div>
                    </div>
                    <h2>Filiação</h2>


                    <div className="flex-1">
                        <label htmlFor="name_filiacao">Nome</label>
                        <Field name="name_filiacao" />
                    </div>

                    <div className="flex-4">
                        <label htmlFor="tipo_filiacao">Tipo</label>
                        <Field component='select' name='tipo_filiacao' id='tipo_filiacao'>
                            <option value=''>-</option>
                            <option value='1'>Tipo 1</option>
                            <option value='2'>Tipo 2</option>
                        </Field>
                    </div>


                    <div className="flex-4">
                        <label htmlFor="birthdate2">Data de Nascimento:</label>
                        <Field name="birthdate2" render={({ field }) => {
                            return <MaskedInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                {...field}
                                id='birthdate2'
                                placeholder={'Nascimento'} />
                        }} />
                    </div>

                    <div className="flex-4">
                        <label htmlFor="sexo">Sexo</label>
                        <Field component='select' name='sexo' id='sexo'>
                            <option value=''>-</option>
                            <option value='M'>Masculino</option>
                            <option value='F'>Femenino</option>
                        </Field>
                    </div>

                    <div className="flex-5">
                        <div className="main_header_user_icons">
                            <span className="icon-plus-circle"> Adicionar outro Dependente </span>
                        </div>
                    </div>


                </div>
                <div className="main_content_register_user_form_btn">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="main_content_form_register_btn"
                    >
                        Voltar
                        </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="main_content_form_register_btn"
                    >
                        Próximo
                        </button>
                </div>



            </Form>
        </div>
    )
}

export default FormStep3;