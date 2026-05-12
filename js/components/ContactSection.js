const ContactSection = {
    data() {
        return {
            form: { name: '', email: '', subject: '', message: '' },
            submitted: false,
            contactItems: [
                { icon: 'fas fa-map-marker-alt', title: 'Location', lines: ['1BP 511, Phum Tropeang Chhuk, Street 371', 'Phnom Penh, Cambodia'], href: null },
                { icon: 'fas fa-envelope', title: 'Email', lines: ['serey.phem@student.passerellesnumeriques.org'], href: 'mailto:serey.phem@student.passerellesnumeriques.org' },
                { icon: 'fas fa-phone', title: 'Phone', lines: ['097 3272 951'], href: 'tel:+855973272951' },
                { icon: 'fas fa-globe', title: 'Website', lines: ['www.sereyhub.online'], href: 'https://www.sereyhub.online', target: '_blank' },
                { icon: 'fab fa-github', title: 'GitHub', lines: ['github.com/Serey002'], href: 'https://github.com/Serey002', target: '_blank' },
            ]
        };
    },
    methods: {
        submitForm() {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
                this.form = { name: '', email: '', subject: '', message: '' };
            }, 3000);
        }
    },
    template: `
        <section id="contact">
            <div class="container">
                <div class="section-title">
                    <h2>Get In <span class="color-animated">Touch</span></h2>
                </div>
                <div class="contact-content">
                    <div class="contact-info fade-in-left">
                        <div class="contact-item fade-in-up" v-for="(item, i) in contactItems" :key="item.title" :class="'stagger-delay-' + (i + 1)">
                            <div class="contact-icon"><i :class="item.icon"></i></div>
                            <div>
                                <h3>{{ item.title }}</h3>
                                <p v-for="line in item.lines" :key="line">
                                    <a v-if="item.href" :href="item.href" :target="item.target || ''">{{ line }}</a>
                                    <template v-else>{{ line }}</template>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form fade-in-right">
                        <form @submit.prevent="submitForm">
                            <div class="form-group fade-in-up stagger-delay-1">
                                <label>Full Name</label>
                                <input type="text" class="form-control" placeholder="Your Name" v-model="form.name" required>
                            </div>
                            <div class="form-group fade-in-up stagger-delay-2">
                                <label>Email Address</label>
                                <input type="email" class="form-control" placeholder="Your Email" v-model="form.email" required>
                            </div>
                            <div class="form-group fade-in-up stagger-delay-3">
                                <label>Subject</label>
                                <input type="text" class="form-control" placeholder="Project Inquiry or General Question" v-model="form.subject" required>
                            </div>
                            <div class="form-group fade-in-up stagger-delay-4">
                                <label>Message</label>
                                <textarea class="form-control" placeholder="Your Message" v-model="form.message" required></textarea>
                            </div>
                            <div v-if="submitted" class="success-message fade-in-up">
                                <i class="fas fa-check-circle"></i> Thank you, {{ form.name }}! Your message has been sent.
                            </div>
                            <button type="submit" class="btn fade-in-up stagger-delay-5" :disabled="submitted">
                                <i class="fas fa-paper-plane"></i> {{ submitted ? 'Message Sent!' : 'Send Message' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `
};
