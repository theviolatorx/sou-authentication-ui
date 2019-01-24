import React from 'react';
import { Form, Field } from 'formik';
import MaskedInput from "react-text-mask";

const FormStep2 = props => {
    const { handleSubmit, handlePrev } = props;
    return (
        <div className="main_content_register_user_form">
            <Form>

                <div className="flex">
                    <div className="flex-4">
                        <label htmlFor="tipo_logradouro">Tipo Logradouro</label>
                        <Field component='select' name='tipo_logradouro' id='tipo_logradouro'>
                            <option value="Rua">Rua</option>
                            <option value="Avenida">Avenida</option>
                            <option value="Praça">Praça</option>
                        </Field>
                    </div>
                    <div className="flex-2">
                        <label htmlFor="logradouro">Logradouro</label>
                        <Field name="logradouro" id="logradouro" placeholder="Logradouro"/>
                    </div>
                    <div className="flex-4">
                        <label htmlFor="logradouro_numero">Número</label>
                        <Field name="logradouro_numero" id="logradouro_numero" placeholder="Número" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-4">
                        <label htmlFor="cep">CEP</label>
                        <Field name="cpf" render={({ field }) => {
                            return <MaskedInput mask={[/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                                {...field}
                                                id='cep'
                                                placeholder={'CEP'} />
                        }} />
                    </div>
                    <div className="flex-4">
                        <label htmlFor="bairro">Bairro</label>
                        <Field name="bairro" id="bairro" placeholder="Bairro"/>
                    </div>
                    <div className="flex-4">
                        <label htmlFor="cidade">Cidade</label>
                        <Field name="cidade" id="cidade" placeholder="Cidade"/>
                    </div>
                    <div className="flex-4">
                        <label htmlFor="complemento">Complemento</label>
                        <Field name="complemento" id="complemento" placeholder="Complemento"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <label htmlFor="uf">UF</label>
                        <Field component="select" name="uf" id="uf">
                            <option value="São Paulo">São Paulo</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                        </Field>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-4">
                        <label htmlFor="telefone">Telefone (somente números)</label>
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]}
                            className="form-control"
                            placeholder="Telefone"
                            guide={false}
                            id="telefone"
                            onBlur={() => {
                            }}
                            onChange={() => {
                            }}
                        />
                    </div>
                    <div className="flex-4">
                        <label htmlFor="tipo_telefone">Tipo</label>
                        <Field component="select" name="tipo_telefone" id="tipo_telefone">
                            <option value="Celular">Celular</option>
                            <option value="Residencial">Residencial</option>
                        </Field>
                    </div>
                    <div className="flex-4">
                        <label htmlFor="email">E-mail</label>
                        <Field name="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="flex-4">
                        <label htmlFor="tipo_email">Tipo</label>
                        <Field component="select" name="tipo_email" id="tipo_email">
                            <option value="Tipo de e-mail">Tipo de e-mail</option>
                        </Field>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-2">
                        <label htmlFor="cargo">Cargo</label>
                        <Field name="cargo" id="cargo" placeholder="Cargo"/>
                    </div>
                    <div className="flex-2">
                        <label htmlFor="area">Área</label>
                        <Field name="area" id="area" placeholder="Área"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-2">
                        <label htmlFor="primeiro_ctps">Primeiro emprego CTPS</label>
                        <Field name="primeiro_ctps" id="primeiro_ctps"
                               placeholder="Primeiro emprego CTPS"/>
                    </div>
                    <div className="flex-2">
                        <label htmlFor="primeiro_emprego_servidor">Primeiro emprego servidor</label>
                        <Field name="primeiro_emprego_servidor" id="primeiro_emprego_servidor"
                               placeholder="Primeiro emprego servidor"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="main_content_register_user_form_warning trigger trigger-error-out flex-2">
                        <span className="main_content_register_user_form_warning_warn icon-alert-1">
                            <p>Atenção: Preencher campos obrigatórios!</p>
                        </span>
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
    );
};

export default FormStep2;
