
import React, {useState} from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// import { Link } from "react-router-dom";
import en_USpng from "../../assets/img/flags/en_US.png";
import it_ITpng from "../../assets/img/flags/it_IT.png";
import ru_RUpng from "../../assets/img/flags/ru_RU.png";
import vi_VNpng from "../../assets/img/flags/vi_VN.png";
import de_DEpng from "../../assets/img/flags/de_DE.png";
import tr_TRpng from "../../assets/img/flags/tr_TR.png";
import ko_KRpng from "../../assets/img/flags/ko_KR.png";
import ja_JPpng from "../../assets/img/flags/ja_JP.png";
import ka_GEpng from "../../assets/img/flags/ka_GE.png";
import sr_MEpng from "../../assets/img/flags/sr_ME.png";
import th_THpng from "../../assets/img/flags/th_TH.png";
import zh_CNpng from "../../assets/img/flags/zh_CN.png";
import zh_TWpng from "../../assets/img/flags/zh_TW.png";
import fr_FRpng from "../../assets/img/flags/fr_FR.png";
import es_ESpng from "../../assets/img/flags/es_ES.png";

// reactstrap components
import {
 Form,
 Input
} from "reactstrap";

function Header() {
    let langArray = [
        {
            name: 'Italian',
            img: it_ITpng,
            url: 'home.html?&amp;language=it_IT'
        },
        {
            name: 'Russian',
            img: ru_RUpng,
            url: 'home.html?&amp;language=ru_RU'
        },
        {
            name: 'Vietnamese',
            img: vi_VNpng,
            url: 'home.html?&amp;language=vi_VN'
        },
        {
            name: 'German',
            img: de_DEpng,
            url: 'home.html?&amp;language=de_DE'
        },
        {
            name: 'Turkish',
            img: tr_TRpng,
            url: 'home.html?&amp;language=tr_TR'
        },
        {
            name: 'Korean',
            img: ko_KRpng,
            url: 'home.html?&amp;language=ko_KR'
        },
        {
            name: 'Japanese',
            img: ja_JPpng,
            url: 'home.html?&amp;language=ja_JP'
        },
        {
            name: 'Georgian',
            img: ka_GEpng,
            url: 'home.html?&amp;language=ka_GE'
        },
        {
            name: 'Serbian',
            img: sr_MEpng,
            url: 'home.html?&amp;language=sr_ME'
        },
        {
            name: 'Thai',
            img: th_THpng,
            url: 'home.html?&amp;language=th_TH'
        },
        {
            name: 'Chinese',
            img: zh_CNpng,
            url: 'home.html?&amp;language=zh_CN'
        },
        {
            name: 'Chinese2',
            img: zh_TWpng,
            url: 'home.html?&amp;language=zh_TW'
        },
        {
            name: 'French',
            img: fr_FRpng,
            url: 'home.html?&amp;language=fr_FR'
        },
        {
            name: 'Spanish',
            img: es_ESpng,
            url: 'home.html?&amp;language=es_ES'
        },
    ];
    let langList = [];
    for (let i = 0; i<langArray.length; i++) {
        langList.push(<li key={langArray[i].name}><a className="leng-flag" style={{backgroundImage:`url(${langArray[i].img})`}} href={langArray[i].url}>{langArray[i].name}</a></li> )
    };
    return (
    <>
        <div className="header-top d-flex justify-content-end justify-content-xl-between">
            <div className="header-left d-none d-xl-block">
                <form id="language-form" action="#" method="post" className="g-left">
                    <ul className="top-lang-menu" id="lang-menu-js">
                        <li>
                            <a href="home.html?&amp;language=en_US" className="b-menuleng-right-bg b-menuleng-bg-pos">
                                <span className="leng-flag" style={{backgroundImage:`url(${en_USpng})`}} >Euro (EN) </span>
                                <span className="b-menuleng-right "></span>
                            </a>
                            <ul className="leng-list">
                                <li className="region-selector"><span>Region:</span></li>
                                <li>
                                    <a className="g-ellipsis region-item region-item-asian" href="asian/index.html">
                                        <span></span>Asian
                                    </a>
                                </li>
                                <li>
                                    <a className="g-ellipsis region-item region-item-euro" href="euro/index.html">
                                        <span></span>Euro
                                    </a>
                                </li>
                                <li>
                                    <a className="g-ellipsis region-item region-item-american" href="american/index.html">
                                        <span></span>American
                                    </a>
                                </li>
                                <li className="region-selector">
                                    <span>Language:</span>
                                </li>
                                {langList}
                            </ul>
                        </li>
                        <li>
                        <a href="home.html?&amp;language=en_US" className="b-menuleng-right-bg b-menuleng-bg-pos">
                                <span className="leng-flag" >Decimal</span>
                                <span className="b-menuleng-right "></span>
                            </a>
                            <ul className="leng-list">
                                <li>
                                    <a className="g-ellipsis region-item region-item-asian" href="asian/index.html">
                                        Malay
                                    </a>
                                </li>
                                <li>
                                    <a className="g-ellipsis region-item region-item-euro" href="euro/index.html">
                                        American
                                    </a>
                                </li>
                                <li>
                                    <a className="g-ellipsis region-item region-item-american" href="american/index.html">
                                        Hong Kong
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <a className="top-link mobile-theme-switcher" href="home.html">Mobi</a>
                        <a className="top-link fixtures-top-link" href="print/index.html">Fixtures</a>
                        {/* <li>
                            <input type="hidden" name="odd_format" id="odd_format"/>
                                <a href="javascript:;" onClick="changeOddsFormat('EU')" className="b-menuleng_right_bg text_box b-menudec_bg_pos">
                                    <span>Decimal</span>
                                    <span className="b-menuleng_right">&nbsp;</span>
                                </a>
                            <ul className="dec_list">
                                <li>
                                    <a className="g-ellipsis" href="javascript:;" onClick="changeOddsFormat('MY')">Malay</a>
                                </li>
                                <li>
                                    <a className="g-ellipsis" href="javascript:;" onClick="changeOddsFormat('US')">American</a>
                                </li>
                                <li>
                                    <a className="g-ellipsis" href="javascript:;" onClick="changeOddsFormat('HK')">Hong Kong</a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </form>
            </div>
            <div className="header-right">
                <div className="d-none align-items-center h-100 d-md-flex">
                    <a href="register/index.html" className="b-link">Join Now</a>
                    <a href="lost_password/index.html" className="b-link">Lost Pass?</a>
                </div>
                <Form className="loginbox">
                    {/* <input type="hidden" name="sec" value="400001"/>
                    <input type="hidden" name="subsec" value="check"/>
                    <input type="hidden" name="password" value="Proceed"/>
                    <input type="hidden" name="username" id="username"/> */}

                    <div className="b-usermenu">
                        <Input type="text" name="username" id="username" className="b-input" placeholder="Username"></Input>
                    </div>
                    <div className="b-usermenu">
                        <div className="b-input">
                            <Input type="password" name="password" id="password" className="b-input" placeholder="Password"></Input>
                            <a className="button-forgot" id="forgot_2">forgot?</a>
                        </div>
                    </div>
                    <a href="#" className="btn-login">Login</a>
                </Form>
            </div>
        </div>
    </>
    );
}

export default Header;
