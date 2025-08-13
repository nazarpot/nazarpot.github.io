<svelte:head>
    <title>Contact Me</title>
</svelte:head>

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
                    document.getElementById("success-message").style.display = "block";
                    document.getElementById("contact-form").reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
</script>

<div id="contact-page">
    <h2 class="text-3xl">Contact Me</h2>

    <p id="success-message">Success! An email has been sent.</p>
        <form id="contact-form" class="text-lg" on:submit|preventDefault={sendEmail}>
            <label>
                Name
                <input class="contact-input" type="text" name="name" required>
            </label>
            <label>
                Email
                <input class="contact-input" type="email" name="email" required>
            </label>
            <label>
                Message
                <textarea class="contact-input" name="message" rows="10" cols="50" required></textarea>
            </label>
            <input id="submit-button" type="submit" value="Send" class="text-xl">
        </form>
</div>



<style>
    body {
        background-color: var(--color-bg);
        color: var(--color-text);
    }

    h2 {
        margin-left: 2rem;
    }

    #contact-form {
        padding: 1rem;
        margin: auto 2rem;

        justify-content: center;
    }

    #success-message {
        display: none;
        padding: 1rem;
        margin: auto 4rem;

        color: var(--color-roseda);
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 50%;
    }

    label {
        padding: 1rem;
    }

    input {
        margin-bottom: 1rem;

        border: 1px solid black;
        border-radius: 10px;

        width: 80%;
        text-align: left;
        float: right;
    }

    input:user-invalid {
        border-color: var(--color-persian);
    }

    textarea {
        border: 1px solid black;
        border-radius: 10px;

        width: 80%;
        float: right;
    }

    textarea:user-invalid {
        border-color: var(--color-persian);
    }

    #submit-button {
        margin: 1rem 1rem 1rem 14rem;
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        background-color: var(--color-flame);

        border-radius: 10px;

        max-width: 50%;
        text-align: center;
    }

    #submit-button:hover {
        background-color: var(--color-bg);
    }

</style>
