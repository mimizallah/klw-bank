import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardTitle,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import GalleryDetail from '../../../../containers/pages/GalleryDetail';
import GalleryProfile from '../../../../containers/pages/GalleryProfile';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import SingleLightbox from '../../../../components/pages/SingleLightbox';
import whotoFollowData from '../../../../data/follow';
import UserFollow from '../../../../components/common/UserFollow';
import UserCardBasic from '../../../../components/cards/UserCardBasic';
import recentPostsData from '../../../../data/recentposts';
import RecentPost from '../../../../components/common/RecentPost';
import posts from '../../../../data/posts';
import Post from '../../../../components/cards/Post';

const friendsData = whotoFollowData.slice();
const followData = whotoFollowData.slice(0, 5);

const ProfileSocial = ({ match }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <Row>
        <Colxx xxs="12 mt-3">
          <h1>Sunday Ishaya </h1>

          <Nav tabs className="separator-tabs ml-0 mb-5">
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'profile',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('profile')}
                to="#"
                location={{}}
              >
                <IntlMessages id="pages.profile" />
              </NavLink>
            </NavItem>
            
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="profile">
              <Row>
                <Colxx xxs="12" className="my-5">
                  {/* <Card>
                    <SingleLightbox
                      thumb="/assets/img/social/header.jpg"
                      large="/assets/img/social/header.jpg"
                      className="social-header card-img"
                    />
                  </Card> */}
                </Colxx>
                <Colxx xxs="12" lg="5" xl="6" className="col-left">
                  <SingleLightbox
                    thumb="/assets/img/profiles/l-1.jpg"
                    large="/assets/img/profiles/l-1.jpg"
                    className="img-thumbnail card-img social-profile-img"
                  />

                  <Card className="mb-4">
                    <CardBody>
                      <div className="text-center pt-4">
                        <p className="list-item-heading pt-2">Sunday Ishaya</p>
                      </div>
                      <p className="mb-3">
                        I’m a web developer. I spend my whole day, practically
                        every day, experimenting with HTML, CSS, and JavaScript;
                        dabbling with Python and Ruby.
                      </p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.location" />
                      </p>
                      <p className="mb-3">FCT, Nigeria</p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.responsibilities" />
                      </p>
                      <p className="mb-3">
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          FRONTEND
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          JAVASCRIPT
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          SECURITY
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          DESIGN
                        </Badge>
                      </p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="menu.contact" />
                      </p>
                      <div className="social-icons">
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item">
                            <NavLink to="#">
                              <i className="simple-icon-social-facebook" />
                            </NavLink>
                          </li>
                          <li className="list-inline-item">
                            <NavLink to="#">
                              <i className="simple-icon-social-twitter" />
                            </NavLink>
                          </li>
                          <li className="list-inline-item">
                            <NavLink to="#">
                              <i className="simple-icon-social-instagram" />
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>

              </Colxx>
              <Colxx xxs="12" lg="5" xl="6" className="col-left">
                <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        Update Your Profile
                      </CardTitle>
                      <hr />
                      Update form
                    </CardBody>
                  </Card>
              </Colxx>
              </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default ProfileSocial;
