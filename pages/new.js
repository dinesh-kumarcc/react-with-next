import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
// import { validate } from "../models/Note";

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();


    //give the errors dependecncy errors ,   this is only reu when the error state changes
    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {

                //create -- createNote method

                //this method is not create again 
                //when are database run our http request to our api to make a post request to create a note 
                createNote();

                // alert('Success')
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createNote = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Create Blog</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                label='Title'
                                placeholder='Title'
                                name='title'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Descriprtion'
                                placeholder='Description'
                                name='description'
                                error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                            <Button type="submit">Create Blog</Button>

                        </Form>
                }
            </div>
        </div>
    )
}

export default NewNote