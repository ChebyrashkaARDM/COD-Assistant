import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Information.css';
import A from '../img/Эстетика/Новая папка/Z-hNP0gphkI_optimized.png';
import B from '../img/Эстетика/Новая папка/bKZu1tG_-Ig_optimized.png';
import C from '../img/Эстетика/Новая папка/R5EZcWAPHg0_optimized.png';
import D from '../img/Эстетика/Новая папка/MgFnoDc2Bj8_optimized.png';
import E from '../img/Эстетика/Новая папка/HZbA-KI-TxQ_optimized.png';
import F from '../img/Эстетика/Новая папка/L2v905_mQtg_optimized.png';
import G from '../img/Эстетика/Новая папка/rpE7CkHEUIw_optimized.png';
import H from '../img/Эстетика/Новая папка/FLz04dHAGQY_optimized.png';
import I from '../img/Эстетика/Новая папка/tAIBO_TOSbQ_optimized.png';
import J from '../img/Эстетика/Новая папка/A_m8SKe0Tj0_optimized.png';
import K from '../img/Эстетика/Новая папка/AkKVQjBnxyM_optimized.png';


const osName = platform();

const Aesthetics = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
			Эстетика ЦОДа
		</PanelHeader>
		<img className="Information" src={A} alt="Persik The Cat"/>
		<img className="Information" src={B} alt="Persik The Cat"/>
		<img className="Information" src={C} alt="Persik The Cat"/>
		<img className="Information" src={D} alt="Persik The Cat"/>
		<img className="Information" src={E} alt="Persik The Cat"/>
		<img className="Information" src={G} alt="Persik The Cat"/>
		<img className="Information" src={F} alt="Persik The Cat"/>
		<img className="Information" src={H} alt="Persik The Cat"/>
		<img className="Information" src={I} alt="Persik The Cat"/>
		<img className="Information" src={J} alt="Persik The Cat"/>
		<img className="Information" src={K} alt="Persik The Cat"/>
		<br/>
		<br/>
		<br/>
	</Panel>
);

Aesthetics.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Aesthetics;