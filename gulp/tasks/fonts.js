import fs from 'fs';
import fonter from 'gulp-fonter';
// import ttf2woff2 from 'gulp-ttf2woff2';

export const fontsStyle = () => {
	// Файл стилей подключения шрифтов
	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
	// Проверяем существует ли файлы шрифтов
	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			// Проверяем существует ли файл стилей для подключения шрифтов
			if (!fs.existsSync (fontsFile)) {
				// Если файла нет, создаем его
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					// Записываем подключения шрифтов в файл стилей
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fonrWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
						if (fonrWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fonrWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fonrWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fonrWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fonrWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fonrWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (fonrWeight.toLowerCase() === 'extrabold') {
							fontWeight = 800;
						} else if (fonrWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else { 
							fontWeight= 400;
						}
						fs.appendFile(fontsFile,
							`"@font-face {
									font-family: ${fontName};
									font-display: swap;
									src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
									font-weight: ${fontWeight};
									font-style: normal;
							}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				// Если есть файл, выводим сообщение
				console.log("Файл scss/fonts.scss уже существует");
			}
		}
	});
	
	return app.gulp.src(`${app.path.srcFolder}`);
	function cb() { }
}
						
				
