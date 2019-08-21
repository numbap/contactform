import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow'
import FormSubmitted from '../component/form-submitted/form-submitted'
import SignUpForm from '../component/sign-up-form/sign-up-form'
import SignUpPage from '../component/sign-up-page/sign-up-page'

test('FormSubmitted render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
        <FormSubmitted />
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('SignUpForm render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
        <SignUpForm />
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('SignUpPage render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
        <SignUpPage />
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
