import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';


const News = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
			Новости
		</PanelHeader>
      <Banner
        after={<Icon28UserAddOutline />}
        mode="image"
        size="m"
        header={<span>9 мая</span>}
        subheader="07.05.2020"
        background={
          <div
            style={{
              backgroundColor: '#000',
              backgroundImage: 'url(https://sun1-18.userapi.com/3GAQX3rJ6mq9YkZGKSlQ_Bai0AxZ526UdfZN5g/s0NZSfGRzvs.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 340,
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
      actions={<Button mode="overlay" onClick={go} data-to="n3" size="l">Подробнее</Button>}
      />
      <Banner
        mode="image"
        size="m"
        header={<span>Лицей в рейтингах <br/> RAEX</span>}
        subheader="23.04.2020"
        background={
          <div
            style={{
              backgroundColor: '#000',
              backgroundImage: 'url(https://sun9-22.userapi.com/Cy4cxYHaGbPgU83JuORVjn0KsJfSk6-j7UflQA/13XiFwdAqKg.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 340,
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        actions={<Button mode="overlay" onClick={go} data-to="n2" size="l">Подробнее</Button>}
      />
      <Banner
        mode="image"
        size="m"
        header={<span>Встреча <br />с летчиком-космонавтом<br/>Волковым С.А.</span>}
        subheader="13.03.2020"
        background={
          <div
            style={{
              backgroundColor: '#000',
              backgroundImage: 'url(https://sun1-95.userapi.com/KZTIm7c700BfRM-rSWrG5WBGEFn2IIuQNX09PQ/MUzWAuoB7kQ.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 340,
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        actions={<Button mode="overlay" onClick={go} data-to="n1" size="l">Подробнее</Button>}
      />
      <br/>
      <br/>
      <br/>
	</Panel>
);

News.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default News;