const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким E-mail - не найден',
    INVALID_PASSWORD: "Пароль не верный!",
    auth: 'Пожалуйста войдите в систему!'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}
