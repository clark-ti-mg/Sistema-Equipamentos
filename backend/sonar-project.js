const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: process.env.SONAR_HOST_URL || 'http://localhost:9000',
    options: {
      'sonar.login': process.env.SONAR_LOGIN,
      'sonar.projectKey': 'sistema-reserva-equipamentos-backend',
      'sonar.projectName': 'Sistema de Reserva de Equipamentos - Backend',
      'sonar.sources': 'src',
      'sonar.tests': 'test',
      'sonar.test.inclusions': 'test/**/*.test.js',
      'sonar.javascript.lcov.reportPaths': './coverage/lcov.info'
    }
  },
  () => {
    console.log('SonarQube scan completed!');
  }
);
