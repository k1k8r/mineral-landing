//Подключаем модули Gulp
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const imgCompresed = require('gulp-imagemin');
const browserSinc = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

//Порядок подключения SCSS файлов
const scssFiles = [
	'./src/scss/normalize.scss',
	'./src/scss/variables.scss',
	'./src/scss/header.scss',
	'./src/scss/application.scss',
	'./src/scss/advantages.scss',
	'./src/scss/hero.scss'
]

// Порядок подключения JS файлов
const jsFiles = [
	'./src/js/burger.js',
	'./src/js/popup.js',
]

//Таск на стили CSS
gulp.task('styles', () => {
	//Шаблон для поиска файлов CSS
	//Все файлы по шаблону '.src/css/**/*.css'
	return gulp.src(scssFiles)
		//Путь в бразуере на строчку кода
		.pipe(sourcemaps.init())
		//Компиляция SCSS в CSS
		.pipe(sass())
		// Объединение файлов в один
		.pipe(concat('style.css'))
		//Добавить префиксы
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		// Минификация CSS
		.pipe(cleanCSS({
			level: 2
		}))
		//Инициализация 'карты'
		.pipe(sourcemaps.write('./'))
		//Выходная папка для стилей
		.pipe(gulp.dest('./build/css'))
		//Отслеживание CSS
		.pipe(browserSinc.stream());
});

//Таск на скрипты JS
gulp.task('scripts', () => {
	//Шаблон для поиска файлов JS
	//Все файлы по шаблону '.src/js/**/*.js'
	return gulp.src(jsFiles)
		// Объединение файлов в один
		.pipe(concat('script.js'))
		// Минификация JS
		.pipe(uglify({
			toplevel: true
		}))
		//Выходная папка для стилей
		.pipe(gulp.dest('./build/js'))
		//Отслеживание JS
		.pipe(browserSinc.stream());

});

//Удалить все в указанной папке
gulp.task('clean', () => {
	return del(['build/*'])
});

// Сжатие изображений
gulp.task('img-compress', () => {
	return gulp.src('./src/img/**')
		.pipe(imgCompresed({
			progressive: true
		}))
		.pipe(gulp.dest('./build/img/'))
});

// Отслеживать файлы
gulp.task('watch', () => {
	browserSinc.init({
		server: {
			baseDir: "./"
		}
	})
	gulp.watch('./src/img/**', gulp.series('img-compress'))
	//Следить за SCSS файлами
	gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
	//Следить за JS файлами
	gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
	//При изменении HTML запустить синхронизацию
	gulp.watch('./*.html').on('change', browserSinc.reload);
});


//Таск по умолчанию, Запускает clean, styles, scripts, и watch
gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'scripts', 'img-compress'), 'watch'));