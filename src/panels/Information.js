import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { Div, Caption } from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import persik from '../img/main-min.png';
import './Information.css';
import A from '../img/Эстетика/Новая папка/tAIBO_TOSbQ_optimized.png';
import B from '../img/Эстетика/Новая папка/9ukhY-oGk-Y_optimized.png';

const osName = platform();

const Information = props => (
  <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderBack>}>
			Информация
		</PanelHeader>
    <Caption weight= "bold" style={{ paddingTop: 20, paddingBottom: 20, textAlign: 'center' }}>ГБОУ "Лицей-интернат "Центр Одарённых Детей"</Caption>
		<img className="Information" src={persik} alt="Persik The Cat"/>
        <Div style={{ paddingTop: 20, paddingBottom: 20, color: 'gray' }}>
            ЦОД - это Государственное бюджетное общеобразовательное учреждение, реализующее программы среднего (полного) общего образования, программы повышенного уровня и дополнительного образования, осуществляющее физическое и интеллектуальное развитие.
            <br/>
            <br/>
            Набор в ЦОД ежегодно осуществляется в 10 класс на основании индивидуального отбора. В 11 класс прием допускается только на образовавшиеся в ходе образовательного процесса свободные места на основе индивидуального отбора. При посутплении учитываются достижения в учёбе, спорте, музыке и прочие.  
            <br/>
            <br/>
            В Учреждение принимаются обучающиеся, прописанные в Нижегородской области, кроме г. Нижний Новгород, г. Саров, г. Дзержинск и г. Арзамас.
            <br/>
            <br/>
            Индивидуальный отбор проводится в 4 этапа:
            <ul>I этап - экспертиза предоставленных для поступления документов</ul>
            <ul>II этап - вступительные испытания</ul>
            <ul>III этап - составление рейтинга достижений обучающихся</ul>
            <ul>IV этап - принятие решения о зачислении</ul>
            <img className="Information" src={A} alt="Persik The Cat"/>
            В лицее есть 6 профилей, по которым ведётся обучение:
            <ul>• Информационно-технологический</ul>
            <ul>• Историко-правовой</ul>
            <ul>• Естественно-научный</ul>
            <ul>• Физико-математический</ul>
            <ul>• Социально-экономический</ul>
            <ul>• Гуманитарный</ul>
            Основными задачами лицея являются: выявление и обучение наиболее способных детей из Нижегородской области; развитие личности, ее самореализация и самоопределение; формирование у воспитанников современного уровня знаний; воспитание гражданственности, трудолюбия, уважения к правам и свободам человека, любви к окружающей природе, Родине, семье; создание условий для осознанного выбора профессии; формирование духовно-нравственной личности.
            <br/>
            <br/>
            Многие выпускники лицея являются студентами лучших ВУЗов Нижегородской области и России: ННГУ им. Н.И.Лобачевского, НГТУ им. Р.Е.Алексеева, НГЛУ им. Н.А.Добролюбова, НИУ ВШЭ, НИУ ИТМО, МГУ, СПбГУ, МГТУ им. Н.Э.Баумана, МГИМО, РЭУ им. Г.В. Плеханова и т.д.
            <img className="Information" src={B} alt="Persik The Cat"/>
            <br/>
            <br/>
            <br/>
          </Div>
	</Panel>
);

Information.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Information;
