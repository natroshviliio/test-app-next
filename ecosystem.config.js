module.exports = {
    apps: [{
        script: "npm start"
    }],

    deploy: {
        production: {
            key: "key.pem",
            user: "ioane",
            host: "192.168.30.132",
            ref: "origin/main",
            repo: "https://github.com/natroshviliio/test-app-next.git",
            path: "/home/ioane",
            'pre-deploy-local': '',
            'pre-deploy': "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
            'pre-setup': "",
            'ssh_options': "ForwardAgent=yes",
        }
    }
}