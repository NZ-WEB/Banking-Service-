import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import globalConsts from '../globalConsts'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
    const {PASS_MIN_LEN,BREAK_AUTH_TIME} = globalConsts

    const store = useStore()
    const router = useRouter()

    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Это поле обязательно для заполнения!')
            .email('Неободимо ввести корректный E-mail')
    )

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Это поле обязательно для заполнения!')
            .min(PASS_MIN_LEN, `Пароль не может быть меньше ${PASS_MIN_LEN}`)
    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => {
                submitCount.value = 0
            }, 60 * BREAK_AUTH_TIME)
        }
    })

    const onSubmit = handleSubmit(async values => {
        console.log('Form', values)
        await store.dispatch('auth/login', values)
        router.push('/')
    })

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts
    }
}
