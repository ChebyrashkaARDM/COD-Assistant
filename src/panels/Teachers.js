import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { Avatar } from '@vkontakte/vkui';
import RichCell from '@vkontakte/vkui/dist/es6/components/RichCell/RichCell';
import './Persik.css';

const osName = platform();

const Teachers = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="useful">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Учителя
		</PanelHeader>
		<RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/wPBM9p8_OoAHtuaxoxV5_lVO0oavv3vD7TxLoA/Ox2A5PPUc94.jpg" />}
        caption="Учитель математики"
      >
        Аксёнова Марина Александровна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-38.userapi.com/OUBkI3MWafZ_UhyibBp4f9U-p9VzAlTkDpMEDw/9r-G8mZuNQ4.jpg" />}
        caption="Учитель математики"
      >
        Каткова Галина Геннадьевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/Y9rI7XYRNVvoAtNRICx6zSh0pCeokPFPwaef7g/gW56KOC66b8.jpg" />}
        caption="Учитель математики"
      >
        Заворотная Мария Викторовна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/LV98IWESb9hkAiJSPQylbBl-B4VyYB1DBbHFWg/Lnv41HWaC3s.jpg" />}
        caption="Учитель математики"
      >
        Кадиленко Наталья Сергеевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-30.userapi.com/PunlKVzlcW6XeoE0lAM4Pfl1drC6TVMxGIe1oA/JA-9sNtDZ-Y.jpg" />}
        caption="Учитель математики"
      >
        Ненашева Елена Васильевна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-24.userapi.com/zVu3iw73Cl5NV_Kj3yReGs9kL1Hg66HWcxLNVg/iiuQzNWI_AA.jpg" />}
        caption="Учитель информатики"
      >
        Кузина Ольга Владимировна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-34.userapi.com/pIWvdCzuyhJgq7eeDu4HzG9SVKIrUIhyRGxjtQ/UKCeR84Nlvs.jpg" />}
        caption="Учитель информатики"
      >
        Лазарева Мария Владимировна
      </RichCell>
	  <RichCell
    disabled
    multiline
        before={<Avatar size={48} src="https://sun9-57.userapi.com/Fes42iqsW6uMWAx0c6z2NE4uqlG3-fFn2vhz6g/BxIRXkbVEsk.jpg" />}
        caption="Учитель биологии"
      >
        Овчинникова Светлана Васильевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-36.userapi.com/DXeGtdshuI0791IFI7P3e_prlWic-R22W6wOow/yQwOgjH5OBs.jpg" />}
        caption="Учитель русского языка и литературы"
      >
        Максимова Елена Александровна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/1LH0PQ3DuKjoJMusjuaqVQqWYbGiY9USLiQ8eA/A3ivMEoPZqU.jpg" />}
        caption="Учитель русского языка и литературы"
      >
        Ефремова Ирина Николаевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-48.userapi.com/8w89nRrgv7u5sIdCRInIQ11OG5e5OGGYMncgLg/7VN3e2-RsP0.jpg" />}
        caption="Учитель русского языка и литературы"
      >
        Гораздова Светлана Александровна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-64.userapi.com/sZMi2udNi1eaamD6CuTRGOvRatK1nmkHw6P7LQ/RmJuFD8olBQ.jpg" />}
        caption="Учитель экономики"
      >
        Терехова Наталья Владимировна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-24.userapi.com/tEOQfkDmSc-ro4T6yNxC3uSdkpJO1gv_w0XbdQ/w28i_GoIFuU.jpg" />}
        caption="Учитель физической культуры"
      >
        Кокишев Геннадий Иванович
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-19.userapi.com/3vawNKZgYICIgX9sFNk7NAvZcgKKvrB41MpK8Q/1k-dm6tQZ1Y.jpg" />}
        caption="Учитель физической культуры"
      >
        Оленева Наталья Борисовна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/KI20_OYsmNO1inprqhAN_J78fXyHrG7URdPCLw/jLftmQyBLlk.jpg" />}
        caption="Учитель физической культуры"
      >
        Сычёва Мария Александровна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-50.userapi.com/sAkDvLQJIGQh2nDm6lbJ5Y-5gYTFyZFrfqyMBg/DKPwtL3mb00.jpg" />}
        caption="Учитель химии"
      >
        Трухина Ольга Евгеньевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-26.userapi.com/kXfAeQS-B1NG1a4ukXHE5myBgg5qPTxHqHqQSQ/fhOjilZIcAw.jpg" />}
        caption="Учитель обществознания"
      >
        Перепелов Сергей Владимирович
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/OIT0ikaAgw4BmU2sxrt6p-44uQTtxD_LtqLlQw/NJ8pXI0F0Cw.jpg" />}
        caption="Учитель английского языка"
      >
       Гадалова Наталья Владимировна 
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun2.tele2-nn.userapi.com/8ujjQiCJHLph_pzN5FmpcJ2VLbNLMM3E7lxLoQ/zQX5o-7nzYU.jpg" />}
        caption="Учитель английского языка"
      >
        Шумская Светлана Валерьевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-52.userapi.com/Ul5wo-yb2n4ok1Ju7t1a_eKuWu-ihL-__GBg-w/h8Rkb0z31yQ.jpg" />}
        caption="Учитель английского языка"
      >
        Сможная Анна Николаевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/SpK6VmSHBwd44qKemOzIdYLn8VdjyUiWWGPYmw/imJzSuBnkyk.jpg" />}
        caption="Учитель английского языка"
      >
        Семёнова Елена Дмитриевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-64.userapi.com/_9Z0LYaCJO1FJUlSzMmXpDvWhp4Rf2NIhVhZTw/yA-HN8kOKSs.jpg" />}
        caption="Учитель английского языка"
      >
        Емельянова Татьяна Михайловна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-65.userapi.com/UrrerbNFjmrycOozFY9HKXTIR_t0tN7n58hivA/IduStjf5_xk.jpg" />}
        caption="Учитель истории"
      >
        Петрухина Елена Борисовна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/Vvw4qwXsZ0xUOTUjDxZ2zGs1ZFao_KWeCoa41g/172LGQmn78E.jpg" />}
        caption="Учитель истории"
      >
        Кокорина Ирина Николаевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun1.tele2-nn.userapi.com/INtFz6M1HS4V56F_feV1i33ISiRNp0g-fms2bw/7DSM4byHtII.jpg" />}
        caption="Учитель физики"
      >
        Толкова Светлана Валерьевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-53.userapi.com/ZWlnaHLps3t2eG6ywqVHvqmhYVU_yEy69h76aw/6fKojvdptoI.jpg" />}
        caption="Учитель физики"
      >
        Степанова Ольга Юрьевна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-55.userapi.com/bRX4bOVQZJujfEN9QEFy4NaRxhc-eSh9pTJb5Q/ny2eGcVcqYE.jpg" />}
        caption="Психолог лицея "
      >
        Кутковая Марина Александровна
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-55.userapi.com/hHqngAqVelO8xU0cQWgUKFhMOzu8k3NWMJkb5Q/Ew6TqFDmF5I.jpg" />}
        caption="Психолог лицея"
      >
        Ефимова Светлана Вячеславовна 
      </RichCell>
      <RichCell
      disabled
      multiline
        before={<Avatar size={48} src="https://sun9-63.userapi.com/0vRx609B74COWm4Jds4yfj-LEIO4lgCYWSeObQ/MCZkj7SLtvs.jpg" />}
        caption="Учитель ОБЖ"
      >
        Комов Геннадий Алексеевич
      </RichCell>
      <br/>
      <br/>
      <br/>
	</Panel>
);

Teachers.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Teachers;