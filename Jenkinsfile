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
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cucumber-js --publish-quiet'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/**/*.json', allowEmptyArchive: true
            junit 'reports/**/*.xml'
        }

        failure {
            echo "Build failed. Check logs at ${env.BUILD_URL}"
        }
    }
}
