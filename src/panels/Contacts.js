import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { Cell, Footer } from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Information from '../img/love-min.png';
import './Information.css';
import Icon24LogoInstagram from '@vkontakte/icons/dist/24/logo_instagram';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Globe from '@vkontakte/icons/dist/24/globe';
import Icon24Phone from '@vkontakte/icons/dist/24/phone';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';

const osName = platform();

const Contacts = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
			Контакты
		</PanelHeader>
		<img className="Persik" src={Information} alt="Persik The Cat"/>
		<Cell before={<Icon24LogoInstagram />}><a href="https://instagram.com/cod.nn?igshid=zxhd4l1rib00">cod.nn</a></Cell>
		<Cell before={<Icon24LogoVk />}><a href="https://vk.com/public78355205">podslushanocod</a></Cell>
		<Cell before={<Icon24Globe />}><a href="http://codnn.ru">codnn.ru</a></Cell>
		<Cell before={<Icon24Phone />}><a href="tel:88312224433">8 (831) 222-44-33</a></Cell>
		<Cell before={<Icon24Mention />}><a href="mailto:cod@codnn.ru">cod@codnn.ru</a></Cell>
		<Footer>603094, Российская Федерация
			<br/>
		г. Нижний Новгород, ул. Коминтерна, д. 101</Footer>
		<br/>
		<br/>
		<br/>
	</Panel>
);

Contacts.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Contacts;