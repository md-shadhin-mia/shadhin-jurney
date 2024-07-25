"use client"
import  PasswordInput  from "@/components/shared/PasswordInput"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import { FormContainer, FormItem } from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import * as Yup from 'yup'
import { signIn, SignInTypes } from "../signin-service"


const validationSchema:Yup.ObjectSchema<SignInTypes>=Yup.object({
    username_email: Yup.string().required("Email Or Username Required"),
    password: Yup.string().required("Enter Your Password"),
})

export default function SignInForm() {

    async function handleSignIn(values: SignInTypes, formikHelpers: FormikHelpers<SignInTypes>): Promise<any> {
        formikHelpers.setSubmitting(true)
        await signIn(values)
    }
    
    return <div>
        <h1>Sign In</h1>
        <Card >
            <Formik<SignInTypes> 
            initialValues={{
                username_email: "",
                password: ""
            }} 
            onSubmit={ handleSignIn } 
            
            validationSchema={validationSchema}>
                {
                    ({touched, errors, resetForm, isSubmitting})=>(
                    <Form>
                        <FormContainer>
                            <FormItem 
                                label="Username Or Email"
                                invalid={errors.username_email && touched.username_email}
                                errorMessage={errors.username_email}>
                                <Field 
                                    name="username_email"
                                    type="text"
                                    autoComplete="off"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem 
                                label="Password"
                                invalid={errors.password && touched.password}
                                errorMessage={errors.password}>
                                <Field 
                                    name="password"
                                    autoComplete="off"
                                    component={PasswordInput}
                                />
                            </FormItem>
                            <div className="flex flex-col gap-3">
                                <Button loading={isSubmitting} type="submit" variant="solid">Sign In</Button>
                                <Button onClick={()=>resetForm()} disabled={isSubmitting} type="reset" >Clear</Button>
                            </div>
                        </FormContainer>
                    </Form>
                    )}
            </Formik>
        </Card>
    </div>
}