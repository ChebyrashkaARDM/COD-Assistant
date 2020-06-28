import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Div, Caption } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './News.css';
import A from '../img/Новости/RxRkYzRbt3k-min.png';
import B from '../img/Новости/6fj4CqrVJPc.png';

const osName = platform();

const N1 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="news">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
			Новости
		</PanelHeader>
        <Caption weight= "semibold" style={{ paddingTop: 20, paddingBottom: 0, textAlign: 'center' }}>Встреча с летчиком-космонавтом <br/> Волковым С.А.</Caption>
        <img className="News" src={A} alt="Persik The Cat"/>
        <Div style={{ paddingTop: 20, paddingBottom: 20, color: 'gray' }}>
        13 марта в лицее прошла встреча с Героем Российской Федерации, летчиком-космонавтом Волковым Сергеем Александровичем. Ребята подготовили интересные вопросы гостю: о подготовке к полетам, о выходах в открытый космос, о мечтах и эмоциях, о традициях и земном притяжении и др. Сергей Александрович очень увлекательно, откровенно и искренне поделился историями из своей жизни и профессиональной деятельности.
        <img className="News" src={B} alt="Persik The Cat"/>
            <br/>
            <br/>
            <br/>
          </Div>
	</Panel>
);

N1.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default N1;