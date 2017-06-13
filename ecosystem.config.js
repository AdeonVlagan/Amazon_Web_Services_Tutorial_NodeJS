module.exports = {
apps: [{
name: 'awstutorial',
script: './index.js'
}],
deploy: {
production: {
user: 'ubuntu',
host: 'ec2-52-29-114-109.eu-central-1.compute.amazonaws.com',
key: '~/.ssh/AdeonWinduAWSPairKey.pem',
ref: 'origin/master',
repo: 'git@github.com:AdeonVlagan/Amazon_Web_Services_Tutorial_NodeJS.git',
path: '/home/ubuntu/awstutorial',
'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
}
}
}
