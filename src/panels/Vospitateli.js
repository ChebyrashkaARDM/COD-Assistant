import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { RichCell, Avatar } from '@vkontakte/vkui';
import './Persik.css';

const osName = platform();

const Vospitateli = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="useful">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Воспитатели
		</PanelHeader>
		<RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/2Hc8hw3rBsLFXxe3Y6XbQtblcWIMi0G1abs49w/zCRMpUHPEGI.jpg" />}
        caption=""
      >
		  Земкова Ирина Вячеславовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/Db44lIO-AiSePP_jspDXJf1DLAm8_1cIOH2JLA/qH3ympSEaQs.jpg" />}
        caption=""
      >
		  Баранова Надежда Михайловна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/c0vuLHGVsiIhgcQriYKxmVB9yOtKaFSEEuoLrQ/TztUQzcuYmA.jpg" />}
        caption=""
      >
		  Бесчастная Ольга Владимировна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/yVi4J1aPFxMqQ7Y5OQ2NNWuJALJfv4ObNZw2bQ/hKSOivG5YLI.jpg" />}
        caption=""
      >
		  Бородулина Лидия Евгеньевна 
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/C2vYLcbJsin5DZSCZmgPvQ6dojTbkGMLSxVifg/zTK6HGzpDRA.jpg" />}
        caption=""
      >
		  Гогуленко Ольга Николаевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/XjkDO4TSxHK913jF582wxzsdo8uHhv1EP5zOLw/xljHAE1oC9g.jpg" />}
        caption=""
      >
		  Жукова Елена Владимировна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/aIaG4sx1fX7eu9FkanGb2jYhliaiTPXm3jjXWQ/s9RGmS0JBdw.jpg" />}
        caption=""
      >
		  Бабушкина Татьяна Николаевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-17.userapi.com/07CgWNdBVbN_FF0VIJ1CaG-GyNDbFl1B1DMQxg/C95vmv55IBU.jpg" />}
        caption=""
      >
		  Калягина Марина Николаевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-48.userapi.com/2ibk-iP1uPSurbKglUxzyeWIhzcMmNMq50Nu_w/Knlu5eLnn-w.jpg" />}
        caption=""
      >
		  Корзина Юлия Викторовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/RSxmMaFc9BoLhkhTb0lf6Gcw7BMVv0LIUI8HeQ/r8k4SVfPwZ0.jpg" />}
        caption=""
      >
		  Белкина Наталия Георгиевна 
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/nCkP1ppjz4D5mAqs9oiVa1zF84Teg2r8rIztZg/eqAJyWvemPE.jpg" />}
        caption=""
      >
		  Занозина Ольга Дмитриевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-29.userapi.com/2-wMAIkbSlnHTaYcbhtOxBMoHIpv_Awr0EilTA/QreYmKQE2bQ.jpg" />}
        caption=""
      >
		  Маслова Светлана Сергеевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-14.userapi.com/wNVmc5rpkHzzvG0qHF7PeChQT2CO2lt_KZuciw/LGkTxCWX6xI.jpg" />}
        caption=""
      >
		  Пашкина Ольга Александровна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/wwQCcur2rbAv8fhI3BRF0mQa2gkxZRCghBhP1A/VhawKtfesq0.jpg" />}
        caption=""
      >
		  Пряхина Ирина Вячеславовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-34.userapi.com/PkVJLPp5F4T8QSMQf04lfk-UEK9zWEK9gHqjMA/TEqd_VgzYvw.jpg" />}
        caption=""
      >
		  Самсонова Надежда Сергеевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-27.userapi.com/abbBOq0T3WLy8uSmwF5gpSsT_qf8U_r6QiAcVg/KOaJfaSAYvA.jpg" />}
        caption=""
      >
		  Сёмина Марина Евгеньевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-29.userapi.com/AcdH7GuGBpkkt9Egb1pjkjmBEhnFpjxIdy6X1g/kPotniekMwE.jpg" />}
        caption=""
      >
		  Серова Татьяна Владимировна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/F4-0WYR1EN7x6-qv7AmRLrQstspLbhXWntikFw/TzpU-Rxsupk.jpg" />}
        caption=""
      >
		  Чернобай Екатерина Александровна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-60.userapi.com/KU-ErNXF0ko97q-QpeJWceB2ZjjWzKNVO6eYIQ/uKg4vPX7YV4.jpg" />}
        caption=""
      >
		  Каржиманова Галина Леонидовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-67.userapi.com/Y2z3mCJ_IJOURuBXtG-FKEKpe8X9hNdFEOtP8g/GzbHyb7qPkc.jpg" />}
        caption=""
      >
		  Сошнева Нина Михайловна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-13.userapi.com/LCnqiBh7UBHvrAXbZt076iz-LFEo1DKE5BE0eg/rKoB0jesLWY.jpg" />}
        caption=""
      >
		  Тренина Раиса Ивановна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-28.userapi.com/0fAl8qEcljMqZmoKh3B9tjytVDO31lwL_OPjDg/aB_jOs0FWQw.jpg" />}
        caption=""
      >
		  Турскова Екатерина Владимировна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/p5uOAeOoJce62Ss5BIfkATzjOlU2PFIuVE5x4g/lUsFbtGJVAA.jpg" />}
        caption=""
      >
		  Тюшева Елена Леонидовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/BZhAU-DgOXecBJ8mrB2_SAKBfhut_tPkXbEfag/HDO7sw3CNdg.jpg" />}
        caption=""
      >
		  Фролова Альбина Александровна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-51.userapi.com/P-amirtJKTu0l3qLh72VZwnKvj8T8shjMcxosQ/oJPzNrtB4NI.jpg" />}
        caption=""
      >
		  Разносчикова Татьяна Юрьевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-2.userapi.com/y24WJr-wgINjcchjm-hIpfVfhmdDo_TiAugDsA/esM5brVxZRM.jpg" />}
        caption=""
      >
		  Худина Марина Александровна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-46.userapi.com/_tN1cVRWmOygxexQEVxhV2DMgdWo0RITeLtRkA/W7_cVNGpGjM.jpg" />}
        caption=""
      >
		  Павлина Татьяна Леонидовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/0JxWS2eiPo05m6xY_yaZ9ngLq24x0Ikuh42VSQ/bP9QeLhaXc0.jpg" />}
        caption=""
      >
		  Швечкова Ольга Юрьевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/5EedWhRTqU8cUybFkw9x7R1sbkT5OwgDlnj7vw/xcr8usV7pV8.jpg" />}
        caption=""
      >
		Фоменко Ольга Алексеевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-9.userapi.com/3HBOYz41hFZwFhUZVmShjCbS38kOUE-KhNVnMQ/s3lPlO6fArQ.jpg" />}
        caption=""
      >
		  Смирнова Елена Сергеевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-58.userapi.com/udUfIKPDPfeiQq0_MlKg4vCBP7aISy6wfB-PBA/pF95FhDFgn8.jpg" />}
        caption=""
      >
		  Олейник Людмила Борисовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/XZQXNZF0s5lej7a_f0L6M_II88xedSMF8-ZcvA/nUVNZ16NOx4.jpg" />}
        caption=""
      >
		  Головченко Татьяна Степановна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-18.userapi.com/_ZxPvk2mLJlxYJZFyhA2yf_WwiMP79Ihp8hPUA/TA3vevtKxnw.jpg" />}
        caption=""
      >
		  Кузенкова Светлана Вадимовна
      </RichCell>
	  <br/>
	  <br/>
	  <br/>
	</Panel>
);

Vospitateli.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Vospitateli;