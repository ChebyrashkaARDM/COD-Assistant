import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Information from './panels/Information';
import Home from './panels/Home';
import Persik from './panels/Persik';
import News from './panels/News';
import Useful from './panels/Useful';
import Tests from './panels/Tests';
import Contacts from './panels/Contacts';
import Teachers from './panels/Teachers';
import Menu from './panels/Menu';
import Vospitateli from './panels/Vospitateli';
import Lessons from './panels/Lessons';
import Aesthetics from './panels/Aesthetics';
import Rukovodstvo from './panels/Rukovodstvo';
import N1 from './panels/N1';
import N2 from './panels/N2';
import N3 from './panels/N3';
import N4 from './panels/N4';
import N5 from './panels/N5';
import N6 from './panels/N6';
import { TabbarItem, Tabbar } from '@vkontakte/vkui';
import Icon24NewsFeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	
		
	useEffect(() => {
		bridge.send("VKWebAppInit", {});
		bridge.subscribe(({ detail: { type, data }}) => {
		if (type === 'VKWebAppUpdateConfig') {
		  SetScheme(data.scheme)
		}
	  });
	  }, []);

	const [scheme, SetScheme] = useState('VKWebAppUpdateConfig');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider isWebView={true} scheme={scheme}>
			<Tabbar>
			<TabbarItem text="Главная" onClick={go} data-to="home"><Icon24Home/></TabbarItem>
			<TabbarItem text="Лицей" onClick={go} data-to="useful"><Icon24Education/></TabbarItem>
			<TabbarItem text="Новости" onClick={go} data-to="news"><Icon24NewsFeed/></TabbarItem>
			<TabbarItem text="Тесты ЕГЭ" onClick={go} data-to="tests"><Icon24Write/></TabbarItem>
			</Tabbar>
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<Information id='information' go={go} />
			<Contacts id='contacts' go={go} />
			<Useful id='useful' go={go} />
			<Teachers id='teachers' go={go} />
			<Menu id='menu' go={go} />
			<Aesthetics id='aesthetics' go={go} />
			<Vospitateli id='vospitateli' go={go} />
			<Lessons id='lessons' go={go} />
			<Rukovodstvo id='rukovodstvo' go={go} />
			<News id='news' go={go} />
			<Tests id ='tests' go={go} />
			<N1 id='n1' go={go} />
			<N2 id='n2' go={go} />
			<N3 id='n3' go={go} />
			<N4 id='n4' go={go} />
			<N5 id='n5' go={go} />
			<N6 id='n6' go={go} />
		</View>
			
		</ConfigProvider>	
	);
}

export default App;