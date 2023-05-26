import React from 'react';
import './registr.css'
const Registr = () => {
    return (
        <div className="login-box">
		<h2>Регистрация</h2>
		<form>
			<div className="user-box">
				<input type="text" name="" placeholder='Имя'/>
			</div>
			<div className="user-box-email">
				<input type="email" name="" placeholder='Email' />
				
			</div>
			<div className="user-box-code">
				<input type="text" name="" maxLength={6} placeholder='Код'/>
			</div>

			<div className="log-in">
				<a href='//'  >
					Зарегестрироваться
				</a>

			</div>
			<div className="sign-up">
				<a href='//' >
					Уже есть аккаунт
				</a>
			</div>

		</form>
	</div>
    );
};

export default Registr;