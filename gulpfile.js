/**
 * Created by Administrator on 2017/7/6.
 */
// ��ȡ gulp
var gulp = require('gulp');

// ��ȡ uglify ģ�飨����ѹ�� JS��
var uglify = require('gulp-uglify');
// ѹ�� js �ļ�
    // ��������ʹ�� gulp script ����������
    gulp.task('script', function() {
        // 1. �ҵ��ļ�
        gulp.src('js/*.js')
            // 2. ѹ���ļ�
            .pipe(uglify())
            // 3. ���ѹ������ļ�
            .pipe(gulp.dest('dist/js'))
    });

    // ��������ʹ�� gulp auto ����������
    gulp.task('auto', function () {
        // �����ļ��޸ģ����ļ����޸���ִ�� script ����
        gulp.watch('js/*.js', ['script'])
    });

    // ʹ�� gulp.task('default') ����Ĭ������
    // ��������ʹ�� gulp ���� script ����� auto ����
    gulp.task('default', ['script', 'auto']);


// ��ȡ minify-css ģ�飨����ѹ�� CSS��
var minifyCSS = require('gulp-minify-css');

// ѹ�� css �ļ�
// ��������ʹ�� gulp css ����������
gulp.task('css', function () {
    // 1\. �ҵ��ļ�
    gulp.src('css/*.css')
        // 2\. ѹ���ļ�
        .pipe(minifyCSS())
        // 3\. ���Ϊѹ���ļ�
        .pipe(gulp.dest('dist/css'))
});

// ��������ʹ�� gulp auto ����������
gulp.task('auto', function () {
    // �����ļ��޸ģ����ļ����޸���ִ�� css ����
    gulp.watch('css/*.css', ['css'])
});

// ʹ�� gulp.task('default') ����Ĭ������
// ��������ʹ�� gulp ���� css ����� auto ����
gulp.task('default', ['css', 'auto']);


// ��ȡ gulp-imagemin ģ��
var imagemin = require('gulp-imagemin');

// ѹ��ͼƬ����
// ������������ gulp images ����������
gulp.task('images', function () {
    // 1. �ҵ�ͼƬ
    gulp.src('images/*.*')
        // 2. ѹ��ͼƬ
        .pipe(imagemin({
            progressive: true
        }))
        // 3. ���ͼƬ
        .pipe(gulp.dest('dist/images'))
});

// ��������ʹ�� gulp auto ����������
gulp.task('auto', function () {
    // �����ļ��޸ģ����ļ����޸���ִ�� images ����
    gulp.watch('images/*.*)', ['images'])
});

// ʹ�� gulp.task('default') ����Ĭ������
// ��������ʹ�� gulp ���� images ����� auto ����
gulp.task('default', ['images', 'auto'])
