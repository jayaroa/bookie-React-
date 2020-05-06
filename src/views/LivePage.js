import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import Sidebar from "components/Sidebar/Sidebar.js";
import sports from '../data/sports.json'

// reactstrap components
import {
  Nav,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Row,
  Col,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

function LivePage(props) {
  const [activeTab, setActiveTab] = useState({
    betCart: true,
    cashOut: false
  });
  const {betCart, cashOut} = activeTab
  // useEffect(() =>
  //   fetch("../data/sports.json")
  //     // .then(res => res.json())
  //     .then(res => console.log("resss==>>>", res))
  //     .catch((err) => console.log("err==>>", err) )
  // );
  // console.log("dddd",sports.data.map(i => i))

  return (
    <>
      <div className="live-page">
        <div className="content1">
          <Row>
            <Col xl="3" lg="3" md="3">
              <div className="live_sched">
                <a href="index.html" id="schedule_" className="b-gap m-gap_l">
                  Calendar
                </a>
              </div>
            </Col>
            <Col xl="6" lg="6" md="6">
              {" "}
              <div className="upper">
              <div className="events_contein">
                <div className="b-title_upcoming b-title__bg title_contein_box">
                  <h5 className="bet_slip_txt">
                    <i></i>
                    <span>Upcoming Live Events</span>
                  </h5>
                </div>
                <div className="b-bet-grid__one_ev g-clearfix">
                  <div className="upcoming_nav">
                    <Table cellpadding="0" cellspacing="0">
                      <tr>
                        <td colspan="3"></td>
                        <td colspan="2">
                          <div className="u_dd_sports">
                            <div className="current_sports">
                              <div id="c-sport">
                                <span
                                  className="c_sport sport_select select-all"
                                  id=""
                                >
                                  <i className="b-menu__icon g-stack"></i>
                                  <span>All Sports</span>
                                </span>
                              </div>
                              <span className="u_search_button">
                                <i>▾</i>
                              </span>
                            </div>
                            <div className="sports_dd">
                              {sports.data.map(sport => (console.log("yess")))}
                              <div id="sports-list">
                                <a
                                  href="javascript:;"
                                  className="sport_select m-menu__link_s"
                                  id="s"
                                >
                                  <i className="b-menu__icon g-stack"></i>
                                  <span>Soccer</span>
                                </a>
                                <a
                                  href="javascript:;"
                                  className="sport_select m-menu__link_ih"
                                  id="ih"
                                >
                                  <i className="b-menu__icon g-stack"></i>
                                  <span>Ice Hockey</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div className="u_search">
                            <input
                              //   onKeyDown={
                              //     event.keyCode == 13
                              //       ? document
                              //           .getElementById("u_search_button")
                              //           .click()
                              //       : null
                              //   }
                              className="autoclear search_word"
                              placeholder="Search..."
                              type="text"
                            />
                            <a
                              id="u_search_button"
                              className="u_search_button"
                              href="javascript:;"
                            >
                              <i></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="d_week">
                        <td>
                          <a
                            id="1587375550"
                            className="date today selected"
                            href="javascript:;"
                          >
                            <span className="u_date">20/04</span>
                            <span className="u_day">Today</span>
                          </a>
                        </td>
                        <td>
                          <a
                            id="1587420000"
                            className="date"
                            href="javascript:;"
                          >
                            <span className="u_date">21/04</span>
                            <span className="u_day">Tuesday</span>
                          </a>
                        </td>
                        <td>
                          <a
                            id="1587506400"
                            className="date"
                            href="javascript:;"
                          >
                            <span className="u_date">22/04</span>
                            <span className="u_day">Wednesday</span>
                          </a>
                        </td>
                        <td>
                          <a
                            id="1587592800"
                            className="date"
                            href="javascript:;"
                          >
                            <span className="u_date">23/04</span>
                            <span className="u_day">Thursday</span>
                          </a>
                        </td>
                        <td>
                          <a
                            id="1587679200"
                            className="date"
                            href="javascript:;"
                          >
                            <span className="u_date">24/04</span>
                            <span className="u_day">Friday</span>
                          </a>
                        </td>
                        <td>
                          <a
                            id="1587765600"
                            className="date"
                            href="javascript:;"
                          >
                            <span className="u_date">25/04</span>
                            <span className="u_day">Saturday</span>
                          </a>
                        </td>
                        <td>
                          <a
                            id="1587852000"
                            className="date"
                            href="javascript:;"
                          >
                            <span className="u_date">26/04</span>
                            <span className="u_day">Sunday</span>
                          </a>
                        </td>
                      </tr>
                    </Table>
                  </div>
                  <div id="subcontent">
                    <div className="up_content">
                      <Table
                        className="b-bet-grid"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <colgroup>
                          <col width="185" />
                          <col />
                          <col width="80" />
                        </colgroup>
                        <tbody>
                          <tr className="b-bet-grid__even">
                            <td className="b-bet-grid__cell">
                              <span className="cell_bord_l m-menu__link_s">
                                <i className="b-menu__icon g-stack"></i>
                                <b className="m-menu_name_sport">Soccer</b>
                              </span>
                            </td>
                            <td className="b-bet-grid__cell">
                              <span className="cell_bord_l">
                                <span className="b-cell_hover b-cell_hover_up">
                                  <b className="g-ellipsis">
                                    <div className="b-bet-live_name">
                                      <a
                                        title="Merw Mary - FC Asgabat"
                                        href="http://sportsbook-demo.bookie.ch/show/event/157530848/17034367/"
                                      >
                                        Merw Mary - FC Asgabat
                                      </a>
                                    </div>
                                    <div className="b-bet-live_lg">
                                      <span>World</span>
                                      <span className="league_name_arw">
                                        &#8250;&#8250;
                                      </span>
                                      <span title="Top League">Top League</span>
                                    </div>
                                  </b>
                                </span>
                              </span>
                            </td>
                            <td className="b-bet-grid__cell">
                              <span className="m-text_center b-cell_hover_up">
                                13:30
                              </span>
                            </td>
                          </tr>
                          <tr className="b-bet-grid__odd">
                            <td className="b-bet-grid__cell">
                              <span className="cell_bord_l m-menu__link_s">
                                <i className="b-menu__icon g-stack"></i>
                                <b className="m-menu_name_sport">Soccer</b>
                              </span>
                            </td>
                            <td className="b-bet-grid__cell">
                              <span className="cell_bord_l">
                                <span className="b-cell_hover b-cell_hover_up">
                                  <b className="g-ellipsis">
                                    <div className="b-bet-live_name">
                                      <a
                                        title="Nebitci - FC Energetik"
                                        href="http://sportsbook-demo.bookie.ch/show/event/157530848/17034368/"
                                      >
                                        Nebitci - FC Energetik
                                      </a>
                                    </div>
                                    <div className="b-bet-live_lg">
                                      <span>World</span>
                                      <span className="league_name_arw">
                                        &#8250;&#8250;
                                      </span>
                                      <span title="Top League">Top League</span>
                                    </div>
                                  </b>
                                </span>
                              </span>
                            </td>
                            <td className="b-bet-grid__cell">
                              <span className="m-text_center b-cell_hover_up">
                                14:00
                              </span>
                            </td>
                          </tr>
                          <tr className="b-bet-grid__even">
                            <td className="b-bet-grid__cell">
                              <span className="cell_bord_l m-menu__link_s">
                                <i className="b-menu__icon g-stack"></i>
                                <b className="m-menu_name_sport">Soccer</b>
                              </span>
                            </td>
                            <td className="b-bet-grid__cell">
                              <span className="cell_bord_l">
                                <span className="b-cell_hover b-cell_hover_up">
                                  <b className="g-ellipsis">
                                    <div className="b-bet-live_name">
                                      <a
                                        title="Ahal FK - Sagadam"
                                        href="http://sportsbook-demo.bookie.ch/show/event/157530848/17034369/"
                                      >
                                        Ahal FK - Sagadam
                                      </a>
                                    </div>
                                    <div className="b-bet-live_lg">
                                      <span>World</span>
                                      <span className="league_name_arw">
                                        &#8250;&#8250;
                                      </span>
                                      <span title="Top League">Top League</span>
                                    </div>
                                  </b>
                                </span>
                              </span>
                            </td>
                            <td className="b-bet-grid__cell">
                              <span className="m-text_center b-cell_hover_up">
                                15:30
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <div className="paginator_contein">
                        <div className="b-paginator g-right">
                          <b className="b-paginator__item g-stack b-paginator__current ">
                            1
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Col>
            <Col xl="3" lg="3" md="3">
              {" "}
              <div id="betcard_container">
                <div
                  id="betcard"
                  className="b-betcart__out g-hidden cashout_enabled" 
                  
                />
                <div className="b-betcart__out b-betcart__out_clone cashout_enabled">
                  <div
                    id="betcard-body"
                    className="b-betcart betcart-body bookie-ui-tabs bookie-ui-widget bookie-ui-widget-content bookie-ui-corner-all betcart-bankers-enabled"
                    init="true"
                  >
                    <div className="b-title b-title__bg title_reg  my-bets_tabs selected">
                      <h5 className="bet_slip_txt">
                        <span className="dec_txt betcard" onClick={e => {
                setActiveTab({betCart: true, cashOut: false});
              }}>Betting Slip</span>
                        <span className="g-right my-bets" onClick={e => {
                setActiveTab({betCart: false, cashOut: true});
              }}>Cash Out</span>
                      </h5>
                    </div>
                    <div style = {{display: betCart ? 'block' : 'none'}}>
                    <ul
                      id="tab-nav"
                      className="betcart-head g-clearfix bookie-ui-tabs-nav bookie-ui-helper-reset bookie-ui-helper-clearfix bookie-ui-widget-header bookie-ui-corner-all"
                    >
                      <li className="tab-nav-item tab-nav-item-3 bookie-ui-state-default bookie-ui-corner-top ui-state-disabled">
                        <a href="javascript:;">
                          <span>Single</span>
                        </a>
                      </li>
                      <li className="tab-nav-item tab-nav-item-3 bookie-ui-state-default bookie-ui-corner-top ui-state-disabled">
                        <a href="javascript:;">
                          <span>Combined</span>
                        </a>
                      </li>
                      <li className="tab-nav-item tab-nav-item-3 bookie-ui-state-default bookie-ui-corner-top ui-state-disabled">
                        <a href="javascript:;">
                          <span>System</span>
                        </a>
                      </li>
                    </ul>
                   
                    <div className="betcart-pane bookie-ui-tabs-panel bookie-ui-widget-content bookie-ui-corner-bottom">
                      <div className="text_clone clone_betcart">
                        <b>No bets selected yet</b>. Click on the respective
                        odds to select the bets.
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="my-bets" class="cashout_enabled" style = {{display: cashOut ? 'block' : 'none'}}>
                {/* <div class="b-title b-title__bg title_reg my-bets_tabs">
                  <h5 class="bet_slip_txt">
                    <span class="dec_txt betcard">Betting Slip</span>
                    <span class="g-right my-bets">Cash Out</span>
                  </h5>
                </div> */}
                <div class="my-bets_filter-cell">
                  <label for="my-bets_filter">Show: </label>
                  <select name="my-bets_filter" id="my-bets_filter">
                    <option value="Bets I Can Cash Out (2)">
                      Bets I Can Cash Out (0)
                    </option>
                  </select>
                </div>
                <span id="cashout_msg" class="g-hidden"></span>
                <div class="my-bets_cell-i"></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default LivePage;
