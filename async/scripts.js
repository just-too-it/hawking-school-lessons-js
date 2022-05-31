const input = document.querySelector('.js-input');
const message = document.querySelector('.js-message');
const btn = document.querySelector('.js-load');

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

const validation = (value) => {
    if (value === 0) {
        throw new ValidationError('Нет данных для отправки')
    } else if (isNaN(value)) {
        throw new ValidationError('Введено не числовое значение')
    } else if (value < 5 || value > 10) {
        throw new ValidationError('Введенное значение выходит за рамки заданного диапазона')
    }
     
    return value
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const value = Number(input.value);
    
    try {
        validation(value);
        message.setAttribute('class', 'input-message input-message_success');
        message.innerHTML = `Успешно отправлено число: ${value}`;
    } catch (error) {
        if (error instanceof ValidationError){
            message.setAttribute('class', 'input-message input-message_error');
            message.innerHTML = error.message
        } else {
            throw error
        }
    }
})
