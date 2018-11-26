import React from 'react';
import { Form, Field } from 'formik';
import MaskedInput from "react-text-mask";

const FormStep1 = props => {
  const { isSubmitting, errors, handleChange, handleSubmit, touched } = props;
  return (
    <div className="main_content_register_user_form">
      <Form>
        <div className="flex">
          <div className="flex-2">
            <label htmlFor="name">Nome</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
          </div>
          <div className="flex-2">
            <label htmlFor="lastName">Sobrenome</label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <label htmlFor="social_name">Nome Social</label>
            <Field name="social_name" />
            {errors.social_name && touched.social_name ? <div>{errors.social_name}</div> : null}
          </div>
        </div>

        <div className="flex">
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
            <label htmlFor="gender">Sexo</label>
            <Field component='select' name='gender' id='gender'>
              <option value=''>-</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Field>
          </div>


          <div className="flex-4">
            <label htmlFor="gender">Naturalidade</label>
            <Field component='select' name='place_of_birth' id='place_of_birth'>
              <option value=''>-</option>
              <option value='male'>Brasileiro</option>
              <option value='female'>Outros</option>
            </Field>
          </div>

          <div className="flex-4">
            <label htmlFor="nationality">Nacionalidade</label>
            <Field component='select' name='nationality' id='nationality'>
              <option value=''>-</option>
              <option value='male'>Brasileiro</option>
              <option value='female'>Outros</option>
            </Field>
          </div>

        </div>


        <div className="flex">
          <div className="flex-4">
            <label htmlFor="cpf">CPF:</label>
            <Field name="cpf" render={({ field }) => {
              return <MaskedInput mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                {...field}
                id='cpf'
                placeholder={'CPF'} />
            }} />
          </div>

          <div className="flex-4">
            <label htmlFor="nationality">Raça</label>
            <Field component='select' name='raca' id='raca'>
              <option value=''>-</option>
              <option value='male'>Pardo</option>
              <option value='female'>Outros</option>
            </Field>
          </div>


          <div className="flex-4">
            <label htmlFor="marital_status">Estado Cívil</label>
            <Field component='select' name='marital_status' id='marital_status'>
              <option value=''>-</option>
              <option value='male'>Solteiro(a)</option>
              <option value='female'>Casado(a)</option>
              <option value="Divorciado(a)">Divorciado(a)</option>
              <option value="União Estável">União Estável</option>
            </Field>
          </div>

          <div className="flex-4">
            <label htmlFor="blood_type">Tipo de Sangue</label>
            <Field name="blood_type" />
          </div>

          <div className="flex-4">
            <label htmlFor="organ_donation">Doador de Orgãos?</label>
            <Field component='select' name='organ_donation' id='organ_donation'>
              <option value=''>-</option>
              <option value='Sim'>Sim</option>
              <option value='nao'>Não</option>
            </Field>
          </div>

        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="main_content_form_register_btn"
        >
          Próximo
        </button>
      </Form>
    </div>
  );
};

export default FormStep1;
