module.exports = {
    title: '小班在读',
    head: [
        ['link', {rel: 'icon', href: 'https://open.weixin.qq.com/qr/code?username=a_javaboy'}]
    ],
    base:'HWHIHA',
    themeConfig: {
        logo: 'https://open.weixin.qq.com/qr/code?username=a_javaboy',
        nav: [
            {text: '首页', link: '/'},
            {text: '国际站', link: 'http://www.javaboy.org'},
            {text: '国内站', link: 'http://www.itboyhub.com'}
        ],
        sidebar: [
            {
                title: 'Java',
                path: '/java/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/java/java-1'
                ]
            }
        ]
    }
};
