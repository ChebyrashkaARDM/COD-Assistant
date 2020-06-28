import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Div, Button} from '@vkontakte/vkui';
import './Information.css';
import A from '../img/Эстетика/Новая папка/EAKGk1Ovaw0_optimized.png';


const Useful = ({props, id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
			Лицей
		</PanelHeader>
		<Div>
				<Button size="xl" level="2" onClick={go} data-to="lessons">
					ЕГЭ 2020
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="3" onClick={go} data-to="menu">
					Меню в столовой
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="6" onClick={go} data-to="rukovodstvo">
					Руководство лицея
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="4" onClick={go} data-to="teachers">
					Учителя
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="5" onClick={go} data-to="vospitateli">
					Воспитатели
				</Button>
			</Div>
			<img className="Information" src={A} alt="Persik The Cat"/>
	</Panel>
);

Useful.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Useful;