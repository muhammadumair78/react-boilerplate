export default {
    development: {
        BASE_URL: 'https://agdefensebe-dev.azurewebsites.net/api/v1/',
        firebaseConfig: {
            apiKey: 'AIzaSyASGiV3AnX9ac7_-jjSG0eSFPNRUUp2Y7g',
            authDomain: 'agiledefense-dev.firebaseapp.com',
            databaseURL: 'https://agiledefense-dev.firebaseio.com',
            projectId: 'agiledefense-dev',
            storageBucket: 'agiledefense-dev.appspot.com',
            messagingSenderId: '587932449170',
        },
    },
    staging: {
        BASE_URL: 'https://agdefensebe-stage.azurewebsites.net/api/v1/',
        firebaseConfig: {
            apiKey: 'AIzaSyANw-rJBJqI3NJ2YgWhMqW17uxlE6_CJMM',
            authDomain: 'agiledefense-stage.firebaseapp.com',
            databaseURL: 'https://agiledefense-stage.firebaseio.com',
            projectId: 'agiledefense-stage',
            storageBucket: 'agiledefense-stage.appspot.com',
            messagingSenderId: '876719514079',
        },
    },
    qa: {
        BASE_URL: 'https://agdefensebe-qa.azurewebsites.net/api/v1/',
        firebaseConfig: {
            apiKey: 'AIzaSyCDFf3kpd4q1y9VGh_VmZpDQzvtpSO4SrY',
            authDomain: 'agiledefense-qa.firebaseapp.com',
            databaseURL: 'https://agiledefense-qa.firebaseio.com',
            projectId: 'agiledefense-qa',
            storageBucket: 'agiledefense-qa.appspot.com',
            messagingSenderId: '656482852304',
        },
    },
    production: {
        BASE_URL: 'https://api.sandboxbid.com/api/v1/',
        firebaseConfig: {
            apiKey: 'AIzaSyBe46YOBzhigSO8s2PczWsUh_tA02_HNMs',
            authDomain: 'agiledefense-prod.firebaseapp.com',
            databaseURL: 'https://agiledefense-prod.firebaseio.com',
            projectId: 'agiledefense-prod',
            storageBucket: 'agiledefense-prod.appspot.com',
            messagingSenderId: '1038432592997',
        },
    },
};
