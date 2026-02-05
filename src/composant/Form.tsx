import React, {useRef} from "react";
import emailjs from "@emailjs/browser"

const ElementForm = (props: { type: string, name: string, text: string }) => {
    const isTextarea = props.type === 'textarea';
    const Tag = isTextarea ? "textarea" : "input"
    const extraProps = isTextarea ? {cols: 30, rows: 6} : {}
    const type = isTextarea ? {} : {type: props.type}
    return (
        <div>
            <label htmlFor={props.name} className="form-label">{props.text}</label>
            <Tag
                required
                placeholder={`Entrer votre ${props.text}`}
                className="form-control"
                name={props.name}
                id={props.name}
                {...type}
                {...extraProps} />
        </div>
    )
}

export const Form = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.SubmitEvent) => {
        e.preventDefault()

        if (!formRef.current) return

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    alert("Message envoyé ✅")
                    formRef.current?.reset()
                },
                (error) => {
                    console.error(error)
                    alert("Erreur lors de l'envoi ❌")
                }
            )
    }
    return (
        <form ref={formRef}
              onSubmit={sendEmail}
              className="bg-primary mx-auto my-2 px-5 py-2 rounded background-blue text-start text-light">
            <ElementForm type="text" name="name" text="Nom"/>
            <ElementForm type="email" name="email" text="Email"/>
            <ElementForm type="textarea" name="message" text="Message"/>
            <button type="submit" className="btn btn-light my-2">Envoyer</button>
        </form>
    )
}