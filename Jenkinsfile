pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx cucumber-js --publish-quiet'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'Playwright_With_Cucumber/test-results/**/*.json', allowEmptyArchive: true
            junit 'reports/**/*.xml'
        }

        failure {
            echo "Build failed. Check logs at ${env.BUILD_URL}"
        }
    }
}
