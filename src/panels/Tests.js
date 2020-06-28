import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Footer } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './Persik.css';

const osName = platform();

const Tests = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Тесты ЕГЭ
		</PanelHeader>
        <Footer>Все задания и ответы взяты с сайта <a href="https://ege.sdamgia.ru"> Решу ЕГЭ</a></Footer>
	</Panel>
);

Tests.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Tests;