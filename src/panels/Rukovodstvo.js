import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { RichCell, Avatar } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Persik.css';

const osName = platform();

const Rukovodstvo = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="useful">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Руководство 
		</PanelHeader>
		<RichCell
        	disabled
        	before={<Avatar size={64} src="https://sun1-22.userapi.com/8Q20Lnaifz7jhVpNkQd0JH4oLOvBlu34hcBjCQ/pB7FNExeD98.jpg" />}
        	caption="Директор">
        	Тузикова Ирина Валерьевна
      	</RichCell>
		  <RichCell
        	disabled
        	before={<Avatar size={64} src="https://sun9-10.userapi.com/tmdLF6aTLOud50L9D8JgMjJy9PCtvkUOuZX1_Q/AByPloIi4Ls.jpg" />}
        	caption="Зам. директора по УВР">
        	Марова Марина Юрьевна
      	</RichCell>
		  <RichCell
        	disabled
        	before={<Avatar size={64} src="https://sun9-50.userapi.com/vSb7G8aHuJw2mZPWqcflECfQzMTF6fz7h95j6g/J0v5jgyTv3E.jpg" />}
        	caption="Зам. директора по НЭР">
        	Машенцева Лариса Михайловна
      	</RichCell>
		  <RichCell
        	disabled
        	before={<Avatar size={64} src="https://sun9-24.userapi.com/zVu3iw73Cl5NV_Kj3yReGs9kL1Hg66HWcxLNVg/iiuQzNWI_AA.jpg" />}
        	caption="Зам. директора по 	ВР">
        	Кузина Ольга Владимировна
      	</RichCell>
		  <RichCell
        	disabled
        	before={<Avatar size={64} src="https://sun9-24.userapi.com/ZGXJI_GdEiaN8h_xArpZAE_O_LTYcYVbudBRmg/AkNpW-aY2jQ.jpg" />}
        	caption="Зам. директора по адм.-хоз. работе">
        	Федосеев Андрей Александрович
      	</RichCell>
		  <RichCell
        	disabled
        	before={<Avatar size={64} src="https://sun9-11.userapi.com/Y9rI7XYRNVvoAtNRICx6zSh0pCeokPFPwaef7g/gW56KOC66b8.jpg" />}
        	caption="Зам. директора по инф.-метод. работе">
        	Заворотная Мария Викторовна
      	</RichCell>
      <br/>
      <br/>
      <br/>
	</Panel>
);

Rukovodstvo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Rukovodstvo;