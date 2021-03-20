import React from 'react'
import MaleAvatar from "../assets/images/maleAvatar.svg";

export default Images = {
    'product': {
        'PLN': require('../assets/images/pln.png'),
        'PDAM': require('../assets/images/pdam.png'),
        'Game': require('../assets/images/game.png'),
        'Internet': require('../assets/images/internet.png'),
        'EWALLET': require('../assets/images/ewallet.png'),
        'Prabayar': require('../assets/images/prabayar.png'),
        'Pascabayar': require('../assets/images/pascabayar.png'),
        'TV': require('../assets/images/tv.png'),
    },
    'ecommerce': {
        'iphone8': require("../assets/images/ip8.png"),
        'iphone11': require("../assets/images/iphone11.png"),
        'laptop': require("../assets/images/laptop.png"),
        'vivo': require("../assets/images/vivo.png"),
        'redmi': require("../assets/images/redmi.png"),
        'mbp': require("../assets/images/mbp.png"),
        'mba': require("../assets/images/mba.png"),
    },
    'category': {
        'bill': require("../assets/images/bill.png"),
        'electronic': require("../assets/images/electronic.png"),
        'shoppingBag': require("../assets/images/shoppingBag.png"),
        'merchant': require("../assets/images/merchant.png"),
        'menFashion': require("../assets/images/menFashion.png"),
        'womanFashion': require("../assets/images/womanFashion.png"),
    },
    logo: require("../assets/images/fornite.png"),
    user: require("../assets/images/user.png"),
    maleAvatar: () => <MaleAvatar height={40} width={40} />,
};