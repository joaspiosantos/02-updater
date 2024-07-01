import './updater.css';
import { check, Update } from '@tauri-apps/plugin-updater';

function App() {
	check().then(async (response) => {
		if (response?.available) {
			console.log('teste');
			const update = new Update(response);
			const teste = await update.downloadAndInstall();
			console.log(teste);
		}
	});
	return (
		<section className='w-full h-screen flex bg-neutral-950'>
			<article className='container mx-auto flex flex-col justify-center flex-1 items-center text-neutral-50'>
				<h1 className='text-2xl font-black'>AUTO UPDATER</h1>
				<p className='text-neutral-200 font-medium'>
					Este projeto tem como objetivo me esclarecer como desenvolver um auto-updater para minhas aplicações em Tauri.
					Atualmente estou usando o BETA do v2.
				</p>
			</article>
			<p className='text-neutral-400 absolute bottom-0 right-0 p-2'>Versão atual do projeto: v0.0.1</p>
		</section>
	);
}

export default App;
