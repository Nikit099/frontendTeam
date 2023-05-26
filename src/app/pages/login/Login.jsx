import React from 'react';
import './login.css'
const Login = () => {
    return (
        <div class="login-box">
		<h2>Логин</h2>
		<form>
			<div class="user-box">
				<input type="text" name="" required="" />
				<label>Логин или почта</label>
			</div>
			<div class="user-box-password">
				<input type="password" name="" required="" />
				<label>Пароль</label>
			</div>

			<div class="log-in">
				<a href="/">
					Войти
				</a>

			</div>
			<div class="sign-up">
				<a href="/">
					Создать аккаунт
				</a>
			</div>

		</form>
	</div>
    );
};

export default Login;