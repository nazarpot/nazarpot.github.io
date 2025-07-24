<svelte:head>
    <title>Contact Me</title>
</svelte:head>

<h2>Contact Me</h2>

<script>
    import emailjs from '@emailjs/browser';

    const sendEmail = (e) => {
        emailjs
            .sendForm('service_gmail', 'template_contact', e.target, {
                publicKey: 'si3XvG_5H5KsiYodg',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
</script>

<div id="contact-form">
    <form on:submit|preventDefault={sendEmail}>
            <label>
                Name
                <input type="text" name="user_name" required>
            </label>
            <label>
                Email
                <input type="email" name="user_email" required>
            </label>
            <label>
                Message
                <textarea name="message" rows="10" cols="50" required></textarea>
            </label>
            <input id="submit-button" type="submit" value="Send">
    </form>
</div>


<style>
    h2 {
        font-size: 200%;
        margin-left: 3rem;
    }

    #contact-form {
        padding: 1rem;
        margin: auto 2rem;
    }

    form {
        display: table;
    }

    label {
        padding: 1rem;
        display: table-row;
    }

    input {
        display: table-cell;
        margin-bottom: 1rem;

        border-radius: 10px;
    }

    textarea {
        display: table-cell;

        border-radius: 10px;
    }

    #submit-button {
        margin: 1rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
        background-color: var(--color-primary);

        border-radius: 10px;

    }

</style>
