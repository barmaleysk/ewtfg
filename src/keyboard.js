const kb = require ('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.buy, kb.home.faq],
        [kb.home.vacancy, kb.home.delivery]

    ],

    orders: [
        [kb.order.tobuyrub, kb.order.tobuyuah],
        [kb.back]
    ],

    kolvorub: [
        [kb.howmuchrub.tenr, kb.howmuchrub.twentyr],
        [kb.back]

    ],

    kolvouah: [
        [kb.howmuchrub.tenr, kb.howmuchrub.twentyr],
        [kb.back]

    ],



    city1: [
        [kb.choosecity1],
        [kb.back]
    ],

    city2: [
        [kb.choosecity2],
        [kb.back]
    ],

    deliveryone: [
        [kb.deliverytype1.klad],
        [kb.deliverytype1.post],
        [kb.deliverytype1.kurier],
        [kb.back]
    ],
    deliverytwo: [
        [kb.deliverytype2.email],
        [kb.deliverytype2.teleg],
        [kb.deliverytype2.anymes],
        [kb.back]
    ],

    heis: [
        [kb.whois],
        [kb.back]
    ],



    alldone: [
        [kb.donet],
        [kb.back]
    ]


}