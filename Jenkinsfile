pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Website'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Website'
            }
        }

        stage('Check Firebase') {
            steps {
                bat '"C:\\Users\\mjana\\AppData\\Roaming\\npm\\firebase.cmd" --version'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                bat '"C:\\Users\\mjana\\AppData\\Roaming\\npm\\firebase.cmd" deploy --token %FIREBASE_TOKEN%'
            }
        }
    }

    post {
        success {
            echo 'Website deployed successfully to Firebase!'
        }

        failure {
            echo 'Deployment failed.'
        }
    }
}
