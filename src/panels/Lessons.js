import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Cell } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Lessons = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="useful">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderBack>}>
			ЕГЭ 2020
		</PanelHeader>
		<Cell before={'29.06, пт \u00A0 \u00A0'}>География, литература <br/> и информатика</Cell>
		<Cell before={'02.07, вт \u00A0 \u00A0'}>Русский язык</Cell>
		<Cell before={'03.07, ср \u00A0 \u00A0'}>Русский язык</Cell>
		<Cell before={'06.07, сб \u00A0 \u00A0'}>Профильная математика</Cell>
		<Cell before={'09.07, вт \u00A0 \u00A0'}>История и физика</Cell>
		<Cell before={'13.07, сб \u00A0 \u00A0'}>Обществознание и химия</Cell>
		<Cell before={'16.07, вт \u00A0 \u00A0'}>Биология и <br/> письменная часть <br/> по иностранным языкам</Cell>
		<Cell before={'18.07, чт \u00A0 \u00A0'}>Устная часть <br/> по иностранным языкам</Cell>
		<Cell before={'20.07, сб \u00A0 \u00A0'}>Устная часть <br/> по иностранным языкам</Cell>
		<br/>
		<br/>
		<br/>
	</Panel>
);

Lessons.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Lessons;