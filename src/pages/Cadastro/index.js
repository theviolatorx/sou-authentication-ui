import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import api from '../../services/api';

import FormStep1 from '../../components/FormStep1';
import FormStep2 from '../../components/FormStep2';
// import FormStep3 from '../../components/FormStep3';
// import FormStep4 from '../../components/FormStep4';
// import FormStep5 from '../../components/FormStep5';
// import FormStep6 from '../../components/FormStep6';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      forms: {}
    };
  }

  handleNext = values => {
    this.setState({ step: this.state.step + 1 });
    this.setState({ forms: { ...values, ...this.state.forms } });
    console.log(this.state.forms);
  };

  handlePrev = () => {
    this.setState({ step: this.state.step - 1 });
  };

  getValidationShema = () => {
    return Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        social_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        gender: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        place_of_birth: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        nationality: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        raca: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        marital_status: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        blood_type: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        organ_donation: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')

         //cpf: Yup.int()
         //.email('Invalid email')
         //.required('Required')

     // email: Yup.string()
      //  .email('Invalid email')
        //.required('Required')
    });
  };

  // handleSubmit = values => {
  //   api.post('cadastro', this.state.forms);
  // };

  // onclick={this.props.handleNext}
  render() {
    let { step } = this.state;
    return step === 1 ? (
      <Formik
        onSubmit={this.handleNext}
        initialValues={{
          firstName: '',
          lastName: '',
          social_name: '',
          gender: '',
          place_of_birth: '',
          nationality: '',
          raca: '',
          marital_status: '',
          blood_type: '',
          organ_donation: ''
          //cpf: '',
          //email: ''
        }}
        validationSchema={this.getValidationShema}
        render={FormStep1}
      />
    ) : step === 2 ? (
      <Formik onSubmit={this.handleNext} render={FormStep2} />
    ) : (
      ''
    );
    // step === 3 ?
    //     <FormStep3 handleNext={this.handleNext} handlePrev={this.handlePrev}/> :
    // step === 4 ?
    //     <FormStep4 handleNext={this.handleNext} handlePrev={this.handlePrev}/> :
    // step === 5 ?
    //     <FormStep5 handleNext={this.handleNext} handlePrev={this.handlePrev}/> :
    // step === 6 ?
    //     <FormStep6 handleSubmit={this.handleSubmit} handlePrev={this.handlePrev}/> :
    // ''
  }
}

export default Cadastro;
