import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"
import { FaUserEdit, FaMarker } from 'react-icons/fa';
import { RiMailSendFill } from 'react-icons/ri'

import { Container, Images } from "./styles"

import { Header } from "../../Components/Header"
import { IconsContact } from "../../Components/IconsContact"

import contactPic from "../../assets/PageContact/toContact.png"

export function Contact(){
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm();
    const onSubmit = (data) => {
        const templeteParams = {
            from_name: data.FirstName,
            email: data.Email,
            theme: data.Theme,
            message: data.Message
        }   
         emailjs.send("service_lrk1vje", "template_z30lxqu", templeteParams, "JNFwHPGqn7nhKgNCi")
            .then((response) => {
                alert("Email enviado", response.status, response.text)
                reset({
                    FirstName: '',
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
                        <div>
                            <FaUserEdit/>
                            <input type="text" placeholder="Nome" {...register("FirstName", {required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <RiMailSendFill/>
                            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                        </div>
                        <div>
                            <FaMarker/>
                            <input type="text" placeholder="Assunto" {...register("Theme", {})} />
                        </div>
                        <textarea placeholder="Digite aqui sua mensagem..." {...register("Message", {required: true})} />
                        <button>Enviar</button>
                    </form>
                </section>
            </main>
        </Container>
    )
}