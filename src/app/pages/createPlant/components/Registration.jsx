import React from 'react';

const Registration = () => {
    return (
<div class="registration-box">
		<form>
			<h2>Подключение</h2>
			<div class="plant-name-box">
				<input type="text" name="" required="" placeholder='Имя растения' />
			</div>
			<div class="code-box">
				<input type="text" name="" required="" placeholder='Ключ доступа'/>
			</div>
			<div class="accessing">
				<a href="/">
					Подтвердить
				</a>
			</div>
		</form>
	</div>
    );
};

export default Registration;