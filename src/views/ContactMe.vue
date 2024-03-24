<script setup lang="ts">
import Icon from './../components/Icon.vue';
import Button from './../components/Button.vue';
import Input from './../components/Input.vue';
import Textarea from '../components/Textarea.vue';
import { ref } from 'vue';

const name = ref<string>('')
const email = ref<string>('')
const message = ref<string>('');

</script>

<template>
    <div
        class="base-container flex flex-col gap-6 items-start justify-start px-8 pb-20 md:pb-24 md:gap-12 md:px-10 md:py-6 xl:px-0 ">
        <v-divider class="border-opacity-100" />
        <div class="w-full xl:flex">
            <h1 class="xl:w-1/2">Get in Touch</h1>
            <div class="flex flex-col gap-6 xl:w-1/2">
                <p class="font-body-2 text-primary-grayish">I’d love to hear about what you’re working on and how I
                    could
                    help.
                    I’m
                    currently looking for a new role and am open to a wide range of opportunities. My preference would
                    be to
                    find a
                    position in a company in Canada, USA or Latin America. But I’m also happy to hear about opportunites that don’t fit that
                    description.
                    I’m a hard-working and positive person who will always approach each task with a sense of purpose
                    and
                    attention
                    to detail. Please do feel free to check out my online profiles below and get in touch using the
                    form.
                </p>
                <div class="flex gap-[15px]">
                    <a href="https://www.linkedin.com/in/josue-david-lopez-florian/">
                        <Icon :icon="'linkedIn'" class="text-primary-grayish w-[25px] h-[25px]"
                            alt="LinkedIn link profile" />
                    </a>
                    <a href="https://github.com/JUMPSTONIK">
                        <Icon :icon="'github'" class="text-primary-grayish w-[25px] h-[25px]"
                            alt="Github link profile" />
                    </a>
                </div>
            </div>
        </div>
        <v-divider class="border-opacity-100" />
        <div class="w-full xl:flex">
            <h1 class="xl:w-1/2">Contact Me</h1>
            <form class="flex flex-col gap-6 xl:w-1/2" action="https://api.web3forms.com/submit" method="POST">
                <!-- Replace with your Access Key -->
                <input type="hidden" name="access_key" value="88f316a4-9755-457a-9416-1b7a00e966b1">
                <Input v-model="name" :type="'text'" :to="'Name'" />
                <Input v-model="email" :type="'email'" :to="'Email Address'" />
                <Textarea v-model="message" :type="'text'" :to="'Message'" />
                <!-- hCaptcha Spam Protection -->
                <div class="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
                <Button :type="'submit'" class=" w-[200px]" :text="'send message'" />
            </form>
        </div>
    </div>
</template>


<style scoped></style>