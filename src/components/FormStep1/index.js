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
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Sobrenome"
              onChange={handleChange}
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <label htmlFor="social_name">Nome Social</label>
            <input
              type="text"
              name="social_name"
              id="social_name"
              placeholder="Nome Social"
              onChange={handleChange}
            />
            {errors.social_name && touched.social_name ? <div>{errors.social_name}</div> : null}
          </div>
        </div>

        <div className="flex">
          <div className="flex-4">
            <label htmlFor="birth_date">Data de Nascimento:</label>
            <MaskedInput
              mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              placeholder="Nascimento"
              guide={false}
              id="birth_date"
              onBlur={() => {
              }}
            // onChange={}
            />


          </div>

          <div className="flex-4">
            <label htmlFor="gender">Sexo</label>
            <select name="gender" id="gender" onChange={handleChange}>
              <option value="Feminino">-</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Não Especificado">Não Especificado</option>
            </select>
            {errors.gender && touched.gender ? <div>{errors.gender}</div> : null}
          </div>
          <div className="flex-4">
            <label htmlFor="place_of_birth">Naturalidade</label>
            <select name="place_of_birth" id="place_of_birth" onChange={handleChange}>
              <option value="Brasileira">Brasileira</option>
              <option value="Brasileira">Brasileira</option>
            </select>
            {errors.place_of_birth && touched.place_of_birth ? <div>{errors.place_of_birth}</div> : null}
          </div>
          <div className="flex-4">
            <label htmlFor="nationality">Nacionalidade</label>
            <select name="nationality" id="nationality" onChange={handleChange}>
              <option value="Brasileira">Brasileira</option>
              <option value="Brasileira">Brasileira</option>
            </select>
            {errors.nationality && touched.nationality ? <div>{errors.nationality}</div> : null}
          </div>
        </div>
        <div className="flex">
          <div className="flex-4">
            <label htmlFor="cpf">CPF (somente números)</label>
            <MaskedInput
              mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
              className="form-control"
              placeholder="CPF"
              guide={false}
              id="cpf"
              onBlur={() => {
              }}
              onChange={() => {
              }}
            />
          </div>
          <div className="flex-4">
            <label htmlFor="raca">Raça</label>
            <select name="raca" id="raca" onChange={handleChange}>
              <option value="Parda">Parda</option>
              <option value="Parda">Parda</option>
            </select>
            {errors.raca && touched.raca ? <div>{errors.raca}</div> : null}

          </div>

          <div className="flex-4">
            <label htmlFor="marital_status">Estado Cívil</label>
            <select name="marital_status" id="marital_status" onChange={handleChange} >
              <option value="Solteiro(a)">Solteiro(a)</option>
              <option value="Casado(a)">Casado(a)</option>
              <option value="Divorciado(a)">Divorciado(a)</option>
              <option value="União Estável">União Estável</option>
            </select>
            {errors.marital_status && touched.marital_status ? <div>{errors.marital_status}</div> : null}
          </div>

          <div className="flex-4">
            <label htmlFor="blood_type">Tipo de Sangue</label>
            <input type="text" name="blood_type" id="blood_type" placeholder="Tipo de Sangue" onChange={handleChange} />
            {errors.blood_type && touched.blood_type ? <div>{errors.blood_type}</div> : null}
          </div>

          <div className="flex-4">
            <label htmlFor="organ_donation">Doador de Orgãos?</label>
            <select name="organ_donation" id="organ_donation" onChange={handleChange}>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              <option value="xx">xxx</option>
            </select>
            {errors.organ_donation && touched.organ_donation ? <div>{errors.organ_donation}</div> : null}

          </div>

        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="main_content_form_register_btn"
        >
          {isSubmitting ? 'Loading' : 'Próximo'}
        </button>
      </Form>
    </div>
  );
};

export default FormStep1;
