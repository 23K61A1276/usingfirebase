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

        stage('Deploy to Firebase') {
            steps {
                bat 'firebase deploy --token %FIREBASE_TOKEN%'
            }
        }
    }
}