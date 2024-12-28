<?php

if (!defined('B_PROLOG_INCLUDED') || (B_PROLOG_INCLUDED !== true)) {
    exit;
}


?>
<dialog open="" class="portal">
    <div class="portal__wrapper">
        <h2 class="portal__title">Оставить заявку</h2>
        <button data-ripple-color="light" class="button button--ripple burger burger--close close-button">
            <div class="burger__container"><span class="burger__line"></span></div>
        </button>
        <form method="POST" name="test" class="portal__form form">
            <div class="form__main">
                <div class="form__left">
                    <div class="form__field">
                        <input name="name" id="name" autocomplete="off" required="" class="form__input">
                        <label for="name" class="form__label">Ваша организация / Имя*</label>
                    </div>
                    <div class="form__field" style="display: none;">
                        <input name="product_id" id="product_id" autocomplete="off" required="" class="form__input" value="<?= $arParams['~PRODUCT_ID'] ?>">
                    </div>
                    <div class="form__field">
                        <input name="phone" id="phone"  required=""  class="form__input">
                        <label for="phone" class="form__label">Телефон*</label>
                    </div>
                    <div class="form__field">
                        <input type="email" name="email" id="email" required="" class="form__input">
                        <label for="email" class="form__label">E-mail*</label>
                    </div>
                </div>
                <div class="form__right">
                    <div class="form__field">
                        <textarea name="text" id="text" cols="30" rows="10" autocomplete="off" class="form__textarea"></textarea>
                        <label for="text" class="form__label">Текст сообщения</label>
                    </div>
                </div>
            </div>
            <p class="form__text">Нажимая кнопку «Отправить»,<br>я даю <a href="/soglasie.pdf" class="link form__link">согласие</a> на обработку моих персональных данных</p>
            <div class="form__button">
                <button type="submit" data-ripple-color="light" class="button button--ripple button--send">Отправить</button>
            </div>
        </form>
        <span class="form-success">Ваша заявка отправлена.</span>
    </div>
</dialog>
<script>
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.portal__form');
    const successMessage = document.querySelector('.form-success');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        // Сброс предыдущих сообщений об ошибках
        document.querySelectorAll('.form__error').forEach(error => error.remove());
        const formData = new FormData(form);

        // Отправляем данные на сервер
        fetch('/local/ajax/form_handler.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Если успех
                    form.classList.add('form--hidden');
                    successMessage.innerHTML = data.message;
                    successMessage.classList.add('form-success--visible');
                } else {
                    // Если ошибка
                    if (data.type && data.error) {
                        // Найти соответствующее поле и вывести ошибку
                        const field = form.querySelector(`#${data.type}`);
                        if (field) {
                            const errorElement = document.createElement('span');
                            errorElement.className = 'form__error';
                            errorElement.textContent = data.error;
                            field.closest('.form__field').appendChild(errorElement);
                        }
                    } else {
                        // Общая ошибка, если тип не указан
                        successMessage.innerHTML = data.error || 'Произошла ошибка';
                        successMessage.classList.add('form-success--visible');
                    }
                }
            })
            .catch(error => {
                successMessage.innerHTML = 'Произошла непредвиденная ошибка. Попробуйте оставить заявку позже.';
                successMessage.classList.add('form-success--visible');
                console.error('Ошибка сервера:', error);
            });
    });
});

</script>