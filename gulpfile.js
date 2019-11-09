const gulp = require('gulp');
const rsync = require('gulp-rsync');
const GulpSSH = require('gulp-ssh');
const GulpShell = require('gulp-shell');
const fs = require('fs');

gulp.task('build', GulpShell.task('sudo npm run build'))

function deploy() {
  return gulp.src(['build/**'])
    .pipe(rsync({
      hostname: '40.76.5.158',
      username: 'dev',
      destination: '/home/dev/MLZ.WEB',
      archive: true,
      silent: false,
      compress: true
    }));
}

function deployRestart() {
  const gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: {
      host: '40.76.5.158',
      port: 22,
      username: 'dev',
      privateKey: fs.readFileSync('/home/sam/.ssh/id_rsa3'),
    }
   });

  return gulpSSH
    .shell(['cd MLZ.WEB', 'pm2 restart MLZ.WEB_2003'])
    .pipe(gulp.dest('logs'))
}

gulp.task('deploy', [ 'build' ], deploy);
gulp.task('deploy-restart', [ 'deploy' ], deployRestart);