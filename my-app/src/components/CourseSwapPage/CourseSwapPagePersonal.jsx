import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book-swap.png';
import search from '../../assets/search.png';
import { useState } from 'react';
import './CourseSwapPage.css';
import '../MainTheme.css';
import { CardTab, TabSwitcher, TabContent } from './Tab';

// disable eslint for Links right now
/* eslint-disable */
function CourseSwapPagePersonal() {
  return (
    <div className="swap-container">
      {/*div for sidebar with pages in CourseSwap*/}
      <SideBar />

      {/*div for search tab*/}
      <AddBar />

      {/*div for main course swap content*/}
      <CourseSwapContent />
    </div>
  );
}

function CourseSwapContent() {
  return (
    <ul className="cs-content">
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">CSCI 1302 - Software Development</div>
                <div id="instructor">Shah Bin Hossain</div>
                <div id="crn">69420</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
      <li className="cs-subcontent">
        <div id="user">Sha Hos</div>
        <CardTab>
          <div id="tabs">
            <TabSwitcher tabId={1}>Offered</TabSwitcher>
            <TabSwitcher tabId={2}>Requested</TabSwitcher>
          </div>
          <div>
            <TabContent id={1}>
              <div>
                <div id="name">POLS 1101 - American Government</div>
                <div id="instructor">Shahbin Hossain</div>
                <div id="crn">42069</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Park Hall</div>
              </div>
            </TabContent>
            <TabContent id={2}>
              <div>
                <div id="name">CSCI 2610 - Discrete Mathematics</div>
                <div id="instructor">Abraham Lincoln</div>
                <div id="crn">66666</div>
                <div id="time">[M] [Tu] [W] [Th] [F] 11:50AM - 12:30PM</div>
                <div id="location">Terry Hall</div>
              </div>
            </TabContent>
          </div>
        </CardTab>
        <button id="option">DELETE</button>
      </li>
    </ul>
  );
}

function SideBar() {
  return (
    <div className="side-tab">
      <img src={logo} alt="course-swap-logo" width={'50%'} />
      <div className="side-list">
        {/* TODO: fix links/buttons */}
        <Link to="../course-swap" className="text-link">
          Find
        </Link>
        <Link to="" className="text-link">
          Offer
        </Link>
        <Link to="../course-swap/saved" className="text-link">
          Saved
        </Link>
      </div>
    </div>
  );
}

function AddBar() {
  const [courseAddTab, addCourse] = useState('false');
  const toggleAdd = () => {
    addCourse(!courseAddTab);
  };

  return (
    <div className="cs-search">
      <div className={courseAddTab ? 'hide cs-add-popup' : 'show cs-add-popup'}>
        <h3>Add Course</h3>
        <table className="add-tabs">
          <tbody>
            <tr>
              <td></td>
              <td>OFFER</td>
              <td>REQUEST</td>
            </tr>
            <tr>
              <td>Subject:</td>
              <td>
                <CourseSubject />
              </td>
              <td>
                <CourseSubject />
              </td>
            </tr>
            <tr>
              <td>Course Number:</td>
              <td>
                <input id="add-input" type="number" size="4"></input>
              </td>
              <td>
                <input id="add-input" type="number" size="4"></input>
              </td>
            </tr>
            <tr>
              <td>Instructor:</td>
              <td>
                <input id="add-input" type="text"></input>
              </td>
              <td>
                <input id="add-input" type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="text" size={2}></input>
                <input id="add-input" type="text" size={2}></input>
                <input id="add-input" type="text" size={2}></input>
              </td>
              <td>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="checkbox"></input>
                <input id="add-input" type="text" size={2}></input>
                <input id="add-input" type="text" size={2}></input>
                <input id="add-input" type="text" size={2}></input>
              </td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>
                <input id="add-input" type="text"></input>
              </td>
              <td>
                <input id="add-input" type="text"></input>
              </td>
            </tr>
            <tr>
              <td>CRN:</td>
              <td>
                <input id="add-input" type="number" size="6"></input>
              </td>
              <td>
                <input id="add-input" type="number" size="6"></input>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="add-option" onClick={toggleAdd}>
          ADD
        </button>
      </div>

      <label className="cs-page-titles">Personal Offers</label>
      <button type="button" id="cs-addBtn" onClick={toggleAdd}>
        Add Course
      </button>
    </div>
  );
}

function CourseSubject() {
  return (
    <div className="search_dropdown">
      <select name="sel_subj" size="1" id="subj-box">
        <option value="AAEC">AAEC</option>
        <option value="ACCT">ACCT</option>
        <option value="ADPR">ADPR</option>
        <option value="AESC">AESC</option>
        <option value="AFAM">AFAM</option>
        <option value="AFST">AFST</option>
        <option value="AIRS">AIRS</option>
        <option value="ALDR">ALDR</option>
        <option value="AMSL">AMSL</option>
        <option value="ANTH">ANTH</option>
        <option value="ARAB">ARAB</option>
        <option value="ARGD">ARGD</option>
        <option value="ARHI">ARHI</option>
        <option value="ARST">ARST</option>
        <option value="ARTI">ARTI</option>
        <option value="ARTS">ARTS</option>
        <option value="ASTR">ASTR</option>
        <option value="BCMB">BCMB</option>
        <option value="BIOL">BIOL</option>
        <option value="BIOS">BIOS</option>
        <option value="BUSN">BUSN</option>
        <option value="CBIO">CBIO</option>
        <option value="CHEM">CHEM</option>
        <option value="CHNS">CHNS</option>
        <option value="CLAS">CLAS</option>
        <option value="CMLT">CMLT</option>
        <option value="COMM">COMM</option>
        <option value="CSCI">CSCI</option>
        <option value="CSEE">CSEE</option>
        <option value="DANC">DANC</option>
        <option value="EBUS">EBUS</option>
        <option value="ECHD">ECHD</option>
        <option value="ECOL">ECOL</option>
        <option value="ECON">ECON</option>
        <option value="ECSE">ECSE</option>
        <option value="EDIT">EDIT</option>
        <option value="EHSC">EHSC</option>
        <option value="ELEE">ELEE</option>
        <option value="EMST">EMST</option>
        <option value="ENGL">ENGL</option>
        <option value="ENGR">ENGR</option>
        <option value="ENTO">ENTO</option>
        <option value="ENVE">ENVE</option>
        <option value="ENVM">ENVM</option>
        <option value="EXRS">EXRS</option>
        <option value="FANR">FANR</option>
        <option value="FCID">FCID</option>
        <option value="FDNS">FDNS</option>
        <option value="FHCE">FHCE</option>
        <option value="FILM">FILM</option>
        <option value="FINA">FINA</option>
        <option value="FREN">FREN</option>
        <option value="FYOS">FYOS</option>
        <option value="GENE">GENE</option>
        <option value="GEOG">GEOG</option>
        <option value="GEOL">GEOL</option>
        <option value="GREK">GREK</option>
        <option value="GRMN">GRMN</option>
        <option value="HIPR">HIPR</option>
        <option value="HIST">HIST</option>
        <option value="HNDI">HNDI</option>
        <option value="HONS">HONS</option>
        <option value="HORT">HORT</option>
        <option value="HPRB">HPRB</option>
        <option value="ILAD">ILAD</option>
        <option value="INTB">INTB</option>
        <option value="INTL">INTL</option>
        <option value="ITAL">ITAL</option>
        <option value="JOUR">JOUR</option>
        <option value="JPNS">JPNS</option>
        <option value="KINS">KINS</option>
        <option value="KREN">KREN</option>
        <option value="LACS">LACS</option>
        <option value="LAND">LAND</option>
        <option value="LEGL">LEGL</option>
        <option value="LING">LING</option>
        <option value="MARK">MARK</option>
        <option value="MARS">MARS</option>
        <option value="MATH">MATH</option>
        <option value="MCHE">MCHE</option>
        <option value="MGMT">MGMT</option>
        <option value="MIBO">MIBO</option>
        <option value="MIST">MIST</option>
        <option value="MSIT">MSIT</option>
        <option value="MUSI">MUSI</option>
        <option value="NMIX">NMIX</option>
        <option value="PATH">PATH</option>
        <option value="PBIO">PBIO</option>
        <option value="PEDB">PEDB</option>
        <option value="PERS">PERS</option>
        <option value="PHIL">PHIL</option>
        <option value="PHY">PHY</option>
        <option value="PHYS">PHYS</option>
        <option value="POLS">POLS</option>
        <option value="PORT">PORT</option>
        <option value="PSYC">PSYC</option>
        <option value="RELI">RELI</option>
        <option value="RMIN">RMIN</option>
        <option value="RUSS">RUSS</option>
        <option value="SOCI">SOCI</option>
        <option value="SPAN">SPAN</option>
        <option value="SPCM">SPCM</option>
        <option value="STAT">STAT</option>
        <option value="SWAH">SWAH</option>
        <option value="THEA">THEA</option>
        <option value="UNIV">UNIV</option>
        <option value="VIET">VIET</option>
        <option value="WMST">WMST</option>
      </select>
    </div>
  );
}

export default CourseSwapPagePersonal;
