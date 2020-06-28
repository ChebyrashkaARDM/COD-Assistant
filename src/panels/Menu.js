import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Div } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Information from '../img/staytuned-min.png';

const osName = platform();

const Menu = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="useful">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
			Меню
		</PanelHeader>
        <Div style={{textAlign: 'center'}} >Чуть позже здесь появятся даты, когда можно будет забрать свои продуктовые наборы.</Div>
		<img className="Persik" src={Information} alt="Persik The Cat"/>
	</Panel>
);

Menu.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Menu;