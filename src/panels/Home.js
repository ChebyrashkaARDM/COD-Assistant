import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { Div } from '@vkontakte/vkui';
import persik from '../img/logo.png';
import './Persik.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>COD Assistant</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="information">
					Информация
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="3" onClick={go} data-to="contacts">
					Контакты
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="4" onClick={go} data-to="aesthetics">
					Эстетика ЦОДа
				</Button>
			</Div>
			<br/>
			<br/>
			<br/>
	</Panel>
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;