	// Получаем имя папки проекта
	import * as nodePath from 'path';
	const rootFolder = nodePath.basename(nodePath.resolve());
	
	const buildFolder = `./dist`;
	const srcFolder = `./src`;
	
	export const path = {
		build: {
			css: `${buildFolder}/css/`,
			html: `${buildFolder}/`,
			images: `${buildFolder}/img/`,
			fonts: `${buildFolder}/fonts/`,
			files: `${buildFolder}/files/`
		},
		src: {
			scss: `${srcFolder}/scss/style.scss`,
			html: `${srcFolder}/*.html`,
			images: `${srcFolder}/asserts/img/**/*.{jpg,jpeg,png,gif}`,
			svg: `${srcFolder}/asserts/img/**/*.svg`,
			fonts: `${srcFolder}/asserts/fonts/**/*.{woff,woff2}`,
			files: `${srcFolder}/files/**/*.*`
		},
		watch: {
			scss: `${srcFolder}/scss/**/*.scss`,
			html: `${srcFolder}/**/*.html`,
			images: `${srcFolder}/asserts/img/**/*.{jpg,jpeg,png,gif,svg}`,
			fonts: `${srcFolder}/asserts/fonts/**/*.{woff,woff2}`,
			files: `${srcFolder}/files/**/*.*`
		},
		clean: buildFolder,
		buildFolder: buildFolder,
		srcFolder: srcFolder,
		rootFolder: rootFolder,
		https: ``
	}