"use client"

import { FormContainer, FormItem } from "@/components/ui/Form"
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import * as Yup from 'yup'
import { User } from "../user-service";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Alert from "@/components/ui/Alert";
import toast from "@/components/ui/toast";
import Notification from "@/components/ui/Notification";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name Required"),
    email: Yup.string().email('Invalid email').required('Email Required'),
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('User Name Required'),
    password: Yup.string()
        .required('Password Required')
        .min(8, 'Too Short!'),
})


type FormProps = {
    isEdit?: boolean;
    onSubmit: (values: User) => Promise<void>;
    initialValues?: User
}

export default function UserFrom(
    { onSubmit, initialValues }: FormProps
) {

    const [pwInputType, setPwInputType] = useState('password')
    const router = useRouter()

    const onPasswordVisibleClick = (e: MouseEvent) => {
        e.preventDefault()
        setPwInputType(pwInputType === 'password' ? 'text' : 'password')
    }

    const passwordVisible = (
        <span
            className="cursor-pointer"
            onClick={(e) => onPasswordVisibleClick(e)}
        >
            {pwInputType === 'password' ? (
                <HiOutlineEyeOff />
            ) : (
                <HiOutlineEye />
            )}
        </span>
    )

    const handleSubmit = (values: User, helpers: FormikHelpers<User>) => {
        console.log(values);
        helpers.setSubmitting(true);
        onSubmit(values)
            .then(() => {
                router.push("/users")
            })
            .catch((err) => {
                toast.push(<Notification title="Error" type="danger">
                        {err.toString()}
                    </Notification>);
              
            })
            .finally(() => helpers.setSubmitting(false));
    }

    return (
        <Formik
            initialValues={initialValues ?? {
                name: "",
                email: "",
                username: "",
                password: ""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} >
            {({ touched, errors, resetForm, isSubmitting }) => 
                <Form>
                    <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                            <FormItem
                                label="Name"
                                invalid={errors.name && touched.name}
                                errorMessage={errors.name}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="name"
                                    placeholder="name"
                                    component={Input}
                                />
                            </FormItem>


                            <FormItem
                                label="Email"
                                invalid={errors.email && touched.email}
                                errorMessage={errors.email}
                            >
                                <Field
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Email"
                                    component={Input}

                                />
                            </FormItem>
                            <FormItem
                                label="Username"
                                invalid={errors.username && touched.username}
                                errorMessage={errors.username}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="username"
                                    placeholder="name"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Password"
                                invalid={errors.password && touched.password}
                                errorMessage={errors.password}
                            >
                                <Field
                                    type={pwInputType}
                                    suffix={passwordVisible}
                                    autoComplete="off"
                                    name="password"
                                    placeholder="Password"
                                    component={Input}
                                />
                            </FormItem>
                        </div>

                    </FormContainer>
                    <FormItem>
                        <Button
                            type="reset"
                            className="ltr:mr-2 rtl:ml-2"
                            onClick={() => resetForm()}
                        >
                            Reset
                        </Button>
                        <Button loading={isSubmitting} variant="solid" type="submit">
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            }
        </Formik>
    )
}