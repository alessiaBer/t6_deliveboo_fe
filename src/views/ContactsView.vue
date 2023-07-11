<script>

export default {
    name: "ContactsView",
}
</script>
<template>
    <div class="imageContacts position-relative">
        <img src="../../public/assets/imgs/DFW Background Homepage PS2 (2).svg" alt="">
    </div>

    <div class="contact">
        
            CONTATTACI

    </div>
    <section class="contact-me py-5">
        <div class="container">
            <div class="card p-4 shadow">
                <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
                        aria-describedby="nameHelper">
                    <small id="nameHelper" class="text-muted">Type your full name here</small>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="Mario@Rossi.com"
                        aria-describedby="emailHelper">
                    <small id="emailHelper" class="text-muted">Type your email here</small>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="8"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-envelope-paper" viewBox="0 0 16 16">
                        <path
                            d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                    </svg>
                    Send
                </button>
            </form>
            </div>
        </div>
    </section>
</template>


<style>
.contact {
    color: #00CCBD;
    font-size: 5rem;
    width: 33%;
    position: absolute;
    top: 13rem;
    left: 56rem;
}
</style>