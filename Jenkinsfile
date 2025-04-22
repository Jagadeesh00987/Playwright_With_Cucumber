pipeline {
agent {
        docker {
            image 'mcr.microsoft.com/playwright:focal' // Official Playwright Docker image
            args '-u root' // Optional, in case you need root permissions
        }
    }

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
            mail to: 'you@example.com',
                 subject: "Jenkins Job Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Check console output at ${env.BUILD_URL}"
        }
    }
}
