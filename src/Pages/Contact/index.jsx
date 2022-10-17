import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "@emailjs/browser"

import { FaUserEdit, FaMarker } from 'react-icons/fa';
import { RiMailSendFill } from 'react-icons/ri'

import { Container, Images } from "./styles"

import { Header } from "../../Components/Header"
import { IconsContact } from "../../Components/IconsContact"
import { Footer } from "../../Components/Footer"

import contactPic from "../../assets/PageContact/toContact.png"

const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    Email: yup.string().required().email(),
    Theme: yup.string().required(),
    Message: yup.string().required()
  });

export function Contact(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(SignupSchema) });

    const onSubmit = (data) => {
        const templeteParams = {
            from_name: data.firstName,
            email: data.Email,
            theme: data.Theme,
            message: data.Message
        }   
        emailjs.send("service_lrk1vje", "template_z30lxqu", templeteParams, "JNFwHPGqn7nhKgNCi")
            .then((response) => {
                alert("Email enviado", response.status, response.text)
                reset({
                    firstName: '',
                    Email: '',
                    Theme: '',
                    Message: ''
                })
            }, (error) => {
                alert(`Falha ao enviar, erro: ${error}`)
            })
        };
    
    

    return (
        <Container>
            <Header/>
            <main>
                <h3>Entre em contato</h3>
                <section>
                    <Images src={contactPic} alt="" />
                    <div>
                        <p>
                            Você pode entrar em contato comigo através de uma das mídias sociais abaixo ou através do formulário.
                        </p>
                        <IconsContact/>
                    </div>
                </section>
                <section>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        <div>
                            <FaUserEdit/>
                            <input type="text" placeholder="Nome" {...register("firstName")} />
                        </div>
                        {errors.Email && <p>{errors.Email.message}</p>}
                        <div>
                            <RiMailSendFill/>
                            <input type="text" placeholder="Email" {...register("Email")}/>
                        </div>
                        {errors.Theme && <p>{errors.Theme.message}</p>}
                        <div>
                            <FaMarker/>
                            <input type="text" placeholder="Assunto" {...register("Theme", {})} />
                        </div>
                        {errors.Message && <p>{errors.Message.message}</p>}
                        <textarea placeholder="Digite aqui sua mensagem..." {...register("Message")} />
                        <button>Enviar</button>
                    </form>
                </section>
                <Footer/>
            </main>
        </Container>
    )
}